import { BiomarkerId } from '~src/types/biomarker-types'
import {
  InterventionId,
  InterventionRequirement,
} from '~src/types/intervention-types'
import { ResourceId } from '~src/types/resource-types'

export interface BiomarkerIntervention {
  biomarkerId: BiomarkerId
  interventionId: InterventionId
  description: string
  resources: ResourceId[]
  requirements: InterventionRequirement[]
}

export const BIOMARKER_INTERVENTIONS_MAP: Partial<
  Record<BiomarkerId, BiomarkerIntervention[]>
> = {
  [BiomarkerId.WBC]: [
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.IncreaseProtein,
      description:
        'Proteins are essential for the production of WBCs. Include lean meats, fish, poultry, beans, and legumes in your diet.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.EatGarlic,
      description:
        'Garlic contains compounds that can help boost your immune system and support healthy WBC levels.',
      resources: [
        ResourceId.Frontiersin_fcanc_2022_00005,
        ResourceId.LPI_Garlic,
        ResourceId.JN_131_3s_1054S_4687050,
      ],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.EatGinger,
      description:
        'Ginger has anti-inflammatory and immune-boosting properties that may help support healthy WBC levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.SupplementVitaminC,
      description:
        'Vitamin C is essential for immune health and may help support healthy WBC levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.SupplementZinc,
      description:
        'Zinc is important for immune function and may help support healthy WBC levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.SupplementEchinacea,
      description:
        'Echinacea is an herb that has been used to support immune health and may help improve WBC count.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.SupplementAstragalus,
      description:
        'Astragalus is an herb that has been used in traditional Chinese medicine to support immune health and may help improve WBC count.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Moderate exercise can enhance immune function and potentially increase WBC count. Avoid overtraining, which can have the opposite effect.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.ImproveSleepQuality,
      description:
        'Ensure you get 7-9 hours of quality sleep per night to support overall health and immune function.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.WBC,
      interventionId: InterventionId.LimitStress,
      description:
        'Chronic stress can negatively affect your immune system. Practice stress-reducing techniques such as meditation, yoga, or deep-breathing exercises.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.RBC]: [
    {
      biomarkerId: BiomarkerId.RBC,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular exercise can help improve circulation and oxygen delivery to your cells, which can support healthy red blood cell production.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.Hgb]: [
    {
      biomarkerId: BiomarkerId.Hgb,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular exercise can help improve circulation and oxygen delivery to your cells, which can support healthy red blood cell production.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.Hct]: [
    {
      biomarkerId: BiomarkerId.Hct,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular exercise can help improve circulation and oxygen delivery to your cells, which can support healthy red blood cell production.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.Glu]: [
    {
      biomarkerId: BiomarkerId.Glu,
      interventionId: InterventionId.LimitSugar,
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and reduce inflammation in the body.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.Glu,
      interventionId: InterventionId.LimitRefinedCarbs,
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and reduce inflammation in the body.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.BUN]: [
    {
      biomarkerId: BiomarkerId.BUN,
      interventionId: InterventionId.StayHydrated,
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to elevated BUN levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Crea]: [
    {
      biomarkerId: BiomarkerId.Crea,
      interventionId: InterventionId.StayHydrated,
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to elevated creatinine levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.eGFR]: [
    {
      biomarkerId: BiomarkerId.eGFR,
      interventionId: InterventionId.StayHydrated,
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to decreased eGFR levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.Na]: [
    {
      biomarkerId: BiomarkerId.Na,
      interventionId: InterventionId.LimitSodium,
      description:
        'Reducing your sodium intake can help prevent high sodium levels in the blood, which can lead to elevated sodium levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Cl]: [
    {
      biomarkerId: BiomarkerId.Cl,
      interventionId: InterventionId.StayHydrated,
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to decreased chloride levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.ALP]: [
    {
      biomarkerId: BiomarkerId.ALP,
      interventionId: InterventionId.SupplementVitaminD,
      description:
        'Vitamin D is important for bone health and may help support healthy ALP levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.ALT]: [
    {
      biomarkerId: BiomarkerId.ALT,
      interventionId: InterventionId.LimitAlcohol,
      description:
        'Excessive alcohol consumption can lead to elevated ALT levels. Limit your intake to support healthy liver function.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.AST]: [
    {
      biomarkerId: BiomarkerId.AST,
      interventionId: InterventionId.LimitAlcohol,
      description:
        'Excessive alcohol consumption can lead to elevated AST levels. Limit your intake to support healthy liver function.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Bil]: [
    {
      biomarkerId: BiomarkerId.Bil,
      interventionId: InterventionId.LimitAlcohol,
      description:
        'Excessive alcohol consumption can lead to elevated bilirubin levels. Limit your intake to support healthy liver function.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Ca]: [
    {
      biomarkerId: BiomarkerId.Ca,
      interventionId: InterventionId.SupplementCalcium,
      description:
        'Calcium is important for bone health and may help support healthy calcium levels in the blood.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.CHOL]: [
    {
      biomarkerId: BiomarkerId.CHOL,
      interventionId: InterventionId.LimitSaturatedFats,
      description:
        'Eating a diet low in saturated fats and cholesterol can help support healthy cholesterol levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.CK]: [
    {
      biomarkerId: BiomarkerId.CK,
      interventionId: InterventionId.RestAndRecover,
      description:
        'Elevated CK levels can be a sign of muscle damage. Allow your muscles to rest and recover after intense exercise.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Cor]: [
    {
      biomarkerId: BiomarkerId.Cor,
      interventionId: InterventionId.LimitStress,
      description:
        'Chronic stress can lead to elevated cortisol levels. Practice stress-reducing techniques such as meditation or yoga.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.CRP]: [
    {
      biomarkerId: BiomarkerId.CRP,
      interventionId: InterventionId.SupplementOmega3,
      description:
        'Omega-3 fatty acids have anti-inflammatory properties and may help reduce CRP levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Fer]: [
    {
      biomarkerId: BiomarkerId.Fer,
      interventionId: InterventionId.SupplementIron,
      description:
        'Iron is essential for red blood cell production and may help support healthy ferritin levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.GGT]: [
    {
      biomarkerId: BiomarkerId.GGT,
      interventionId: InterventionId.LimitAlcohol,
      description:
        'Excessive alcohol consumption can lead to elevated GGT levels. Limit your intake to support healthy liver function.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.HDL]: [
    {
      biomarkerId: BiomarkerId.HDL,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular exercise can help raise HDL cholesterol levels, which are beneficial for heart health.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.HDL,
      interventionId: InterventionId.LimitTransFats,
      description:
        'Limiting trans fats in your diet can help raise HDL cholesterol levels, which are beneficial for heart health.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.HDL,
      interventionId: InterventionId.QuitSmoking,
      description:
        'Smoking can lower HDL cholesterol levels. Quitting can help improve your cholesterol levels and overall health.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.HbA1c]: [
    {
      biomarkerId: BiomarkerId.HbA1c,
      interventionId: InterventionId.LimitSugar,
      description:
        'Limiting your intake of sugar can help stabilize your blood sugar levels and support healthy HbA1c levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.HbA1c,
      interventionId: InterventionId.LimitRefinedCarbs,
      description:
        'Limiting your intake of refined carbohydrates can help stabilize your blood sugar levels and support healthy HbA1c levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Ins]: [
    {
      biomarkerId: BiomarkerId.Ins,
      interventionId: InterventionId.LimitSugar,
      description:
        'Limiting your intake of sugar can help stabilize your blood sugar levels and support healthy insulin levels.',
      resources: [],
      requirements: [InterventionRequirement.Low, InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.Ins,
      interventionId: InterventionId.LimitRefinedCarbs,
      description:
        'Limiting your intake refined carbohydrates can help stabilize your blood sugar levels and support healthy insulin levels.',
      resources: [],
      requirements: [InterventionRequirement.Low, InterventionRequirement.High],
    },
  ],
  [BiomarkerId.LDL]: [
    {
      biomarkerId: BiomarkerId.LDL,
      interventionId: InterventionId.LimitSaturatedFats,
      description:
        'Eating a diet low in saturated fats and cholesterol can help support healthy LDL cholesterol levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.LDL,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular exercise can help lower LDL cholesterol levels and support heart health.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.LDL,
      interventionId: InterventionId.QuitSmoking,
      description:
        'Smoking can raise LDL cholesterol levels and increase your risk of heart disease. Quitting can help improve your cholesterol levels and overall health.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.Tg]: [
    {
      biomarkerId: BiomarkerId.Tg,
      interventionId: InterventionId.LimitSugar,
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and support healthy triglyceride levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },

    {
      biomarkerId: BiomarkerId.Tg,
      interventionId: InterventionId.LimitRefinedCarbs,
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and support healthy triglyceride levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.TP]: [
    {
      biomarkerId: BiomarkerId.TP,
      interventionId: InterventionId.IncreaseProtein,
      description:
        'Eating a balanced diet that includes protein-rich foods can help support healthy total protein levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.TSH]: [],
  [BiomarkerId.UA]: [
    {
      biomarkerId: BiomarkerId.UA,
      interventionId: InterventionId.StayHydrated,
      description:
        'Drinking plenty of water can help support healthy uric acid levels in the blood.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.VLDL]: [],
  [BiomarkerId.TIBC]: [
    {
      biomarkerId: BiomarkerId.TIBC,
      interventionId: InterventionId.SupplementIron,
      description:
        'Iron is essential for red blood cell production and may help support healthy TIBC levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.TS]: [
    {
      biomarkerId: BiomarkerId.TS,
      interventionId: InterventionId.SupplementIron,
      description:
        'Iron is essential for red blood cell production and may help support healthy transferrin saturation levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.SHBG]: [],
  [BiomarkerId.T]: [],
  [BiomarkerId.D]: [
    {
      biomarkerId: BiomarkerId.D,
      interventionId: InterventionId.IncreaseSunExposure,
      description:
        'Vitamin D is produced by the skin in response to sunlight. Spending time outdoors can help support healthy vitamin D levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.D,
      interventionId: InterventionId.SupplementVitaminD,
      description:
        'If you have low vitamin D levels, your doctor may recommend taking vitamin D supplements to support healthy levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.Zn]: [
    {
      biomarkerId: BiomarkerId.Zn,
      interventionId: InterventionId.SupplementZinc,
      description:
        'Zinc is important for immune function and may help support healthy zinc levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.NEUT]: [
    {
      biomarkerId: BiomarkerId.NEUT,
      interventionId: InterventionId.IncreaseProtein,
      description:
        'Eating a balanced diet that includes protein-rich foods can help support healthy neutrophil levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.RDW]: [],
  [BiomarkerId.GSH]: [
    {
      biomarkerId: BiomarkerId.GSH,
      interventionId: InterventionId.EatSulfurRichFoods,
      description:
        'Consume foods high in sulfur, such as garlic, onions, broccoli, Brussels sprouts, cauliflower, and kale. Sulfur is necessary for GSH synthesis.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.GSH,
      interventionId: InterventionId.IncreaseCysteine,
      description:
        'Include sources of cysteine, an amino acid crucial for GSH production. Good sources include poultry, yogurt, eggs, and legumes.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },

    {
      biomarkerId: BiomarkerId.GSH,
      interventionId: InterventionId.SupplementNAC,
      description:
        'NAC is a precursor to GSH and can help support healthy GSH levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
    {
      biomarkerId: BiomarkerId.GSH,
      interventionId: InterventionId.SupplementALA,
      description:
        'ALA is an antioxidant that can help regenerate GSH and support healthy levels.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.As]: [
    {
      biomarkerId: BiomarkerId.As,
      interventionId: InterventionId.LimitHighArsenicFoods,
      description:
        'Some seafood, rice, and rice-based products can contain significant amounts of arsenic. Opting for varied grains like quinoa, barley, and bulgur can help reduce arsenic intake.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.As,
      interventionId: InterventionId.CookRiceWithMoreWater,
      description:
        "Cooking rice in a higher water-to-rice ratio can reduce the arsenic content in cooked rice. Draining the excess water after cooking can remove about 30-40% of the rice's arsenic content.",
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.As,
      interventionId: InterventionId.IncreaseFolate,
      description:
        'Folate can aid in the methylation process, which helps detoxify arsenic in the body. Foods rich in folate include leafy greens, beans, and fortified grains.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.As,
      interventionId: InterventionId.ChelationTherapy,
      description:
        'In severe cases of arsenic poisoning, doctors may recommend chelation therapy, which involves the administration of chelating agents that bind to arsenic and help remove it from the body.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.HORVATH]: [
    {
      biomarkerId: BiomarkerId.HORVATH,
      interventionId: InterventionId.QuitSmoking,
      description:
        'Smoking can accelerate the aging process and increase the risk of age-related diseases. Quitting can help slow down the aging process and improve overall health.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.HORVATH,
      interventionId: InterventionId.SupplementGrowthHormone,
      description:
        'Growth hormone supplements are sometimes used to support healthy aging. Talk to your doctor before taking any growth hormone supplements.',
      resources: [ResourceId.Nature_d41586_019_02638_w],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.HORVATH,
      interventionId: InterventionId.SupplementDHEA,
      description:
        'DHEA is a hormone that declines with age. Supplementing with DHEA may support healthy aging, but consult your doctor before taking any DHEA supplements.',
      resources: [ResourceId.Nature_d41586_019_02638_w],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.HORVATH,
      interventionId: InterventionId.SupplementMetformin,
      description:
        'Metformin is a medication used to treat type 2 diabetes that has been studied for its potential anti-aging effects. Talk to your doctor before taking metformin for anti-aging purposes.',
      resources: [ResourceId.Nature_d41586_019_02638_w],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.DunedinPACE]: [
    {
      biomarkerId: BiomarkerId.DunedinPACE,
      interventionId: InterventionId.QuitSmoking,
      description:
        'Smoking can accelerate the aging process and increase the risk of age-related diseases. Quitting can help slow down the aging process and improve overall health.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.DunedinPACE,
      interventionId: InterventionId.SupplementGrowthHormone,
      description:
        'Growth hormone supplements are sometimes used to support healthy aging. Talk to your doctor before taking any growth hormone supplements.',
      resources: [ResourceId.Nature_d41586_019_02638_w],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.DunedinPACE,
      interventionId: InterventionId.SupplementDHEA,
      description:
        'DHEA is a hormone that declines with age. Supplementing with DHEA may support healthy aging, but consult your doctor before taking any DHEA supplements.',
      resources: [ResourceId.Nature_d41586_019_02638_w],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.DunedinPACE,
      interventionId: InterventionId.SupplementMetformin,
      description:
        'Metformin is a medication used to treat type 2 diabetes that has been studied for its potential anti-aging effects. Talk to your doctor before taking metformin for anti-aging purposes.',
      resources: [ResourceId.Nature_d41586_019_02638_w],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.hsCRP]: [
    {
      biomarkerId: BiomarkerId.hsCRP,
      interventionId: InterventionId.SupplementDHA,
      description:
        'Omega-3 fatty acids, particularly DHA and EPA, have been associated with lower levels of hsCRP. These fatty acids are known to reduce the production of inflammatory cytokines and other markers of inflammation.',
      resources: [ResourceId.NutraIngredients_Omega3],
      requirements: [InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.hsCRP,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular exercise can help reduce inflammation in the body and lower hsCRP levels.',
      resources: [],
      requirements: [InterventionRequirement.High],
    },
  ],
  [BiomarkerId.HRV]: [
    {
      biomarkerId: BiomarkerId.HRV,
      interventionId: InterventionId.MonitorHRV,
      description:
        'Tracking your heart rate variability (HRV) can help you understand how your body is responding to stress and training. Use a wearable device or app to monitor your HRV regularly.',
      resources: [],
      requirements: [InterventionRequirement.Low, InterventionRequirement.High],
    },
    {
      biomarkerId: BiomarkerId.HRV,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular exercise can improve heart rate variability and overall cardiovascular health.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
  [BiomarkerId.VO2Max]: [
    {
      biomarkerId: BiomarkerId.VO2Max,
      interventionId: InterventionId.IncreaseExercise,
      description:
        'Regular aerobic exercise can help improve your VO2 max and overall cardiovascular fitness.',
      resources: [],
      requirements: [InterventionRequirement.Low],
    },
  ],
}
