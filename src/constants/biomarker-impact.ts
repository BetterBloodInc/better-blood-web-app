import { BiomarkerId } from "~src/types/biomarker-types"

type Level = 'low' | 'med' | 'high'

export const IMPACT_METRICS: {
  biomarkerId: BiomarkerId
  impactFromNutrition: Level
  impactFromExercise: Level
  impactFromGenetics: Level
  impactFromAge: Level
}[] = [
  {
    biomarkerId: BiomarkerId.WBC,
    impactFromNutrition: 'low',
    impactFromExercise: 'low',
    impactFromGenetics: 'med',
    impactFromAge: 'low',
  },
  {
    biomarkerId: BiomarkerId.RBC,
    impactFromNutrition: 'med',
    impactFromExercise: 'med',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.Hgb,
    impactFromNutrition: 'med',
    impactFromExercise: 'med',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.Hct,
    impactFromNutrition: 'med',
    impactFromExercise: 'med',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.PLT,
    impactFromNutrition: 'low',
    impactFromExercise: 'low',
    impactFromGenetics: 'med',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.Glu,
    impactFromNutrition: 'high',
    impactFromExercise: 'high',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.BUN,
    impactFromNutrition: 'med',
    impactFromExercise: 'low',
    impactFromGenetics: 'med',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.Crea,
    impactFromNutrition: 'low',
    impactFromExercise: 'high',
    impactFromGenetics: 'med',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.UA,
    impactFromNutrition: 'high',
    impactFromExercise: 'med',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.CHOL,
    impactFromNutrition: 'high',
    impactFromExercise: 'high',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.LDL,
    impactFromNutrition: 'high',
    impactFromExercise: 'high',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.HDL,
    impactFromNutrition: 'high',
    impactFromExercise: 'high',
    impactFromGenetics: 'high',
    impactFromAge: 'high',
  },
  {
    biomarkerId: BiomarkerId.Tg,
    impactFromNutrition: 'high',
    impactFromExercise: 'high',
    impactFromGenetics: 'med',
    impactFromAge: 'high',
  },
]
