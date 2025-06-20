import { OPTIMAL_BIOMARKER_RANGE_MAP } from '../constants/biomarker-ranges'
import {
  AgeRange,
  BiomarkerId,
  BiomarkerRange,
  Ethnicity,
  Gender,
} from '../types/biomarker-types'
import { Demographic } from '../types/user-types'

export function getAgeRangeFromAge(age: number | undefined | null): AgeRange {
  if (!age) {
    return AgeRange.Unknown
  }
  if (age < 20) {
    return AgeRange.Teens
  }
  if (age < 30) {
    return AgeRange.Twenties
  }
  if (age < 40) {
    return AgeRange.Thirties
  }
  if (age < 50) {
    return AgeRange.Forties
  }
  if (age < 60) {
    return AgeRange.Fifties
  }
  if (age < 70) {
    return AgeRange.Sixties
  }
  if (age < 80) {
    return AgeRange.Seventies
  }
  if (age < 90) {
    return AgeRange.Eighties
  }
  if (age < 100) {
    return AgeRange.Nineties
  }
  return AgeRange.Unknown
}

export function getMinMaxForMetric(
  biomarkerId: BiomarkerId,
  demographic: Demographic | undefined,
  customRange: BiomarkerRange | undefined,
) {
  const ageRange = getAgeRangeFromAge(demographic?.age)
  const gender = demographic?.gender ?? Gender.Other
  const ethnicity = demographic?.ethnicity ?? Ethnicity.Other

  const genderRecord =
    OPTIMAL_BIOMARKER_RANGE_MAP[biomarkerId]?.[0]?.range?.[gender]
  const byGender =
    genderRecord ??
    OPTIMAL_BIOMARKER_RANGE_MAP[biomarkerId]?.[0]?.range?.[Gender.Other]
  const ageRecord = byGender?.[ageRange]
  const byAgeRange = ageRecord ?? byGender?.[AgeRange.Unknown]
  const ethnicityRecord = byAgeRange?.[ethnicity]
  const byEthnicity = ethnicityRecord ?? byAgeRange?.[Ethnicity.Other]

  const min = customRange?.min ?? byEthnicity?.[0] ?? 0
  const max = customRange?.max ?? byEthnicity?.[1] ?? 0
  return {
    sourceId: customRange?.source ?? OPTIMAL_BIOMARKER_RANGE_MAP[biomarkerId]?.[0]?.source,
    referencedGender: genderRecord ? demographic?.gender : null,
    referencedAgeRange: ageRecord ? ageRange : null,
    referencedEthnicity: ethnicityRecord ? ethnicity : null,
    min,
    max,
  }
}

export function formatRange(min: number, max: number): string {
  if (min && max) {
    return `${min} - ${max}`
  }
  if (min) {
    return `> ${min}`
  }
  if (max) {
    return `< ${max}`
  }
  return ''
}

export function abbrNumber(value: number): string {
  // Define thresholds for different abbreviations
  const SI_SYMBOL = ['', 'K', 'M', 'B', 'T']

  // Determine the tier of the number based on its size
  const tier = (Math.log10(Math.abs(value)) / 3) | 0

  // If the number is less than 1000, return it without any abbreviation
  if (tier === 0) return value.toFixed(1)

  // Get the suffix for the given tier
  const suffix = SI_SYMBOL[tier]

  // Calculate the scale for the number based on its tier
  const scale = Math.pow(10, tier * 3)

  // Format the number to one decimal place and add the appropriate suffix
  const scaled = value / scale
  return suffix.toString() ? scaled.toFixed(1) + suffix : scaled.toString()
}
