// Define TypeScript interfaces for what data will be stored in each table
export interface IMessage {
  id?: number // Optional because it's auto-incremented
  prompt: string
  response: string
  timestamp: number
  totalTokens: number
}
