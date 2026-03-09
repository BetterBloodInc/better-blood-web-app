import { Profile } from '~src/db/profile-db'
import { BiomarkerId } from '~src/types/biomarker-types'
import { BiomarkerMeasurement, Demographic } from '~src/types/user-types'

const BASE_PROMPT = 'You are a helpful assistant. Be as concise as possible.'

interface DataToSend {
  demographic: Demographic
  biomarkers: Record<BiomarkerId, BiomarkerMeasurement[]>
}

export function generateSystemMessage(profile: Profile | undefined): string {
  if (!profile) {
    return BASE_PROMPT
  }

  const biomarkerMeasurementsWithValues = Object.keys(
    profile.biomarkers,
  ).filter((key) => profile.biomarkers[key as BiomarkerId].length > 0)
  const biomarkers = biomarkerMeasurementsWithValues.reduce<
    Record<BiomarkerId, BiomarkerMeasurement[]>
  >(
    (acc, key) => {
      acc[key as BiomarkerId] = profile.biomarkers[key as BiomarkerId]
      return acc
    },
    {} as Record<BiomarkerId, BiomarkerMeasurement[]>,
  )

  const dataToSend: DataToSend = {
    demographic: profile.demographic,
    biomarkers,
  }
  const systemMessage =
    `${BASE_PROMPT} Try to answer the user's questions based on the user's demographic and biomarker data attached. Prioritize responding based on the biomarkers mentioned by the user if specific markers are mentioned.` +
    JSON.stringify(dataToSend)
  return systemMessage
}
