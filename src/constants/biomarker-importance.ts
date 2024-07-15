import { BiomarkerId } from '~src/types/biomarker-types'

export enum BiomarkerImportanceLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

export enum BiomarkerHealthImpact {
  AGE = 'AGE',
  KIDNEY = 'KIDNEY',
  NEUROLOGICAL = 'NEUROLOGICAL',
  CARDIOVASCULAR = 'CARDIOVASCULAR',
  LIVER = 'LIVER',
  BLOOD = 'BLOOD',
  ELECTROLYTES = 'ELECTROLYTES',
  BONE = 'BONE',
  DIABETES = 'DIABETES',
  METABOLIC = 'METABOLIC',
  IMMUNE = 'IMMUNE',
  RESPIRATORY = 'RESPIRATORY',
  DERMATOLOGICAL = 'DERMATOLOGICAL',
  REPRODUCTIVE = 'REPRODUCTIVE',
  MUSCLE = 'MUSCLE',
}

export interface BiomarkerImportance {
  biomarkerId: BiomarkerId
  category: BiomarkerHealthImpact
  description: string
  importance: BiomarkerImportanceLevel
}

export const BIOMARKER_IMPORTANCE_MAP: Partial<
  Record<BiomarkerId, BiomarkerImportance[]>
> = {
  [BiomarkerId.WBC]: [
    {
      biomarkerId: BiomarkerId.WBC,
      description:
        'White blood cell count is a measure of the number of white blood cells in the blood. It is used to diagnose and monitor a variety of conditions, including infections, inflammation, and leukemia.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.Hg]: [
    {
      biomarkerId: BiomarkerId.Hg,
      description:
        'Mercury exposure can lead to serious health consequences, including neurological and kidney damage. Pregnant women, young children, and fetuses are particularly vulnerable to the effects of mercury. It’s essential to minimize exposure to high-mercury fish and environmental sources of mercury. Regular testing and consultation with healthcare providers are recommended for individuals at risk of high mercury exposure.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.NEUROLOGICAL,
    },
  ],
  [BiomarkerId.CRP]: [
    {
      biomarkerId: BiomarkerId.CRP,
      description:
        'C-reactive protein is a marker of inflammation in the body. Elevated levels of CRP are associated with a variety of conditions, including infections, autoimmune diseases, and cardiovascular disease. Monitoring CRP levels can help identify and manage these conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.HDL]: [
    {
      biomarkerId: BiomarkerId.HDL,
      description:
        'High-density lipoprotein (HDL) cholesterol is often referred to as "good" cholesterol. High levels of HDL cholesterol are associated with a reduced risk of heart disease. Maintaining a healthy lifestyle, including regular exercise and a balanced diet, can help increase HDL cholesterol levels.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.CARDIOVASCULAR,
    },
  ],
  [BiomarkerId.LDL]: [
    {
      biomarkerId: BiomarkerId.LDL,
      description:
        'Low-density lipoprotein (LDL) cholesterol is often referred to as "bad" cholesterol. High levels of LDL cholesterol are associated with an increased risk of heart disease. Lifestyle changes, including diet and exercise, can help lower LDL cholesterol levels and reduce the risk of heart disease.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.CARDIOVASCULAR,
    },
  ],
  [BiomarkerId.Tg]: [
    {
      biomarkerId: BiomarkerId.Tg,
      description:
        'Triglycerides are a type of fat found in the blood. High levels of triglycerides are associated with an increased risk of heart disease. Lifestyle changes, including diet and exercise, can help lower triglyceride levels and reduce the risk of heart disease.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.CARDIOVASCULAR,
    },
  ],
  [BiomarkerId.TIBC]: [
    {
      biomarkerId: BiomarkerId.TIBC,
      description:
        'Total iron-binding capacity (TIBC) is a measure of the body’s ability to bind and transport iron in the blood. Abnormal TIBC levels can indicate iron deficiency or iron overload. Monitoring TIBC levels can help diagnose and manage iron-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.Fe]: [
    {
      biomarkerId: BiomarkerId.Fe,
      description:
        'Iron is an essential mineral that plays a key role in many bodily functions, including oxygen transport and energy production. Iron deficiency can lead to anemia and other health problems. Monitoring iron levels can help diagnose and manage iron-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.Fer]: [
    {
      biomarkerId: BiomarkerId.Fer,
      description:
        'Ferritin is a protein that stores iron in the body. Ferritin levels can indicate the body’s iron stores and are used to diagnose and monitor iron-related conditions. Abnormal ferritin levels can indicate iron deficiency or iron overload.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.TS]: [
    {
      biomarkerId: BiomarkerId.TS,
      description:
        'Transferrin saturation (TS) is a measure of the body’s iron status. Abnormal TS levels can indicate iron deficiency or iron overload. Monitoring TS levels can help diagnose and manage iron-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.FOL]: [
    {
      biomarkerId: BiomarkerId.FOL,
      description:
        'Folate is a B vitamin that is essential for cell growth and function. Folate deficiency can lead to anemia and other health problems. Monitoring folate levels can help diagnose and manage folate-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.VLDL]: [
    {
      biomarkerId: BiomarkerId.VLDL,
      description:
        'Very low-density lipoprotein (VLDL) cholesterol is a type of fat found in the blood. High levels of VLDL cholesterol are associated with an increased risk of heart disease. Lifestyle changes, including diet and exercise, can help lower VLDL cholesterol levels and reduce the risk of heart disease.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.CARDIOVASCULAR,
    },
  ],
  [BiomarkerId.SCr]: [
    {
      biomarkerId: BiomarkerId.SCr,
      description:
        'Serum creatinine (SCr) is a waste product produced by the muscles. Elevated SCr levels can indicate kidney dysfunction. Monitoring SCr levels can help diagnose and manage kidney-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.KIDNEY,
    },
  ],
  [BiomarkerId.UA]: [
    {
      biomarkerId: BiomarkerId.UA,
      description:
        'Uric acid is a waste product produced by the body. High levels of uric acid are associated with gout and other health problems. Monitoring uric acid levels can help diagnose and manage uric acid-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.TSH]: [
    {
      biomarkerId: BiomarkerId.TSH,
      description:
        'Thyroid-stimulating hormone (TSH) is a hormone produced by the pituitary gland. Abnormal TSH levels can indicate thyroid dysfunction. Monitoring TSH levels can help diagnose and manage thyroid-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.T]: [
    {
      biomarkerId: BiomarkerId.T,
      description:
        'Total testosterone (T) is a hormone that plays a key role in reproductive health and development. Abnormal T levels can indicate hormonal imbalances and other health problems. Monitoring T levels can help diagnose and manage testosterone-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.REPRODUCTIVE,
    },
  ],
  [BiomarkerId.SHBG]: [
    {
      biomarkerId: BiomarkerId.SHBG,
      description:
        'Sex Hormone-Binding Globulin (SHBG) plays a crucial role in the human body by regulating the availability and function of sex hormones, such as testosterone and estrogen.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.REPRODUCTIVE,
    },
  ],
  [BiomarkerId.TP]: [
    {
      biomarkerId: BiomarkerId.TP,
      description:
        'Total protein (TP) is a measure of the total amount of protein in the blood. Abnormal TP levels can indicate a variety of health conditions, including liver and kidney disease. Monitoring TP levels can help diagnose and manage protein-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.LIVER,
    },
  ],
  [BiomarkerId.Alb]: [
    {
      biomarkerId: BiomarkerId.Alb,
      description:
        'Albumin is a protein produced by the liver. Abnormal albumin levels can indicate liver or kidney dysfunction. Monitoring albumin levels can help diagnose and manage liver- and kidney-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.LIVER,
    },
  ],
  [BiomarkerId.ALP]: [
    {
      biomarkerId: BiomarkerId.ALP,
      description:
        'Alkaline phosphatase (ALP) is an enzyme produced by the liver and other tissues. Abnormal ALP levels can indicate liver or bone disease. Monitoring ALP levels can help diagnose and manage liver- and bone-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.LIVER,
    },
  ],
  [BiomarkerId.ALT]: [
    {
      biomarkerId: BiomarkerId.ALT,
      description:
        'Alanine aminotransferase (ALT) is an enzyme produced by the liver. Elevated ALT levels can indicate liver damage. Monitoring ALT levels can help diagnose and manage liver-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.LIVER,
    },
  ],
  [BiomarkerId.AST]: [
    {
      biomarkerId: BiomarkerId.AST,
      description:
        'Aspartate aminotransferase (AST) is an enzyme produced by the liver and other tissues. Elevated AST levels can indicate liver or heart damage. Monitoring AST levels can help diagnose and manage liver- and heart-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.LIVER,
    },
  ],
  [BiomarkerId.Bil]: [
    {
      biomarkerId: BiomarkerId.Bil,
      description:
        'Bilirubin is a waste product produced by the liver. Abnormal bilirubin levels can indicate liver dysfunction. Monitoring bilirubin levels can help diagnose and manage liver-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.LIVER,
    },
  ],
  [BiomarkerId.BUN]: [
    {
      biomarkerId: BiomarkerId.BUN,
      description:
        'Blood urea nitrogen (BUN) is a waste product produced by the liver and kidneys. Elevated BUN levels can indicate kidney dysfunction. Monitoring BUN levels can help diagnose and manage kidney-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.KIDNEY,
    },
  ],
  [BiomarkerId.Ca]: [
    {
      biomarkerId: BiomarkerId.Ca,
      description:
        'Calcium is an essential mineral that plays a key role in bone health, muscle function, and nerve function. Abnormal calcium levels can indicate a variety of health conditions, including bone disease and kidney dysfunction. Monitoring calcium levels can help diagnose and manage calcium-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BONE,
    },
  ],
  [BiomarkerId.CHOL]: [
    {
      biomarkerId: BiomarkerId.CHOL,
      description:
        'Total cholesterol is a measure of the total amount of cholesterol in the blood. High levels of cholesterol are associated with an increased risk of heart disease. Lifestyle changes, including diet and exercise, can help lower cholesterol levels and reduce the risk of heart disease.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.CARDIOVASCULAR,
    },
  ],
  [BiomarkerId.Cl]: [
    {
      biomarkerId: BiomarkerId.Cl,
      description:
        'Chloride is an electrolyte that helps maintain the body’s fluid balance. Abnormal chloride levels can indicate a variety of health conditions, including dehydration and kidney dysfunction. Monitoring chloride levels can help diagnose and manage chloride-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.ELECTROLYTES,
    },
  ],
  [BiomarkerId.CO2]: [
    {
      biomarkerId: BiomarkerId.CO2,
      description:
        'Carbon dioxide (CO2) is a waste product produced by the body. Abnormal CO2 levels can indicate a variety of health conditions, including kidney dysfunction and respiratory disorders. Monitoring CO2 levels can help diagnose and manage CO2-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.RESPIRATORY,
    },
  ],
  [BiomarkerId.Cor]: [
    {
      biomarkerId: BiomarkerId.Cor,
      description:
        'Cortisol is a hormone produced by the adrenal glands. Elevated cortisol levels can indicate stress and other health problems. Monitoring cortisol levels can help diagnose and manage cortisol-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.Crea]: [
    {
      biomarkerId: BiomarkerId.Crea,
      description:
        'Creatinine is a waste product produced by the muscles. Elevated creatinine levels can indicate kidney dysfunction. Monitoring creatinine levels can help diagnose and manage kidney-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.KIDNEY,
    },
  ],
  [BiomarkerId.eGFR]: [
    {
      biomarkerId: BiomarkerId.eGFR,
      description:
        'Estimated glomerular filtration rate (eGFR) is a measure of kidney function. Abnormal eGFR levels can indicate kidney dysfunction. Monitoring eGFR levels can help diagnose and manage kidney-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.KIDNEY,
    },
  ],
  [BiomarkerId.Glu]: [
    {
      biomarkerId: BiomarkerId.Glu,
      description:
        'Glucose is a sugar that serves as the body’s primary source of energy. Abnormal glucose levels can indicate a variety of health conditions, including diabetes and metabolic disorders. Monitoring glucose levels can help diagnose and manage glucose-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.Hct]: [
    {
      biomarkerId: BiomarkerId.Hct,
      description:
        'Hematocrit is a measure of the volume of red blood cells in the blood. Abnormal hematocrit levels can indicate a variety of health conditions, including anemia and dehydration. Monitoring hematocrit levels can help diagnose and manage hematocrit-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.Hgb]: [
    {
      biomarkerId: BiomarkerId.Hgb,
      description:
        'Hemoglobin is a protein that carries oxygen in the blood. Abnormal hemoglobin levels can indicate a variety of health conditions, including anemia and dehydration. Monitoring hemoglobin levels can help diagnose and manage hemoglobin-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.HgbA1c]: [
    {
      biomarkerId: BiomarkerId.HgbA1c,
      description:
        'Hemoglobin A1c is a measure of long-term blood sugar control. Elevated HgbA1c levels are associated with an increased risk of diabetes and other health problems. Monitoring HgbA1c levels can help diagnose and manage diabetes-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.DIABETES,
    },
  ],
  [BiomarkerId.B12]: [
    {
      biomarkerId: BiomarkerId.B12,
      description:
        'Vitamin B12 is an essential nutrient that plays a key role in nerve function and red blood cell production. Vitamin B12 deficiency can lead to anemia and other health problems. Monitoring B12 levels can help diagnose and manage B12-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.NEUROLOGICAL,
    },
  ],
  [BiomarkerId.CK]: [
    {
      biomarkerId: BiomarkerId.CK,
      description:
        'Creatine kinase (CK) is an enzyme produced by the muscles. Elevated CK levels can indicate muscle damage. Monitoring CK levels can help diagnose and manage muscle-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.MUSCLE,
    },
  ],
  [BiomarkerId.Mg]: [
    {
      biomarkerId: BiomarkerId.Mg,
      description:
        'Magnesium is an essential mineral that plays a key role in many bodily functions, including muscle and nerve function. Abnormal magnesium levels can indicate a variety of health conditions, including heart disease and diabetes. Monitoring magnesium levels can help diagnose and manage magnesium-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.METABOLIC,
    },
  ],
  [BiomarkerId.P]: [
    {
      biomarkerId: BiomarkerId.P,
      description:
        'Phosphorus is an essential mineral that plays a key role in bone health, energy production, and cell function. Abnormal phosphorus levels can indicate a variety of health conditions, including kidney disease and metabolic disorders. Monitoring phosphorus levels can help diagnose and manage phosphorus-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BONE,
    },
  ],
  [BiomarkerId.K]: [
    {
      biomarkerId: BiomarkerId.K,
      description:
        'Potassium is an electrolyte that helps maintain the body’s fluid balance. Abnormal potassium levels can indicate a variety of health conditions, including heart disease and kidney dysfunction. Monitoring potassium levels can help diagnose and manage potassium-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.ELECTROLYTES,
    },
  ],
  [BiomarkerId.Na]: [
    {
      biomarkerId: BiomarkerId.Na,
      description:
        'Sodium is an electrolyte that helps maintain the body’s fluid balance. Abnormal sodium levels can indicate a variety of health conditions, including dehydration and kidney dysfunction. Monitoring sodium levels can help diagnose and manage sodium-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.ELECTROLYTES,
    },
  ],
  [BiomarkerId.Cd]: [
    {
      biomarkerId: BiomarkerId.Cd,
      description:
        'Cadmium is a toxic metal that can accumulate in the body over time. Chronic cadmium exposure is associated with a variety of health problems, including kidney and lung damage. Minimizing exposure to cadmium is essential to protect health.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.KIDNEY,
    },
  ],
  [BiomarkerId.Pb]: [
    {
      biomarkerId: BiomarkerId.Pb,
      description:
        'Lead is a toxic metal that can accumulate in the body over time. Chronic lead exposure is associated with a variety of health problems, including neurological and kidney damage. Minimizing exposure to lead is essential to protect health.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.NEUROLOGICAL,
    },
  ],
  [BiomarkerId.As]: [
    {
      biomarkerId: BiomarkerId.As,
      description:
        'Arsenic is a toxic metalloid that can accumulate in the body over time. Chronic arsenic exposure is associated with a variety of health problems, including skin, lung, and bladder cancer. Minimizing exposure to arsenic is essential to protect health.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.DERMATOLOGICAL,
    },
  ],
  [BiomarkerId.D]: [
    {
      biomarkerId: BiomarkerId.D,
      description:
        'Vitamin D is an essential nutrient that plays a key role in bone health, immune function, and hormone regulation. Vitamin D deficiency is associated with a variety of health problems, including bone disease and autoimmune disorders. Monitoring vitamin D levels can help diagnose and manage vitamin D-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BONE,
    },
  ],
  [BiomarkerId.Se]: [
    {
      biomarkerId: BiomarkerId.Se,
      description:
        'Selenium is an essential mineral that plays a key role in immune function and antioxidant defense. Selenium deficiency is associated with a variety of health problems, including heart disease and cancer. Monitoring selenium levels can help diagnose and manage selenium-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.Zn]: [
    {
      biomarkerId: BiomarkerId.Zn,
      description:
        'Zinc is an essential mineral that plays a key role in immune function, wound healing, and DNA synthesis. Zinc deficiency is associated with a variety of health problems, including growth retardation and immune dysfunction. Monitoring zinc levels can help diagnose and manage zinc-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.RDW]: [
    {
      biomarkerId: BiomarkerId.RDW,
      description:
        'Red cell distribution width (RDW) is a measure of the variation in the size of red blood cells. Abnormal RDW levels can indicate a variety of health conditions, including anemia and vitamin deficiencies. Monitoring RDW levels can help diagnose and manage RDW-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.MCV]: [
    {
      biomarkerId: BiomarkerId.MCV,
      description:
        'Mean corpuscular volume (MCV) is a measure of the average size of red blood cells. Abnormal MCV levels can indicate a variety of health conditions, including anemia and vitamin deficiencies. Monitoring MCV levels can help diagnose and manage MCV-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.MCH]: [
    {
      biomarkerId: BiomarkerId.MCH,
      description:
        'Mean corpuscular hemoglobin (MCH) is a measure of the amount of hemoglobin in red blood cells. Abnormal MCH levels can indicate a variety of health conditions, including anemia and vitamin deficiencies. Monitoring MCH levels can help diagnose and manage MCH-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.MCHC]: [
    {
      biomarkerId: BiomarkerId.MCHC,
      description:
        'Mean corpuscular hemoglobin concentration (MCHC) is a measure of the concentration of hemoglobin in red blood cells. Abnormal MCHC levels can indicate a variety of health conditions, including anemia and vitamin deficiencies. Monitoring MCHC levels can help diagnose and manage MCHC-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.RBC]: [
    {
      biomarkerId: BiomarkerId.RBC,
      description:
        'Red blood cell count is a measure of the number of red blood cells in the blood. Abnormal RBC levels can indicate a variety of health conditions, including anemia and vitamin deficiencies. Monitoring RBC levels can help diagnose and manage RBC-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.PLT]: [
    {
      biomarkerId: BiomarkerId.PLT,
      description:
        'Platelet count is a measure of the number of platelets in the blood. Abnormal platelet levels can indicate a variety of health conditions, including bleeding disorders and infections. Monitoring platelet levels can help diagnose and manage platelet-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.BLOOD,
    },
  ],
  [BiomarkerId.MONO]: [
    {
      biomarkerId: BiomarkerId.MONO,
      description:
        'Monocytes are a type of white blood cell that plays a key role in the immune response. Abnormal monocyte levels can indicate a variety of health conditions, including infections and autoimmune diseases. Monitoring monocyte levels can help diagnose and manage monocyte-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.MONO_PCT]: [
    {
      biomarkerId: BiomarkerId.MONO_PCT,
      description:
        'Monocyte percentage is a measure of the percentage of monocytes in the blood. Abnormal monocyte percentage levels can indicate a variety of health conditions, including infections and autoimmune diseases. Monitoring monocyte percentage levels can help diagnose and manage monocyte-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.NEUT]: [
    {
      biomarkerId: BiomarkerId.NEUT,
      description:
        'Neutrophils are a type of white blood cell that plays a key role in the immune response. Abnormal neutrophil levels can indicate a variety of health conditions, including infections and inflammatory diseases. Monitoring neutrophil levels can help diagnose and manage neutrophil-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.NEUT_PCT]: [
    {
      biomarkerId: BiomarkerId.NEUT_PCT,
      description:
        'Neutrophil percentage is a measure of the percentage of neutrophils in the blood. Abnormal neutrophil percentage levels can indicate a variety of health conditions, including infections and inflammatory diseases. Monitoring neutrophil percentage levels can help diagnose and manage neutrophil-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.LYMPHS]: [
    {
      biomarkerId: BiomarkerId.LYMPHS,
      description:
        'Lymphocytes are a type of white blood cell that plays a key role in the immune response. Abnormal lymphocyte levels can indicate a variety of health conditions, including infections and autoimmune diseases. Monitoring lymphocyte levels can help diagnose and manage lymphocyte-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.LYMPHS_PCT]: [
    {
      biomarkerId: BiomarkerId.LYMPHS_PCT,
      description:
        'Lymphocyte percentage is a measure of the percentage of lymphocytes in the blood. Abnormal lymphocyte percentage levels can indicate a variety of health conditions, including infections and autoimmune diseases. Monitoring lymphocyte percentage levels can help diagnose and manage lymphocyte-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.EOS]: [
    {
      biomarkerId: BiomarkerId.EOS,
      description:
        'Eosinophils are a type of white blood cell that plays a key role in the immune response. Abnormal eosinophil levels can indicate a variety of health conditions, including allergies and parasitic infections. Monitoring eosinophil levels can help diagnose and manage eosinophil-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.EOS_PCT]: [
    {
      biomarkerId: BiomarkerId.EOS_PCT,
      description:
        'Eosinophil percentage is a measure of the percentage of eosinophils in the blood. Abnormal eosinophil percentage levels can indicate a variety of health conditions, including allergies and parasitic infections. Monitoring eosinophil percentage levels can help diagnose and manage eosinophil-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.BASOS]: [
    {
      biomarkerId: BiomarkerId.BASOS,
      description:
        'Basophils are a type of white blood cell that plays a key role in the immune response. Abnormal basophil levels can indicate a variety of health conditions, including allergies and autoimmune diseases. Monitoring basophil levels can help diagnose and manage basophil-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.BASOS_PCT]: [
    {
      biomarkerId: BiomarkerId.BASOS_PCT,
      description:
        'Basophil percentage is a measure of the percentage of basophils in the blood. Abnormal basophil percentage levels can indicate a variety of health conditions, including allergies and autoimmune diseases. Monitoring basophil percentage levels can help diagnose and manage basophil-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.GSH]: [
    {
      biomarkerId: BiomarkerId.GSH,
      description:
        'Glutathione (GSH) is an antioxidant that plays a key role in protecting cells from damage. Low levels of glutathione are associated with a variety of health problems, including oxidative stress and inflammation. Monitoring glutathione levels can help diagnose and manage glutathione-related conditions.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
    {
      biomarkerId: BiomarkerId.GSH,
      description:
        "Glutathione plays a number of roles in overall health including boosting the immune system, helping to break down nutrients in food, and protecting against chronic diseases such as Alzheimer's, Parkinsons, diabetes, some types of cancer, and heart disease.",
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.IMMUNE,
    },
  ],
  [BiomarkerId.HORVATH]: [
    {
      biomarkerId: BiomarkerId.HORVATH,
      description:
        'The Horvath epigenetic clock provides a measure of biological age, which can differ significantly from chronological age. Biological age reflects the functional state of the body and is a more accurate predictor of health and lifespan.',
      importance: BiomarkerImportanceLevel.HIGH,
      category: BiomarkerHealthImpact.AGE,
    },
  ],
}
