import { EXTRACT_BIOMARKERS_FROM_IMAGE_PROMPT } from '~src/constants/prompts'
import { BiomarkerMeasurement } from '~src/types/user-types'

const REGION = 'us-central1'
const MODEL_ID = 'gemini-1.5-pro-preview-0409'
const PROJECT_ID = 'better-blood'
const REQUEST_TYPE = 'generateContent'
const VERTEX_AI_API_URL = `https://${REGION}-aiplatform.googleapis.com/v1/projects/${PROJECT_ID}/locations/${REGION}/publishers/google/models/${MODEL_ID}:${REQUEST_TYPE}`

// 'https://us-central1-vertex-ai-gpt-4.cloudfunctions.net/extract-biomarkers-from-image'

export const extractBiomarkersFromImage = async (
  vertexAPIKey: string,
  base64String: string,
): Promise<{ metrics: BiomarkerMeasurement[]; context: string }> => {
  const res = await fetch(VERTEX_AI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${vertexAPIKey}`,
    },
    body: JSON.stringify({
      contents: {
        role: 'user',
        parts: [
          {
            text: EXTRACT_BIOMARKERS_FROM_IMAGE_PROMPT,
          },
          {
            inlineData: {
              mimeType: 'image/png',
              data: base64String
                .replace('data:image/png;base64,', '')
                .replace('"', ''),
            },
          },
        ],
      },
      generationConfig: {
        responseMimeType: 'application/json',
      },
    }),
  })

  const data = await res.json()
  let content = data.candidates[0].content.parts[0].text
  return JSON.parse(content)
}
