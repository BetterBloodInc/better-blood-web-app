export const enum ConditionSeverity {
  MILD = 'Mild',
  MODERATE = 'Moderate',
  SEVERE = 'Severe',
}
export const enum HealthConditionType {
  IMMUNE_SYSTEM_DISORDER = 'Immune System Disorder',
}

export const enum HealthConditionID {}

export interface HealthCondition {
  id: HealthConditionID
  type: HealthConditionType
}

export type HealthConditions = Record<HealthConditionID, HealthCondition>
