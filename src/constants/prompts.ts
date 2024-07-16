export const EXTRACT_BIOMARKERS_FROM_IMAGE_PROMPT = `
    Given this image, extract biomarkers into a JSON object with an array of BiomarkerMeasurement items using the following typescript schema: 
    interface BiomarkerMeasurement { biomarkerId: BiomarkerId, value: number, timestamp: number } 
    where BiomarkerId is one of the following values from this typescript enum: BiomarkerId {
    Alb = 'Alb', // Albumin
    ALP = 'ALP', // Alkaline Phosphatase
    ALT = 'ALT', // Alanine Aminotransferase
    ApoB = 'ApoB', // Apolipoprotein B
    As = 'As', // Arsenic
    AST = 'AST', // Aspartate Aminotransferase
    HbA1c = 'HbA1c', // Hemoglobin A1C
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
  }. 
  The JSON object response should have the following format:
  { 
    "metrics": [ { "biomarkerId": BiomarkerId, "value": number, "timestamp": number }, ... ],
    "context": "Additional context about the response"
  }
  Timestamp should be milliseconds since epoch.
  Return an empty JSON array if no biomarkers are present. 
  Ignore any biomarkers in the image that are not present in the enum.
  Ignore any biomarkers that do not have a value or timestamp.
  Ignore any biomarkers with a value of "Not tested".
  Do not return any additional text other than the raw JSON object.
  Do not add new line characters or other formatting to the JSON string.
  Include any additional notes about the response in the context field.`