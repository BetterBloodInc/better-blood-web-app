import {
  Biomarker,
  BiomarkerCategory,
  BiomarkerClassification,
  BiomarkerId,
} from '../types/biomarker-types'

export const BIOMARKERS: Biomarker[] = [
  {
    id: BiomarkerId.Alb,
    name: 'Albumin',
    description:
      'Albumin is a protein made by the liver that helps maintain blood volume and pressure.',
    classification: BiomarkerClassification.Protein,
    categories: [BiomarkerCategory.MetabolicMarkers, BiomarkerCategory.Liver],
    measurementUnit: 'g/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Albumin',
  },
  {
    id: BiomarkerId.Glu,
    name: 'Glucose',
    description: `Glucose comes from the Greek word for "sweet." It's a type of sugar you get from foods you eat, and your body uses it for energy.`,
    classification: BiomarkerClassification.Sugar,
    categories: [
      BiomarkerCategory.MetabolicMarkers,
      BiomarkerCategory.Diabetes,
    ],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Blood_sugar_level',
  },
  {
    id: BiomarkerId.CHOL,
    name: 'Total Cholesterol',
    description:
      'Measures the total amount of cholesterol in your blood, including HDL and LDL cholesterol.',
    classification: BiomarkerClassification.Sterol,
    categories: [BiomarkerCategory.LipidProfile],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Cholesterol',
  },
  {
    id: BiomarkerId.LDL,
    name: 'Low-Density Lipoprotein Cholesterol',
    description:
      "Measures the 'bad' cholesterol that can build up in arteries and lead to heart disease.",
    classification: BiomarkerClassification.Sterol,
    categories: [BiomarkerCategory.LipidProfile],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Low-density_lipoprotein',
  },
  {
    id: BiomarkerId.HDL,
    name: 'High-Density Lipoprotein Cholesterol',
    description:
      "Measures the 'good' cholesterol that helps remove bad cholesterol from your arteries.",
    classification: BiomarkerClassification.Sterol,
    categories: [BiomarkerCategory.LipidProfile],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/High-density_lipoprotein',
  },
  {
    id: BiomarkerId.WBC,
    name: 'White Blood Cell Count',
    description:
      'Measures the number of white blood cells in your blood, which fight infection.',
    classification: BiomarkerClassification.Cell,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: 'cells/µL',
    wikipedia: 'https://en.wikipedia.org/wiki/White_blood_cell',
  },
  {
    id: BiomarkerId.RBC,
    name: 'Red Blood Cell Count',
    description:
      'Measures the number of red blood cells, which carry oxygen from your lungs to the rest of your body.',
    classification: BiomarkerClassification.Cell,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: 'millions/µL',
    wikipedia: 'https://en.wikipedia.org/wiki/Red_blood_cell',
  },
  {
    id: BiomarkerId.Hgb,
    name: 'Hemoglobin',
    description:
      'Measures the amount of hemoglobin, the protein in red blood cells that carries oxygen.',
    classification: BiomarkerClassification.Protein,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: 'g/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Hemoglobin',
  },
  {
    id: BiomarkerId.Hct,
    name: 'Hematocrit',
    description:
      'The hematocrit, also known by several other names, is the volume percentage of red blood cells in blood, measured as part of a blood test. The measurement depends on the number and size of red blood cells.',
    categories: [BiomarkerCategory.BloodCellCounts],
    classification: BiomarkerClassification.Percentage,
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Hematocrit',
  },
  {
    id: BiomarkerId.PLT,
    name: 'Platelet Count',
    description:
      'Measures the number of platelets, which help with blood clotting.',
    categories: [
      BiomarkerCategory.BloodCellCounts,
      BiomarkerCategory.Inflammation,
      BiomarkerCategory.ImmuneSystem,
    ],
    classification: BiomarkerClassification.CellFragment,
    measurementUnit: 'billions/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Platelet',
  },
  {
    id: BiomarkerId.LYMPHS,
    name: 'Lymphocytes',
    description:
      'Measures the number of lymphocytes, a type of white blood cell that helps fight infection.',
    classification: BiomarkerClassification.Cell,
    categories: [
      BiomarkerCategory.BloodCellCounts,
      BiomarkerCategory.Inflammation,
      BiomarkerCategory.ImmuneSystem,
    ],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Lymphocyte',
  },
  {
    id: BiomarkerId.LYMPHS_PCT,
    name: 'Lymphocyte Percentage',
    description: 'Measures the percentage of lymphocytes in your blood.',
    classification: BiomarkerClassification.Percentage,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Lymphocyte',
  },
  {
    id: BiomarkerId.MONO,
    name: 'Monocytes',
    description:
      'Measures the number of monocytes, a type of white blood cell that helps fight infection.',
    classification: BiomarkerClassification.Cell,
    categories: [
      BiomarkerCategory.BloodCellCounts,
      BiomarkerCategory.Inflammation,
      BiomarkerCategory.ImmuneSystem,
    ],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Monocyte',
  },
  {
    id: BiomarkerId.MONO_PCT,
    name: 'Monocyte Percentage',
    description: 'Measures the percentage of monocytes in your blood.',
    classification: BiomarkerClassification.Percentage,
    categories: [
      BiomarkerCategory.BloodCellCounts,
      BiomarkerCategory.Inflammation,
      BiomarkerCategory.ImmuneSystem,
    ],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Monocyte',
  },
  {
    id: BiomarkerId.NEUT,
    name: 'Neutrophils',
    description:
      'Measures the number of neutrophils, a type of white blood cell that helps fight infection.',
    classification: BiomarkerClassification.Cell,
    categories: [
      BiomarkerCategory.BloodCellCounts,
      BiomarkerCategory.Inflammation,
    ],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Neutrophil',
  },
  {
    id: BiomarkerId.NEUT_PCT,
    name: 'Neutrophil Percentage',
    description: 'Measures the percentage of neutrophils in your blood.',
    classification: BiomarkerClassification.Percentage,
    categories: [
      BiomarkerCategory.BloodCellCounts,
      BiomarkerCategory.Inflammation,
    ],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Neutrophil',
  },
  {
    id: BiomarkerId.BUN,
    name: 'Blood Urea Nitrogen',
    description:
      'Measures the amount of nitrogen in your blood that comes from the waste product urea.',
    classification: BiomarkerClassification.Chemical,
    categories: [BiomarkerCategory.MetabolicMarkers, BiomarkerCategory.Kidney],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Blood_urea_nitrogen',
  },
  {
    id: BiomarkerId.CO2,
    name: 'Carbon Dioxide',
    description:
      'Measures the level of bicarbonate in your blood, which helps maintain the pH balance.',
    classification: BiomarkerClassification.Chemical,
    categories: [BiomarkerCategory.MetabolicMarkers],
    measurementUnit: 'mmol/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Bicarbonate',
  },
  {
    id: BiomarkerId.Crea,
    name: 'Creatinine',
    description:
      "Measures kidney function and how well they're removing waste from your blood.",
    categories: [BiomarkerCategory.MetabolicMarkers, BiomarkerCategory.Kidney],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Creatinine',
  },
  {
    id: BiomarkerId.HORVATH,
    name: 'Horvath Biological Age',
    description:
      'Measures DNA methylation levels at specific sites in the genome to estimate biological age using the Horvath Epigenetic Clock. It is one of the most widely used and studied epigenetic clocks.',
    categories: [BiomarkerCategory.Aging],
    measurementUnit: 'years',
  },
  {
    id: BiomarkerId.UA,
    name: 'Uric Acid',
    description:
      'Measures the level of uric acid in the blood, which can indicate gout or kidney disease.',
    categories: [BiomarkerCategory.MetabolicMarkers],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Uric_acid',
  },
  {
    id: BiomarkerId.NAD,
    name: 'NAD',
    description:
      'Measures the level of NAD, a coenzyme that helps with energy production in cells.',
    categories: [BiomarkerCategory.MetabolicMarkers],
    measurementUnit: 'µmol/L',
    wikipedia:
      'https://en.wikipedia.org/wiki/Nicotinamide_adenine_dinucleotide',
  },
  {
    id: BiomarkerId.PSA,
    name: 'Prostate-Specific Antigen',
    description:
      'Measures the level of PSA, a protein produced by the prostate gland that can indicate prostate cancer.',
    categories: [BiomarkerCategory.Cancer],
    measurementUnit: 'ng/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Prostate-specific_antigen',
  },
  {
    id: BiomarkerId.Tg,
    name: 'Triglycerides',
    description:
      'Measures the level of triglycerides, a type of fat in the blood, which can increase the risk of heart disease.',
    categories: [BiomarkerCategory.LipidProfile],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Triglyceride',
  },
  {
    id: BiomarkerId.Fe,
    name: 'Iron',
    description:
      'Measures the level of iron, which is important for making red blood cells.',
    categories: [BiomarkerCategory.Iron],
    measurementUnit: 'µg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Iron',
  },
  {
    id: BiomarkerId.Fer,
    name: 'Ferritin',
    description:
      'Measures the level of ferritin, a protein that stores iron in your body.',
    categories: [BiomarkerCategory.Iron],
    measurementUnit: 'ng/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Ferritin',
  },
  {
    id: BiomarkerId.FOL,
    name: 'Folate',
    description:
      'Measures the level of folate, a B vitamin that helps make DNA and other genetic material.',
    categories: [BiomarkerCategory.VitaminsAndMinerals],
    measurementUnit: 'ng/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Folate',
  },
  {
    id: BiomarkerId.Mg,
    name: 'Magnesium',
    description:
      'Measures the level of magnesium, a mineral that helps with muscle and nerve function.',
    categories: [
      BiomarkerCategory.VitaminsAndMinerals,
      BiomarkerCategory.Electrolytes,
    ],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Magnesium',
  },
  {
    id: BiomarkerId.D,
    name: 'Vitamin D',
    description:
      'Measures the level of vitamin D, which helps with calcium absorption and bone health.',
    categories: [BiomarkerCategory.VitaminsAndMinerals, BiomarkerCategory.Bone],
    measurementUnit: 'ng/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Vitamin_D',
  },
  {
    id: BiomarkerId.FIB4,
    name: 'FIB-4',
    description:
      'A fibrosis index based on four factors that can help diagnose liver fibrosis and cirrhosis.',
    categories: [BiomarkerCategory.Liver],
    measurementUnit: '',
  },
  {
    id: BiomarkerId.DunedinPACE,
    name: 'DunedinPACE',
    description: 'A DNA methylation biomarker of the pace of aging',
    categories: [BiomarkerCategory.Aging],
    measurementUnit: 'years',
  },
  {
    id: BiomarkerId.TSH,
    name: 'Thyroid-Stimulating Hormone',
    description:
      'Measures the level of TSH, which helps regulate the thyroid gland and metabolism.',
    categories: [BiomarkerCategory.Thyroid],
    measurementUnit: 'mIU/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Thyroid-stimulating_hormone',
  },
  {
    id: BiomarkerId.SHBG,
    name: 'Sex-Hormone Binding Globulin',
    description:
      "Measures the level of SHBG, which is a protein produced by the liver that binds to sex hormones in the blood, controlling the amount that's actively working.",
    categories: [BiomarkerCategory.Hormones],
    measurementUnit: 'nmol/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Sex_hormone-binding_globulin',
  },
  {
    id: BiomarkerId.T,
    name: 'Total Testosterone',
    description:
      'Measures the total amount of testosterone in the blood, which is important for sexual development and function.',
    categories: [BiomarkerCategory.Hormones],
    measurementUnit: 'ng/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Testosterone',
  },
  {
    id: BiomarkerId.TP,
    name: 'Total Protein',
    description:
      'Measures the total amount of protein in the blood, which is important for growth and repair of tissues.',
    categories: [BiomarkerCategory.MetabolicMarkers],
    measurementUnit: 'g/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Total_protein',
  },
  {
    id: BiomarkerId.FT,
    name: 'Free Testosterone',
    description:
      'Measures the amount of testosterone that is not bound to proteins in the blood, which is the active form of the hormone.',
    categories: [BiomarkerCategory.Hormones],
    measurementUnit: 'pg/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Testosterone',
  },
  {
    id: BiomarkerId.Ins,
    name: 'Insulin',
    description:
      'Measures the level of insulin, which helps regulate blood sugar levels.',
    categories: [BiomarkerCategory.Hormones],
    measurementUnit: 'µIU/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Insulin',
  },
  {
    id: BiomarkerId.hsCRP,
    name: 'High-Sensitivity C-Reactive Protein',
    description:
      'Measures the level of hsCRP, which is a marker of inflammation in the body and a risk factor for heart disease.',
    categories: [BiomarkerCategory.Inflammation],
    measurementUnit: 'mg/L',
    wikipedia: 'https://en.wikipedia.org/wiki/C-reactive_protein',
  },
  {
    id: BiomarkerId.GGT,
    name: 'Gamma-Glutamyl Transferase',
    description:
      'Measures the level of GGT, which is an enzyme found in the liver and other tissues.',
    categories: [BiomarkerCategory.Liver],
    measurementUnit: 'units/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Gamma-Glutamyl_transferase',
  },
  {
    id: BiomarkerId.GSH,
    name: 'Glutathione',
    description:
      "Measures the level of glutathione, an antioxidant that helps protect cells from damage. Unlike most antioxidants which come from the food you eat, glutathione is naturally produced by the body in the liver. Glutathione plays a number of roles in overall health including boosting the immune system, helping to break down nutrients in food, and protecting against chronic diseases such as Alzheimer's, Parkinsons, diabetes, some types of cancer, and heart disease.  Glutathione levels tend to decrease naturally with age as well as due to health conditions such as liver disease, insomnia, and chronic stress.",
    categories: [BiomarkerCategory.Antioxidants],
    measurementUnit: 'µmol/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Glutathione',
  },
  {
    id: BiomarkerId.MCV,
    name: 'Mean Corpuscular Volume',
    description:
      'Measures the average size of red blood cells, which can help diagnose anemia.',
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: 'fL',
    wikipedia: 'https://en.wikipedia.org/wiki/Mean_corpuscular_volume',
  },
  {
    id: BiomarkerId.MCH,
    name: 'Mean Corpuscular Hemoglobin',
    description:
      'Measures the average amount of hemoglobin in red blood cells.',
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: 'pg',
    wikipedia: 'https://en.wikipedia.org/wiki/Mean_corpuscular_hemoglobin',
  },
  {
    id: BiomarkerId.MCHC,
    name: 'Mean Corpuscular Hemoglobin Concentration',
    description: 'Measures the concentration of hemoglobin in red blood cells.',
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: 'g/dL',
    wikipedia:
      'https://en.wikipedia.org/wiki/Mean_corpuscular_hemoglobin_concentration',
  },
  {
    id: BiomarkerId.RDW,
    name: 'Red Cell Distribution Width',
    description:
      'Measures the variation in size of red blood cells, which can help diagnose anemia.',
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Red_cell_distribution_width',
  },
  {
    id: BiomarkerId.Na,
    name: 'Sodium',
    description:
      'Measures the level of sodium in the blood, which is important for nerve and muscle function.',
    categories: [BiomarkerCategory.Electrolytes],
    measurementUnit: 'mEq/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Sodium',
  },
  {
    id: BiomarkerId.K,
    name: 'Potassium',
    description:
      'Measures the level of potassium in the blood, which is important for nerve and muscle function.',
    categories: [BiomarkerCategory.Electrolytes],
    measurementUnit: 'mEq/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Potassium',
  },
  {
    id: BiomarkerId.TIBC,
    name: 'Total Iron-Binding Capacity',
    description:
      'Measures the total amount of iron that can be carried by proteins in the blood.',
    categories: [BiomarkerCategory.Iron],
    measurementUnit: 'µg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Total_iron-binding_capacity',
  },
  {
    id: BiomarkerId.TS,
    name: 'Transferrin Saturation',
    description:
      'Measures the percentage of iron-binding sites on transferrin that are occupied by iron.',
    categories: [BiomarkerCategory.Iron],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Transferrin',
  },
  {
    id: BiomarkerId.VLDL,
    name: 'Very Low-Density Lipoprotein Cholesterol',
    description:
      'Measures the level of VLDL cholesterol, which can increase the risk of heart disease.',
    categories: [BiomarkerCategory.LipidProfile],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Very_low-density_lipoprotein',
  },
  {
    id: BiomarkerId.B12,
    name: 'Vitamin B12',
    description:
      'Measures the level of vitamin B12, which is important for nerve function and DNA production.',
    categories: [BiomarkerCategory.VitaminsAndMinerals],
    measurementUnit: 'pg/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Vitamin_B12',
  },
  {
    id: BiomarkerId.As,
    name: 'Arsenic',
    description:
      'Measures the level of arsenic, a toxic metal that can cause health problems.',
    categories: [BiomarkerCategory.HeavyMetals],
    measurementUnit: 'µg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Arsenic',
  },
  {
    id: BiomarkerId.Pb,
    name: 'Lead',
    description:
      'Measures the level of lead, a toxic metal that can cause health problems.',
    categories: [BiomarkerCategory.HeavyMetals],
    measurementUnit: 'µg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Lead',
  },
  {
    id: BiomarkerId.Hg,
    name: 'Mercury',
    description:
      'Measures the level of mercury, a toxic metal that can cause health problems.',
    categories: [BiomarkerCategory.HeavyMetals],
    measurementUnit: 'µg/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Mercury_(element)',
  },
  {
    id: BiomarkerId.Cd,
    name: 'Cadmium',
    description:
      'Measures the level of cadmium, a toxic metal that can cause health problems.',
    categories: [BiomarkerCategory.HeavyMetals],
    measurementUnit: 'µg/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Cadmium',
  },
  {
    id: BiomarkerId.Ca,
    name: 'Calcium',
    description:
      'Measures the level of calcium, which is important for bone health and muscle function.',
    categories: [BiomarkerCategory.Bone, BiomarkerCategory.VitaminsAndMinerals],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Calcium',
  },
  {
    id: BiomarkerId.SCr,
    name: 'Serum Creatinine',
    description:
      "Measures kidney function and how well they're removing waste from your blood.",
    categories: [BiomarkerCategory.Kidney],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Creatinine',
  },
  {
    id: BiomarkerId.ALT,
    name: 'Alanine Aminotransferase',
    description:
      'Measures the level of ALT, an enzyme found in the liver that can indicate liver damage.',
    categories: [BiomarkerCategory.Liver],
    measurementUnit: 'IU/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Alanine_transaminase',
  },
  {
    id: BiomarkerId.AST,
    name: 'Aspartate Aminotransferase',
    description:
      'Measures the level of AST, an enzyme found in the liver that can indicate liver damage.',
    categories: [BiomarkerCategory.Liver],
    measurementUnit: 'IU/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Aspartate_transaminase',
  },
  {
    id: BiomarkerId.ALP,
    name: 'Alkaline Phosphatase',
    description:
      'Measures the level of ALP, an enzyme found in the liver, bones, and other tissues.',
    categories: [BiomarkerCategory.Liver, BiomarkerCategory.Bone],
    measurementUnit: 'IU/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Alkaline_phosphatase',
  },
  {
    id: BiomarkerId.Cl,
    name: 'Chloride',
    description:
      'Measures the level of chloride in the blood, which is important for fluid balance.',
    categories: [BiomarkerCategory.Electrolytes],
    measurementUnit: 'mEq/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Chloride',
  },
  {
    id: BiomarkerId.IGF1,
    name: 'Insulin-like Growth Factor 1',
    description:
      'Insulin-like growth factor 1 (IGF-1) is a hormone that helps regulate the effects of growth hormone (GH) in the body, promoting normal growth and development of bones and tissues.',
    categories: [BiomarkerCategory.Hormones],
    measurementUnit: 'ng/mL',
    wikipedia: 'https://en.wikipedia.org/wiki/Insulin-like_growth_factor_1',
  },
  {
    id: BiomarkerId.Se,
    name: 'Selenium',
    description:
      'Selenium is a trace mineral that is essential for human health and is found naturally in many foods, water, and soil.',
    categories: [BiomarkerCategory.VitaminsAndMinerals],
    measurementUnit: 'µg/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Selenium',
  },
  {
    id: BiomarkerId.BMI,
    name: 'Body Mass Index',
    description:
      "Body mass index (BMI) is a ratio of a person's weight to their height, calculated by dividing weight in kilograms by height in meters squared. BMI is a screening tool that estimates body fat percentage and can indicate a person's risk of developing health problems associated with overweight or obesity. However, BMI does not diagnose body fatness or health.",
    categories: [BiomarkerCategory.Anthropometrics],
    measurementUnit: 'kg/m²',
    wikipedia: 'https://en.wikipedia.org/wiki/Body_mass_index',
  },
  {
    id: BiomarkerId.eGFR,
    name: 'Estimated Glomerular Filtration Rate',
    description:
      'Estimated Glomerular Filtration Rate (eGFR) is a measure of how well your kidneys are filtering waste from your blood.',
    categories: [BiomarkerCategory.Kidney],
    measurementUnit: 'mL/min/1.73m²',
    wikipedia: 'https://en.wikipedia.org/wiki/Glomerular_filtration_rate',
  },
  {
    id: BiomarkerId.BASOS,
    name: 'Basophils',
    description:
      'Basophils are a type of white blood cell that helps fight infection and inflammation.',
    classification: BiomarkerClassification.Cell,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Basophil',
  },
  {
    id: BiomarkerId.BASOS_PCT,
    name: 'Basophil Percentage',
    description: 'Measures the percentage of basophils in your blood.',
    classification: BiomarkerClassification.Percentage,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Basophil',
  },
  {
    id: BiomarkerId.EOS,
    name: 'Eosinophils',
    description:
      'Eosinophils are a type of white blood cell that helps fight infection and inflammation.',
    classification: BiomarkerClassification.Cell,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Eosinophil',
  },
  {
    id: BiomarkerId.EOS_PCT,
    name: 'Eosinophil Percentage',
    description: 'Measures the percentage of eosinophils in your blood.',
    classification: BiomarkerClassification.Percentage,
    categories: [BiomarkerCategory.BloodCellCounts],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Eosinophil',
  },
  {
    id: BiomarkerId.Cor,
    name: 'Cortisol',
    description:
      'Cortisol is a steroid hormone that helps regulate metabolism, immune response, and stress.',
    classification: BiomarkerClassification.Hormone,
    categories: [BiomarkerCategory.Hormones],
    measurementUnit: 'µg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Cortisol',
  },
  {
    id: BiomarkerId.ApoB,
    name: 'Apolipoprotein B',
    description:
      'Apolipoprotein B is a protein that helps transport cholesterol in the blood.',
    classification: BiomarkerClassification.Protein,
    categories: [BiomarkerCategory.LipidProfile],
    measurementUnit: 'mg/dL',
    wikipedia: 'https://en.wikipedia.org/wiki/Apolipoprotein_B',
  },
  {
    id: BiomarkerId.CK,
    name: 'Creatinine Kinase',
    description:
      'Creatine kinase is an enzyme found in the heart, brain, and skeletal muscle that helps convert creatine into energy.',
    classification: BiomarkerClassification.Protein,
    categories: [BiomarkerCategory.MetabolicMarkers],
    measurementUnit: 'U/L',
    wikipedia: 'https://en.wikipedia.org/wiki/Creatine_kinase',
  },
  {
    id: BiomarkerId.HbA1c,
    name: 'Hemoglobin A1C',
    description:
      'Hemoglobin A1C is a test that measures the average blood sugar level over the past 2-3 months.',
    classification: BiomarkerClassification.Sugar,
    categories: [BiomarkerCategory.Diabetes],
    measurementUnit: '%',
    wikipedia: 'https://en.wikipedia.org/wiki/Glycated_hemoglobin',
  },
]
