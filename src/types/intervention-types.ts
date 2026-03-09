import { ProductId } from './product-types'

export const enum InterventionId {
  // therapy
  ChelationTherapy = 'ChelationTherapy',

  // increase
  IncreaseExercise = 'IncreaseExercise',
  IncreaseFiber = 'IncreaseFiber',
  IncreaseProtein = 'IncreaseProtein',
  IncreaseFolate = 'IncreaseFolate',
  IncreaseSunExposure = 'IncreaseSunExposure',
  IncreaseCysteine = 'IncreaseCysteine',

  // improve
  ImproveSleepQuality = 'ImproveSleepQuality',

  // eat
  EatWholeFoods = 'EatWholeFoods',
  EatGinger = 'EatGinger',
  EatGarlic = 'EatGarlic',
  EatFish = 'EatFish',
  EatNuts = 'EatNuts',
  EatSulfurRichFoods = 'EatSulfurRichFoods',

  // stop
  QuitSmoking = 'QuitSmoking',

  // monitor
  MonitorHRV = 'MonitorHRV',

  // limit
  LimitSugar = 'LimitSugar',
  LimitSodium = 'LimitSodium',
  LimitAlcohol = 'LimitAlcohol',
  LimitCaffeine = 'LimitCaffeine',
  LimitSalt = 'LimitSalt',
  LimitHighArsenicFoods = 'LimitHighArsenicFoods',
  LimitSaturatedFats = 'LimitSaturatedFats',
  LimitTransFats = 'LimitTransFats',
  LimitProcessedFood = 'LimitProcessedFood',
  LimitRedMeat = 'LimitRedMeat',
  LimitProcessedMeat = 'LimitProcessedMeat',
  LimitRefinedCarbs = 'LimitRefinedCarbs',
  StayHydrated = 'StayHydrated',
  LimitFastFood = 'LimitFastFood',
  Sauna = 'Sauna',
  ColdPlunge = 'ColdPlunge',
  LimitStress = 'LimitStress',
  Sleep = 'Sleep',
  LimitScreenTime = 'LimitScreenTime',
  LimitEMF = 'LimitEMF',
  LimitToxins = 'LimitToxins',
  LimitPesticides = 'LimitPesticides',
  LimitHeavyMetals = 'LimitHeavyMetals',
  LimitPlastics = 'LimitPlastics',
  LimitMold = 'LimitMold',
  LimitAirPollution = 'LimitAirPollution',
  LimitNoise = 'LimitNoise',
  LimitRadiation = 'LimitRadiation',
  LimitBlueLight = 'LimitBlueLight',
  LimitSunExposure = 'LimitSunExposure',
  LimitEMR = 'LimitEMR',
  LimitInfections = 'LimitInfections',
  LimitAllergens = 'LimitAllergens',
  LimitToxicPeople = 'LimitToxicPeople',
  LimitNegativeThoughts = 'LimitNegativeThoughts',
  LimitAnger = 'LimitAnger',
  LimitFear = 'LimitFear',
  LimitAnxiety = 'LimitAnxiety',
  LimitDepression = 'LimitDepression',
  LimitLoneliness = 'LimitLoneliness',
  LimitGrief = 'LimitGrief',
  LimitTrauma = 'LimitTrauma',
  LimitAbuse = 'LimitAbuse',
  LimitNegativity = 'LimitNegativity',
  LimitHate = 'LimitHate',
  LimitViolence = 'LimitViolence',

  // supplement
  SupplementVitaminD = 'SupplementVitaminD',
  SupplementOmega3 = 'SupplementOmega3',
  SupplementMagnesium = 'SupplementMagnesium',
  SupplementZinc = 'SupplementZinc',
  SupplementIron = 'SupplementIron',
  SupplementB12 = 'SupplementB12',
  SupplementProbiotics = 'SupplementProbiotics',
  SupplementMultivitamin = 'SupplementMultivitamin',
  SupplementVitaminC = 'SupplementVitaminC',
  SupplementVitaminK = 'SupplementVitaminK',
  SupplementVitaminE = 'SupplementVitaminE',
  SupplementVitaminA = 'SupplementVitaminA',
  SupplementVitaminB1 = 'SupplementVitaminB1',
  SupplementVitaminB2 = 'SupplementVitaminB2',
  SupplementVitaminB3 = 'SupplementVitaminB3',
  SupplementVitaminB5 = 'SupplementVitaminB5',
  SupplementVitaminB6 = 'SupplementVitaminB6',
  SupplementVitaminB7 = 'SupplementVitaminB7',
  SupplementVitaminB9 = 'SupplementVitaminB9',
  SupplementVitaminB11 = 'SupplementVitaminB11',
  SupplementALA = 'SupplementALA',
  SupplementDHA = 'SupplementDHA',
  SupplementEPA = 'SupplementEPA',
  SupplementGLA = 'SupplementGLA',
  SupplementCLA = 'SupplementCLA',
  SupplementCoQ10 = 'SupplementCoQ10',
  SupplementAstaxanthin = 'SupplementAstaxanthin',
  SupplementCurcumin = 'SupplementCurcumin',
  SupplementResveratrol = 'SupplementResveratrol',
  SupplementQuercetin = 'SupplementQuercetin',
  SupplementEGCG = 'SupplementEGCG',
  SupplementLutein = 'SupplementLutein',
  SupplementLycopene = 'SupplementLycopene',
  SupplementBetaCarotene = 'SupplementBetaCarotene',
  SupplementGlutathione = 'SupplementGlutathione',
  SupplementMelatonin = 'SupplementMelatonin',
  SupplementNAC = 'SupplementNAC',
  SupplementGrowthHormone = 'SupplementGrowthHormone',
  SupplementTestosterone = 'SupplementTestosterone',
  SupplementEstrogen = 'SupplementEstrogen',
  SupplementProgesterone = 'SupplementProgesterone',
  SupplementThyroid = 'SupplementThyroid',
  SupplementAdrenal = 'SupplementAdrenal',
  SupplementCortisol = 'SupplementCortisol',
  SupplementDHEA = 'SupplementDHEA',
  SupplementMetformin = 'SupplementMetformin',
  SupplementEchinacea = 'SupplementEchinacea',
  SupplementAstragalus = 'SupplementAstragalus',
  SupplementCalcium = 'SupplementCalcium',

  // medication

  // medical

  // lifestyle
  CookRiceWithMoreWater = 'CookRiceWithMoreWater',
  RestAndRecover = 'RestAndRecover',
}
export const enum InterventionCategory {
  Diet = 'Diet',
  Lifestyle = 'Lifestyle',
  Supplement = 'Supplement',
  Medication = 'Medication',
  Medical = 'Medical',
  Nutrition = 'Nutrition',
  Exercise = 'Exercise',
  Other = 'Other',
}

export interface Intervention {
  id: InterventionId
  name: string
  category: InterventionCategory
  description: string
  products: ProductId[]
}

/**
 * The status of the biomarker for the intervention to be recommended.
 */
export enum InterventionRequirement {
  None = 'None',
  Low = 'Low',
  High = 'High',
}
