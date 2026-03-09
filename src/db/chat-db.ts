import { getDatabase } from './database'

export class Message {
  id?: number
  prompt: string
  response: string
  totalTokens: number
  timestamp: number

  constructor(prompt: string, response: string, totalTokens: number) {
    this.prompt = prompt
    this.response = response
    this.totalTokens = totalTokens
    this.timestamp = Date.now()
  }

  save() {
    return getDatabase().messages.add(this)
  }

  static async fetchAll() {
    return await getDatabase().messages.toArray()
  }

  static async clearAll() {
    return await getDatabase().messages.clear()
  }

  static async createContextForNewPrompt(newPrompt: string) {
    const history = await this.fetchAll() // Retrieve the last 10 chats, for example
    const context = history
      .map((chat) => `Prompt: ${chat.prompt}\nResponse: ${chat.response}`)
      .join('\n\n')

    // Append the new prompt to the context
    return `${context}\n\nPrompt: ${newPrompt}`
  }
}
