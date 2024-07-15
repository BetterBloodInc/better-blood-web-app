import { BiomarkerId } from '~src/types/biomarker-types'

export type InterventionCategory =
  | 'diet'
  | 'nutrition'
  | 'exercise'
  | 'supplements'
  | 'lifestyle'
  | 'medical'

export interface BiomarkerIntervention {
  biomarkerId: BiomarkerId
  intervention: string
  description: string
  category: InterventionCategory
}

export const BIOMARKER_INTERVENTIONS_MAP: Partial<
  Record<BiomarkerId, BiomarkerIntervention[]>
> = {
  [BiomarkerId.WBC]: [
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Eat more fruits and vegetables',
      description:
        'Eating a diet rich in fruits and vegetables can help support a healthy immune system and reduce inflammation in the body.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Increase Protein Intake',
      description:
        'Proteins are essential for the production of WBCs. Include lean meats, fish, poultry, beans, and legumes in your diet.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Vitamins and Minerals',
      description:
        'Ensure adequate intake of vitamins A, C, E, and B-complex vitamins, as well as minerals like zinc, iron, and selenium, which are crucial for immune function.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Garlic and Ginger',
      description:
        'These foods have immune-boosting properties that can help improve WBC count.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Vitamin C and Zinc',
      description:
        'Both are known to support immune function and may help increase WBC production.',
      category: 'supplements',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Echinacea and Astragalus',
      description:
        'These herbal supplements are believed to boost immune health.',
      category: 'supplements',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Regular Exercise',
      description:
        'Moderate exercise can enhance immune function and potentially increase WBC count. Avoid overtraining, which can have the opposite effect.',
      category: 'lifestyle',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Adequate Sleep',
      description:
        'Ensure you get 7-9 hours of quality sleep per night to support overall health and immune function.',
      category: 'lifestyle',
    },
    {
      biomarkerId: BiomarkerId.WBC,
      intervention: 'Stress Management',
      description:
        'Chronic stress can negatively affect your immune system. Practice stress-reducing techniques such as meditation, yoga, or deep-breathing exercises.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.RBC]: [
    {
      biomarkerId: BiomarkerId.RBC,
      intervention: 'Get regular exercise',
      description:
        'Regular exercise can help improve circulation and oxygen delivery to your cells, which can support healthy red blood cell production.',
      category: 'exercise',
    },
  ],
  [BiomarkerId.Hgb]: [
    {
      biomarkerId: BiomarkerId.Hgb,
      intervention: 'Get regular exercise',
      description:
        'Regular exercise can help improve circulation and oxygen delivery to your cells, which can support healthy red blood cell production.',
      category: 'exercise',
    },
  ],
  [BiomarkerId.Hct]: [
    {
      biomarkerId: BiomarkerId.Hct,
      intervention: 'Get regular exercise',
      description:
        'Regular exercise can help improve circulation and oxygen delivery to your cells, which can support healthy red blood cell production.',
      category: 'exercise',
    },
  ],
  [BiomarkerId.PLT]: [
    {
      biomarkerId: BiomarkerId.PLT,
      intervention: 'Eat more fruits and vegetables',
      description:
        'Eating a diet rich in fruits and vegetables can help support a healthy immune system and reduce inflammation in the body.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.Glu]: [
    {
      biomarkerId: BiomarkerId.Glu,
      intervention: 'Limit sugar and refined carbohydrates',
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and reduce inflammation in the body.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.BUN]: [
    {
      biomarkerId: BiomarkerId.BUN,
      intervention: 'Stay hydrated',
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to elevated BUN levels.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.Crea]: [
    {
      biomarkerId: BiomarkerId.Crea,
      intervention: 'Stay hydrated',
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to elevated creatinine levels.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.eGFR]: [
    {
      biomarkerId: BiomarkerId.eGFR,
      intervention: 'Stay hydrated',
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to decreased eGFR levels.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.Na]: [
    {
      biomarkerId: BiomarkerId.Na,
      intervention: 'Limit sodium intake',
      description:
        'Reducing your sodium intake can help prevent high sodium levels in the blood, which can lead to elevated sodium levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.K]: [
    {
      biomarkerId: BiomarkerId.K,
      intervention: 'Eat potassium-rich foods',
      description:
        'Including potassium-rich foods in your diet can help support healthy potassium levels in the blood.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.Cl]: [
    {
      biomarkerId: BiomarkerId.Cl,
      intervention: 'Stay hydrated',
      description:
        'Drinking plenty of water can help support healthy kidney function and prevent dehydration, which can lead to decreased chloride levels.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.ALP]: [
    {
      biomarkerId: BiomarkerId.ALP,
      intervention: 'Vitamin D and Calcium',
      description:
        'Both are essential for bone health and may help support healthy ALP levels.',
      category: 'supplements',
    },
  ],
  [BiomarkerId.ALT]: [
    {
      biomarkerId: BiomarkerId.ALT,
      intervention: 'Limit alcohol consumption',
      description:
        'Excessive alcohol consumption can lead to elevated ALT levels. Limit your intake to support healthy liver function.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.AST]: [
    {
      biomarkerId: BiomarkerId.AST,
      intervention: 'Limit alcohol consumption',
      description:
        'Excessive alcohol consumption can lead to elevated AST levels. Limit your intake to support healthy liver function.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.Alb]: [
    {
      biomarkerId: BiomarkerId.Alb,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes protein-rich foods can help support healthy albumin levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.Bil]: [
    {
      biomarkerId: BiomarkerId.Bil,
      intervention: 'Limit alcohol consumption',
      description:
        'Excessive alcohol consumption can lead to elevated bilirubin levels. Limit your intake to support healthy liver function.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.Ca]: [
    {
      biomarkerId: BiomarkerId.Ca,
      intervention: 'Vitamin D and Magnesium',
      description:
        'Both are essential for bone health and may help support healthy calcium levels.',
      category: 'supplements',
    },
  ],
  [BiomarkerId.CHOL]: [
    {
      biomarkerId: BiomarkerId.CHOL,
      intervention: 'Eat a heart-healthy diet',
      description:
        'Eating a diet low in saturated fats and cholesterol can help support healthy cholesterol levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.CK]: [
    {
      biomarkerId: BiomarkerId.CK,
      intervention: 'Rest and recover',
      description:
        'Elevated CK levels can be a sign of muscle damage. Allow your muscles to rest and recover after intense exercise.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.Cor]: [
    {
      biomarkerId: BiomarkerId.Cor,
      intervention: 'Stress management',
      description:
        'Chronic stress can lead to elevated cortisol levels. Practice stress-reducing techniques such as meditation or yoga.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.CRP]: [
    {
      biomarkerId: BiomarkerId.CRP,
      intervention: 'Eat an anti-inflammatory diet',
      description:
        'Foods rich in antioxidants and omega-3 fatty acids can help reduce inflammation in the body and support healthy CRP levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.Fer]: [
    {
      biomarkerId: BiomarkerId.Fer,
      intervention: 'Iron-rich foods',
      description:
        'Including iron-rich foods in your diet can help support healthy iron levels in the blood.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.FT]: [
    {
      biomarkerId: BiomarkerId.FT,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes protein-rich foods can help support healthy free testosterone levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.GGT]: [
    {
      biomarkerId: BiomarkerId.GGT,
      intervention: 'Limit alcohol consumption',
      description:
        'Excessive alcohol consumption can lead to elevated GGT levels. Limit your intake to support healthy liver function.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.HDL]: [
    {
      biomarkerId: BiomarkerId.HDL,
      intervention: 'Exercise regularly',
      description:
        'Regular exercise can help raise HDL cholesterol levels, which are beneficial for heart health.',
      category: 'exercise',
    },
    {
      biomarkerId: BiomarkerId.HDL,
      intervention: 'Eat a heart-healthy diet',
      description:
        'Eating a diet rich in healthy fats and fiber can help raise HDL cholesterol levels.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.HDL,
      intervention: 'Quit smoking',
      description:
        'Smoking can lower HDL cholesterol levels. Quitting can help improve your cholesterol levels and overall health.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.HgbA1c]: [
    {
      biomarkerId: BiomarkerId.HgbA1c,
      intervention: 'Limit sugar and refined carbohydrates',
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and support healthy HgbA1c levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.Ins]: [
    {
      biomarkerId: BiomarkerId.Ins,
      intervention: 'Limit sugar and refined carbohydrates',
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and support healthy insulin levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.LDL]: [
    {
      biomarkerId: BiomarkerId.LDL,
      intervention: 'Eat a heart-healthy diet',
      description:
        'Eating a diet low in saturated fats and cholesterol can help support healthy LDL cholesterol levels.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.LDL,
      intervention: 'Exercise regularly',
      description:
        'Regular exercise can help lower LDL cholesterol levels and support heart health.',
      category: 'exercise',
    },
    {
      biomarkerId: BiomarkerId.LDL,
      intervention: 'Quit smoking',
      description:
        'Smoking can raise LDL cholesterol levels and increase your risk of heart disease. Quitting can help improve your cholesterol levels and overall health.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.Mg]: [
    {
      biomarkerId: BiomarkerId.Mg,
      intervention: 'Eat magnesium-rich foods',
      description:
        'Including magnesium-rich foods in your diet can help support healthy magnesium levels in the blood.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.P]: [
    {
      biomarkerId: BiomarkerId.P,
      intervention: 'Eat phosphorus-rich foods',
      description:
        'Including phosphorus-rich foods in your diet can help support healthy phosphorus levels in the blood.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.Tg]: [
    {
      biomarkerId: BiomarkerId.Tg,
      intervention: 'Limit sugar and refined carbohydrates',
      description:
        'Limiting your intake of sugar and refined carbohydrates can help stabilize your blood sugar levels and support healthy triglyceride levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.TP]: [
    {
      biomarkerId: BiomarkerId.TP,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes protein-rich foods can help support healthy total protein levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.TSH]: [
    {
      biomarkerId: BiomarkerId.TSH,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes iodine-rich foods can help support healthy TSH levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.UA]: [
    {
      biomarkerId: BiomarkerId.UA,
      intervention: 'Stay hydrated',
      description:
        'Drinking plenty of water can help support healthy uric acid levels in the blood.',
      category: 'lifestyle',
    },
  ],
  [BiomarkerId.VLDL]: [
    {
      biomarkerId: BiomarkerId.VLDL,
      intervention: 'Eat a heart-healthy diet',
      description:
        'Eating a diet low in saturated fats and cholesterol can help support healthy VLDL cholesterol levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.TIBC]: [
    {
      biomarkerId: BiomarkerId.TIBC,
      intervention: 'Eat iron-rich foods',
      description:
        'Including iron-rich foods in your diet can help support healthy total iron-binding capacity levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.TS]: [
    {
      biomarkerId: BiomarkerId.TS,
      intervention: 'Eat iron-rich foods',
      description:
        'Including iron-rich foods in your diet can help support healthy transferrin saturation levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.SHBG]: [
    {
      biomarkerId: BiomarkerId.SHBG,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes protein-rich foods can help support healthy SHBG levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.T]: [
    {
      biomarkerId: BiomarkerId.T,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes healthy fats and protein can help support healthy total testosterone levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.D]: [
    {
      biomarkerId: BiomarkerId.D,
      intervention: 'Get adequate sun exposure',
      description:
        'Vitamin D is produced by the skin in response to sunlight. Spending time outdoors can help support healthy vitamin D levels.',
      category: 'lifestyle',
    },
    {
      biomarkerId: BiomarkerId.D,
      intervention: 'Vitamin D supplements',
      description:
        'If you have low vitamin D levels, your doctor may recommend taking vitamin D supplements to support healthy levels.',
      category: 'supplements',
    },
  ],
  [BiomarkerId.Zn]: [
    {
      biomarkerId: BiomarkerId.Zn,
      intervention: 'Eat zinc-rich foods',
      description:
        'Including zinc-rich foods in your diet can help support healthy zinc levels in the blood.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.NEUT]: [
    {
      biomarkerId: BiomarkerId.NEUT,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes protein-rich foods can help support healthy neutrophil levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.RDW]: [
    {
      biomarkerId: BiomarkerId.RDW,
      intervention: 'Eat a balanced diet',
      description:
        'Eating a balanced diet that includes iron-rich foods can help support healthy RDW levels.',
      category: 'nutrition',
    },
  ],
  [BiomarkerId.GSH]: [
    {
      biomarkerId: BiomarkerId.GSH,
      intervention: 'Sulfur-rich foods',
      description:
        'Consume foods high in sulfur, such as garlic, onions, broccoli, Brussels sprouts, cauliflower, and kale. Sulfur is necessary for GSH synthesis.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.GSH,
      intervention: 'Protein-rich foods',
      description:
        'Include sources of cysteine, an amino acid crucial for GSH production. Good sources include poultry, yogurt, eggs, and legumes.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.GSH,
      intervention: 'Fruits and vegetables',
      description:
        'Especially those rich in vitamin C, such as oranges, strawberries, kiwi, and bell peppers, as vitamin C can help recycle GSH.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.GSH,
      intervention: 'N-acetylcysteine (NAC)',
      description:
        'NAC is a precursor to GSH and can help support healthy GSH levels.',
      category: 'supplements',
    },
    {
      biomarkerId: BiomarkerId.GSH,
      intervention: 'Alpha-lipoic acid (ALA)',
      description:
        'ALA is an antioxidant that can help regenerate GSH and support healthy levels.',
      category: 'supplements',
    },
  ],
  [BiomarkerId.As]: [
    {
      biomarkerId: BiomarkerId.As,
      intervention: 'Reduce or Avoid High-Arsenic Foods',
      description:
        'Some seafood, rice, and rice-based products can contain significant amounts of arsenic. Opting for varied grains like quinoa, barley, and bulgur can help reduce arsenic intake.',
      category: 'diet',
    },
    {
      biomarkerId: BiomarkerId.As,
      intervention: 'Cook Rice with More Water',
      description:
        "Cooking rice in a higher water-to-rice ratio can reduce the arsenic content in cooked rice. Draining the excess water after cooking can remove about 30-40% of the rice's arsenic content.",
      category: 'diet',
    },
    {
      biomarkerId: BiomarkerId.As,
      intervention: 'Increase Intake of Folate',
      description:
        'Folate can aid in the methylation process, which helps detoxify arsenic in the body. Foods rich in folate include leafy greens, beans, and fortified grains.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.As,
      intervention: 'Enhance Detoxification with Antioxidants',
      description:
        "Consuming foods high in antioxidants, such as fruits and vegetables, can support the body's detoxification processes.",
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.As,
      intervention: 'Chelation Therapy',
      description:
        'In severe cases of arsenic poisoning, doctors may recommend chelation therapy, which involves the administration of chelating agents that bind to arsenic and help remove it from the body.',
      category: 'medical',
    },
  ],
  [BiomarkerId.HORVATH]: [
    {
      biomarkerId: BiomarkerId.HORVATH,
      intervention: 'Regular Exercise',
      description:
        'Regular physical activity can help support healthy DNA methylation patterns and potentially slow down the aging process.',
      category: 'exercise',
    },
    {
      biomarkerId: BiomarkerId.HORVATH,
      intervention: 'Eat a Balanced Diet',
      description:
        'Eating a diet rich in fruits, vegetables, whole grains, and lean proteins can provide essential nutrients that support overall health and well-being.',
      category: 'nutrition',
    },
    {
      biomarkerId: BiomarkerId.HORVATH,
      intervention: 'Manage Stress',
      description:
        'Chronic stress can accelerate the aging process. Practice stress-reducing techniques such as meditation, yoga, or deep-breathing exercises.',
      category: 'lifestyle',
    },
    {
      biomarkerId: BiomarkerId.HORVATH,
      intervention: 'Adequate Sleep',
      description:
        'Ensure you get 7-9 hours of quality sleep per night to support overall health and well-being.',
      category: 'lifestyle',
    },
    {
      biomarkerId: BiomarkerId.HORVATH,
      intervention: 'Quit Smoking',
      description:
        'Smoking can accelerate the aging process and increase the risk of age-related diseases. Quitting can help slow down the aging process and improve overall health.',
      category: 'lifestyle',
    },
  ],
}
