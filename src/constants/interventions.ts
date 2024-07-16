import {
  Intervention,
  InterventionCategory,
  InterventionId,
} from '~src/types/intervention-types'

export const INTERVENTIONS: Partial<Record<InterventionId, Intervention>> = {
  [InterventionId.QuitSmoking]: {
    id: InterventionId.QuitSmoking,
    name: 'Quit Smoking',
    category: InterventionCategory.Lifestyle,
    description:
      'Quit smoking to improve your health and reduce your risk of cancer, heart disease, and other serious health conditions.',
    products: [],
  },
  [InterventionId.IncreaseExercise]: {
    id: InterventionId.IncreaseExercise,
    name: 'Increase Exercise',
    category: InterventionCategory.Exercise,
    description:
      'Regular exercise can help you maintain a healthy weight, improve your mood, and reduce your risk of chronic diseases.',
    products: [],
  },
  [InterventionId.StayHydrated]: {
    id: InterventionId.StayHydrated,
    name: 'Stay Hydrated',
    category: InterventionCategory.Lifestyle,
    description:
      'Drinking enough water is essential for your health. It helps regulate body temperature, transport nutrients, and remove waste from your body.',
    products: [],
  },
  [InterventionId.SupplementVitaminD]: {
    id: InterventionId.SupplementVitaminD,
    name: 'Supplement Vitamin D',
    category: InterventionCategory.Supplement,
    description:
      'Vitamin D is important for bone health, immune function, and overall well-being. If you are deficient in vitamin D, your doctor may recommend a supplement.',
    products: [],
  },
  [InterventionId.LimitStress]: {
    id: InterventionId.LimitStress,
    name: 'Limit Stress',
    category: InterventionCategory.Lifestyle,
    description:
      'Chronic stress can have negative effects on your health. Try to manage stress through relaxation techniques, exercise, and social support.',
    products: [],
  },
  [InterventionId.SupplementGrowthHormone]: {
    id: InterventionId.SupplementGrowthHormone,
    name: 'Supplement Growth Hormone',
    category: InterventionCategory.Supplement,
    description:
      'Growth hormone supplements are sometimes used to treat growth hormone deficiency in children and adults. Talk to your doctor before taking any growth hormone supplements.',
    products: [],
  },
  [InterventionId.IncreaseProtein]: {
    id: InterventionId.IncreaseProtein,
    name: 'Increase Protein Intake',
    category: InterventionCategory.Diet,
    description:
      'Protein is an essential nutrient that helps build and repair tissues in your body. Try to include a source of protein in every meal.',
    products: [],
  },
  [InterventionId.SupplementVitaminC]: {
    id: InterventionId.SupplementVitaminC,
    name: 'Supplement Vitamin C',
    category: InterventionCategory.Supplement,
    description:
      'Vitamin C is an antioxidant that helps protect your cells from damage. It is important for your immune system and overall health.',
    products: [],
  },
  [InterventionId.SupplementVitaminE]: {
    id: InterventionId.SupplementVitaminE,
    name: 'Supplement Vitamin E',
    category: InterventionCategory.Supplement,
    description:
      'Vitamin E is a fat-soluble antioxidant that helps protect your cells from damage. It is important for your immune system and overall health.',
    products: [],
  },
  [InterventionId.SupplementVitaminA]: {
    id: InterventionId.SupplementVitaminA,
    name: 'Supplement Vitamin A',
    category: InterventionCategory.Supplement,
    description:
      'Vitamin A is important for vision, immune function, and reproduction. It is found in animal products and some plant foods.',
    products: [],
  },
  [InterventionId.SupplementVitaminK]: {
    id: InterventionId.SupplementVitaminK,
    name: 'Supplement Vitamin K',
    category: InterventionCategory.Supplement,
    description:
      'Vitamin K is important for blood clotting and bone health. It is found in leafy green vegetables, dairy products, and some meats.',
    products: [],
  },
  [InterventionId.SupplementVitaminB1]: {
    id: InterventionId.SupplementVitaminB1,
    name: 'Supplement Vitamin B1',
    category: InterventionCategory.Supplement,
    description:
      'Vitamin B1, also known as thiamine, is important for energy metabolism and nerve function. It is found in whole grains, pork, and legumes.',
    products: [],
  },
  [InterventionId.SupplementVitaminB2]: {
    id: InterventionId.SupplementVitaminB2,
    name: 'Supplement Vitamin B2',
    category: InterventionCategory.Supplement,
    description:
      'Vitamin B2, also known as riboflavin, is important for energy metabolism and antioxidant function. It is found in dairy products, eggs, and green leafy vegetables.',
    products: [],
  },
  [InterventionId.SupplementZinc]: {
    id: InterventionId.SupplementZinc,
    name: 'Supplement Zinc',
    category: InterventionCategory.Supplement,
    description:
      'Zinc is an essential mineral that is important for immune function, wound healing, and DNA synthesis. It is found in meat, shellfish, legumes, and nuts.',
    products: [],
  },
  [InterventionId.CookRiceWithMoreWater]: {
    id: InterventionId.CookRiceWithMoreWater,
    name: 'Cook Rice With More Water',
    category: InterventionCategory.Lifestyle,
    description:
      'Cooking rice with more water and then cooling it can reduce the number of calories it contains. This can help you manage your weight and reduce your risk of diabetes.',
    products: [],
  },
  [InterventionId.SupplementEchinacea]: {
    id: InterventionId.SupplementEchinacea,
    name: 'Supplement Echinacea',
    category: InterventionCategory.Supplement,
    description:
      'Echinacea is an herb that is commonly used to treat colds and other infections. It is thought to stimulate the immune system and reduce inflammation.',
    products: [],
  },
  [InterventionId.SupplementAstragalus]: {
    id: InterventionId.SupplementAstragalus,
    name: 'Supplement Astragalus',
    category: InterventionCategory.Supplement,
    description:
      'Astragalus is an herb that is commonly used in traditional Chinese medicine. It is thought to boost the immune system and reduce inflammation.',
    products: [],
  },
  [InterventionId.SupplementCalcium]: {
    id: InterventionId.SupplementCalcium,
    name: 'Supplement Calcium',
    category: InterventionCategory.Supplement,
    description:
      'Calcium is important for bone health, muscle function, and nerve function. It is found in dairy products, leafy green vegetables, and fortified foods.',
    products: [],
  },
  [InterventionId.SupplementOmega3]: {
    id: InterventionId.SupplementOmega3,
    name: 'Supplement Omega-3 Fatty Acids',
    category: InterventionCategory.Supplement,
    description:
      'Omega-3 fatty acids are important for brain health, heart health, and reducing inflammation. They are found in fatty fish, flaxseeds, and walnuts.',
    products: [],
  },
  [InterventionId.SupplementIron]: {
    id: InterventionId.SupplementIron,
    name: 'Supplement Iron',
    category: InterventionCategory.Supplement,
    description:
      'Iron is important for red blood cell production and oxygen transport in your body. It is found in meat, poultry, fish, and fortified foods.',
    products: [],
  },
  [InterventionId.LimitTransFats]: {
    id: InterventionId.LimitTransFats,
    name: 'Limit Trans Fats',
    category: InterventionCategory.Diet,
    description:
      'Limiting trans fats in your diet can help reduce your risk of heart disease',
    products: [],
  },
  [InterventionId.IncreaseCysteine]: {
    id: InterventionId.IncreaseCysteine,
    name: 'Increase Cysteine Intake',
    category: InterventionCategory.Diet,
    description:
      'Cysteine is an amino acid that is important for protein synthesis and antioxidant function. It is found in meat, poultry, dairy products, and legumes.',
    products: [],
  },
  [InterventionId.SupplementNAC]: {
    id: InterventionId.SupplementNAC,
    name: 'Supplement N-Acetylcysteine (NAC)',
    category: InterventionCategory.Supplement,
    description:
      'N-Acetylcysteine (NAC) is a supplement that is thought to boost antioxidant levels in your body. It is used to treat acetaminophen overdose and other conditions.',
    products: [],
  },
  [InterventionId.LimitHighArsenicFoods]: {
    id: InterventionId.LimitHighArsenicFoods,
    name: 'Limit High Arsenic Foods',
    category: InterventionCategory.Diet,
    description:
      'Limiting high arsenic foods in your diet can help reduce your exposure to this toxic metal and lower your risk of health problems.',
    products: [],
  },
  [InterventionId.EatSulfurRichFoods]: {
    id: InterventionId.EatSulfurRichFoods,
    name: 'Eat Sulfur-Rich Foods',
    category: InterventionCategory.Diet,
    description:
      'Sulfur is an essential mineral that is important for protein synthesis and antioxidant function. It is found in garlic, onions, cruciferous vegetables, and eggs.',
    products: [],
  },
  [InterventionId.LimitSugar]: {
    id: InterventionId.LimitSugar,
    name: 'Limit Sugar',
    category: InterventionCategory.Diet,
    description:
      'Limiting sugar in your diet can help reduce your risk of obesity, diabetes, and other chronic diseases.',
    products: [],
  },
  [InterventionId.SupplementMelatonin]: {
    id: InterventionId.SupplementMelatonin,
    name: 'Supplement Melatonin',
    category: InterventionCategory.Supplement,
    description:
      'Melatonin is a hormone that regulates sleep-wake cycles. It is sometimes used as a supplement to treat sleep disorders and other conditions.',
    products: [],
  },
  [InterventionId.LimitRefinedCarbs]: {
    id: InterventionId.LimitRefinedCarbs,
    name: 'Limit Refined Carbs',
    category: InterventionCategory.Diet,
    description:
      'Limiting refined carbs in your diet can help reduce your risk of obesity, diabetes, and other chronic diseases.',
    products: [],
  },
  [InterventionId.ImproveSleepQuality]: {
    id: InterventionId.ImproveSleepQuality,
    name: 'Improve Sleep Quality',
    category: InterventionCategory.Lifestyle,
    description:
      'Getting enough quality sleep is important for your health. Try to establish a regular sleep routine and create a comfortable sleep environment.',
    products: [],
  },
  [InterventionId.EatGarlic]: {
    id: InterventionId.EatGarlic,
    name: 'Eat Garlic',
    category: InterventionCategory.Diet,
    description:
      'Garlic is a flavorful herb that is used in many cuisines around the world. It is thought to have various health benefits, including immune-boosting and anti-inflammatory properties.',
    products: [],
  },
  [InterventionId.EatGinger]: {
    id: InterventionId.EatGinger,
    name: 'Eat Ginger',
    category: InterventionCategory.Diet,
    description:
      'Ginger is a spicy root that is used in many cuisines around the world. It is thought to have various health benefits, including anti-inflammatory and digestive properties.',
    products: [],
  },
  [InterventionId.SupplementDHA]: {
    id: InterventionId.SupplementDHA,
    name: 'Supplement Docosahexaenoic Acid (DHA)',
    category: InterventionCategory.Supplement,
    description:
      'Docosahexaenoic acid (DHA) is an omega-3 fatty acid that is important for brain health and development. It is found in fatty fish and algae.',
    products: [],
  },
}
