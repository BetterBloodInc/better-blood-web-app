import { BiomarkerMeasurements, Demographic } from '~src/types/user-types'
import { getDatabase } from './database'
import { HealthConditions } from '~src/types/health-condition-types'
import { INITIAL_BIOMARKER_MEASUREMENTS } from '~src/constants/user'
import { IProfile } from '~src/types/user-types'

export class Profile implements IProfile {
  id?: number
  name: string // nickname
  notes?: string // notes about the profile
  demographic: Demographic
  healthConditions: HealthConditions
  biomarkers: BiomarkerMeasurements
  interventions: any // TODO
  createdAt: number

  constructor(name: string) {
    this.name = name
    this.createdAt = Date.now()
    this.demographic = {}
    this.healthConditions = {}
    this.biomarkers = INITIAL_BIOMARKER_MEASUREMENTS
  }

  add() {
    return getDatabase().profiles.add(this)
  }

  save() {
    return getDatabase().profiles.put(this)
  }

  delete() {
    return getDatabase().profiles.delete(this.id)
  }

  static async createFromData(data: IProfile) {
    const profile = new Profile(data.name)
    return Object.assign(profile, data)
  }

  static async fetchAll() {
    return await getDatabase().profiles.toArray()
  }

  static async fetchById(id: number) {
    return await getDatabase().profiles.get(id)
  }

  static async clearAll() {
    return await getDatabase().profiles.clear()
  }
}
