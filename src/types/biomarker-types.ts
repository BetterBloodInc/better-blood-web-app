export const enum BiomarkerClassification {
  Cell = 'Cell',
  CellFragment = 'Cell Fragment',
  Chemical = 'Chemical',
  HeavyMetal = 'Heavy Metal',
  Hormone = 'Hormone',
  Mineral = 'Mineral',
  Percentage = 'Percentage',
  Protein = 'Protein',
  Sterol = 'Sterol',
  Sugar = 'Sugar',
  Vitamin = 'Vitamin',
}
export const enum BiomarkerCategory {
  Aging = 'Aging',
  Antioxidants = 'Antioxidants',
  Anthropometrics = 'Anthropometrics',
  BloodCellCounts = 'Blood Cell Counts',
  Cancer = 'Cancer',
  MetabolicMarkers = 'Metabolic Markers',
  Hormones = 'Hormones',
  HeavyMetals = 'Heavy Metals',
  VitaminsAndMinerals = 'Vitamins and Minerals',
  LipidProfile = 'Lipid Profile',
  Kidney = 'Kidney',
  Liver = 'Liver',
  Thyroid = 'Thyroid',
  Electrolytes = 'Electrolytes',
  Inflammation = 'Inflammation',
  ImmuneSystem = 'Immune System',
  Nutrients = 'Nutrients',
  Diabetes = 'Diabetes',
  Iron = 'Iron',
  Bone = 'Bone',
  Cardio = 'Cardio',
  Other = 'Other',
}
export const enum BiomarkerId {
  Alb = 'Alb', // Albumin
  ALP = 'ALP', // Alkaline Phosphatase
  ALT = 'ALT', // Alanine Aminotransferase
  ApoB = 'ApoB', // Apolipoprotein B
  As = 'As', // Arsenic
  AST = 'AST', // Aspartate Aminotransferase
  HgbA1c = 'HgbA1c', // Hemoglobin A1C
  B12 = 'B12', // Vitamin B12
  BASOS = 'BASOS', // Basophils
  BASOS_PCT = 'BASOS_PCT', // Basophil Percentage
  Bil = 'Bil', // Bilirubin
  BMI = 'BMI', // Body Mass Index
  BUN = 'BUN', // Blood Urea Nitrogen
  Ca = 'Ca', // Calcium
  Cd = 'Cd', // Cadmium
  CHOL = 'CHOL', // Total Cholesterol
  CK = 'CK', // Creatine Kinase
  Cl = 'Cl', // Chloride
  CO2 = 'CO2', // Carbon Dioxide
  Cor = 'Cor', // Cortisol
  CRP = 'CRP', // C-Reactive Protein
  Crea = 'Crea', // Creatinine
  D = 'D', // Vitamin D
  DunedinPACE = 'DunedinPACE', // DunedinPACE
  eGFR = 'eGFR', // Estimated Glomerular Filtration Rate
  EOS = 'EOS', // Eosinophils
  EOS_PCT = 'EOS_PCT', // Eosinophil Percentage
  Fe = 'Fe', // Iron
  Fer = 'Fer', // Ferritin
  FIB4 = 'FIB4', // FIB-4
  FOL = 'FOL', // Folate
  FT = 'FT', // Free Testosterone
  GGT = 'GGT', // Gamma-Glutamyl Transferase
  Glu = 'Glu', // Glucose
  GSH = 'GSH', // Glutathione
  HDL = 'HDL', // High-Density Lipoprotein Cholesterol
  Hct = 'Hct', // Hematocrit
  Hg = 'Hg', // Mercury
  Hgb = 'Hgb', // Hemoglobin
  HORVATH = 'HORVATH', // Horvath Clock
  hsCRP = 'hsCRP', // High-Sensitivity C-Reactive Protein
  IGF1 = 'IGF1', // Insulin-like Growth Factor 1
  Ins = 'Ins', // Insulin
  K = 'K', // Potassium
  LDL = 'LDL', // Low-Density Lipoprotein Cholesterol
  LYMPHS = 'LYMPHS', // Lymphocytes
  LYMPHS_PCT = 'LYMPHS_PCT', // Lymphocyte Percentage
  MCH = 'MCH', // Mean Corpuscular Hemoglobin
  MCHC = 'MCHC', // Mean Corpuscular Hemoglobin Concentration
  MCV = 'MCV', // Mean Corpuscular Volume
  Mg = 'Mg', // Magnesium
  MONO = 'MONO', // Monocytes
  MONO_PCT = 'MONO_PCT', // Monocyte Percentage
  Na = 'Na', // Sodium
  NAD = 'NAD', // Nicotinamide Adenine Dinucleotide
  NEUT = 'NEUT', // Neutrophils
  NEUT_PCT = 'NEUT_PCT', // Neutrophil Percentage
  P = 'P', // Phosphorus
  Pb = 'Pb', // Lead
  PLT = 'PLT', // Platelets
  PSA = 'PSA', // Prostate-Specific Antigen
  RBC = 'RBC', // Red Blood Cell Count
  RDW = 'RDW', // Red Cell Distribution Width
  SCr = 'SCr', // Serum Creatinine
  Se = 'Se', // Selenium
  SHBG = 'SHBG', // Sex-hormone binding globulin
  T = 'T', // Total Testosterone
  TP = 'TP', // Total Protein
  Tg = 'Tg', // Triglycerides
  TIBC = 'TIBC', // Total Iron-Binding Capacity
  TS = 'TS', // Transferrin Saturation
  TSH = 'TSH', // Thyroid-Stimulating Hormone
  UA = 'UA', // Uric Acid
  VLDL = 'VLDL', // Very Low-Density Lipoprotein Cholesterol
  WBC = 'WBC', // White Blood Cell Count
  Zn = 'Zn', // Zinc
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

export enum Ethnicity {
  Caucasian = 'Caucasian',
  African = 'African',
  Hispanic = 'Hispanic',
  Asian = 'Asian',
  PacificIslander = 'Pacific Islander',
  Native = 'Native',
  Other = 'Other',
}

export enum AgeRange {
  Unknown = 'Unknown',
  Teens = '10s',
  Twenties = '20s',
  Thirties = '30s',
  Forties = '40s',
  Fifties = '50s',
  Sixties = '60s',
  Seventies = '70s',
  Eighties = '80s',
  Nineties = '90s',
}

export enum WeightUnit {
  Lbs = 'lbs',
  Kg = 'kg',
}

export enum HeightUnit {
  In = 'in',
  Cm = 'cm',
}

export type MetricRanges = Partial<
  Record<
    Gender,
    Partial<Record<AgeRange, Partial<Record<Ethnicity, number[]>>>>
  >
>

export interface Biomarker {
  id: BiomarkerId
  name: string
  classification?: BiomarkerClassification // TODO make required later
  categories: BiomarkerCategory[]
  description: string
  measurementUnit: string
  wikipedia?: string
}
