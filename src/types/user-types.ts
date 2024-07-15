import { BiomarkerId, Ethnicity, Gender } from './biomarker-types'
import {
  ConditionSeverity,
  HealthConditionID,
  HealthConditions,
} from './health-condition-types'

export interface IProfile {
  id?: number
  name: string // nickname
  notes?: string // notes about the profile
  demographic: Demographic
  healthConditions: HealthConditions
  biomarkers: BiomarkerMeasurements
  interventions: any // TODO
  createdAt: number
}

export type Demographic = {
  age?: number
  gender?: Gender
  ethnicity?: Ethnicity
  country?: string
  weight?: number
  weightUnit?: 'lbs' | 'kg'
  height?: number
  heightUnit?: 'in' | 'cm'
  isPregnant?: boolean
}

export interface BiomarkerMeasurement {
  biomarkerId: BiomarkerId
  value: number
  timestamp: number
}

export type BiomarkerMeasurements = Record<BiomarkerId, BiomarkerMeasurement[]>

export interface UserHealthCondition {
  conditionId: HealthConditionID
  startDate: string
  endDate: string
  severity: ConditionSeverity
}
