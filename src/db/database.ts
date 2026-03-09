import Dexie, { Table } from 'dexie'
import { Message } from './chat-db'
import { Profile } from './profile-db'

export class BBDatabase extends Dexie {
  messages!: Table<Message>
  profiles!: Table<Profile>

  constructor() {
    super('BBDatabase')
    this.version(1).stores({
      messages: '++id, timestamp', // Primary key and indexes
      profiles: '++id, createdAt',
    })

    // Map the table schemas to the TypeScript interfaces
    this.messages.mapToClass(Message)
    this.profiles.mapToClass(Profile)
  }
}

let db: BBDatabase

export function getDatabase() {
  if (!db) {
    db = new BBDatabase()
  }
  return db
}
