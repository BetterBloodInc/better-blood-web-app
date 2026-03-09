import { EXTRACT_BIOMARKERS_FROM_IMAGE_PROMPT } from '~src/constants/prompts'
import { IMessage } from '~src/types/chat-types'
import { BiomarkerMeasurement } from '~src/types/user-types'

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

export async function sendChatToServer({
  apiKey,
  prompt,
  system,
  previousMessages,
}: {
  apiKey: string
  prompt: string
  system?: string
  previousMessages?: { prompt: string; response: string }[]
}) {
  let messages = []
  if (system) {
    messages.push({ role: 'system', content: system })
  }
  if (previousMessages?.length) {
    previousMessages = previousMessages.slice(-4)
    messages = messages.concat(
      previousMessages
        .map((m) => [
          { role: 'user', content: m.prompt },
          { role: 'assistant', content: m.response },
        ])
        .flat(),
    )
  }
  messages.push({ role: 'user', content: prompt })
  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4-turbo', // todo - allow user to select model
      messages,
      temperature: 0.3,
    }),
  })
  const json = await response.json()
  return {
    message: json.choices[0].message.content,
    totalTokens: json.usage.total_tokens,
  }
}

function buildContext(conversations: IMessage[], maxTokens: number) {
  let currentTokens = 0
  let context = ''

  for (let i = conversations.length - 1; i >= 0; i--) {
    const convoText = `Prompt: ${conversations[i].prompt}\nResponse: ${conversations[i].response}`
    const convoTokens = countTokens(convoText) // Function to count tokens, needs to be implemented

    if (currentTokens + convoTokens > maxTokens) break
    context = convoText + '\n\n' + context
    currentTokens += convoTokens
  }

  return context
}

function countTokens(text: string) {
  const cleanText = text.trim()
  const spaceCount = (cleanText.match(/\s+/g) || []).length
  const punctCount = (cleanText.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g) || [])
    .length
  return spaceCount + punctCount + 1 // Add 1 for the first word
}

export const extractBiomarkersFromImage = async (
  apiKey: string,
  base64String: string,
): Promise<{ metrics: BiomarkerMeasurement[]; context: string }> => {
  const res = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: EXTRACT_BIOMARKERS_FROM_IMAGE_PROMPT,
            },
            {
              type: 'image_url',
              image_url: {
                url: base64String,
              },
            },
          ],
        },
      ],
      max_tokens: 2000,
    }),
  })

  const data = await res.json()
  let content = data.choices[0].message.content.replace(/\n/g, '') // Remove new lines
  return JSON.parse(content)
}
