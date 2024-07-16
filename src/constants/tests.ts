import { BiomarkerId } from '~src/types/biomarker-types'

export type PriceUnit = 'USD' | 'EUR'

export type ProviderId =
  | 'INSIDETRACKER'
  | 'EVERLYWELL'
  | 'HEALTHLABS'
  | 'QUESTDIAGNOSTICS'
  | 'QUESTHEALTH'
  | 'LABCORP'
  | 'MYDNAGE'
  | 'REQUESTATEST'
  | 'TRUDIAGNOSTIC'
  | 'WALKINLAB'

export interface Provider {
  id: string
  name: string
  website: string
  description: string
  isWorldWide: boolean
  countriesAvailable?: string[]
}

export interface ProviderTest {
  name: string
  description: string
  link: string
  providerId: ProviderId
  price: number
  priceUnit: PriceUnit
  measuredBiomarkers: BiomarkerId[]
}

export const PROVIDERS: Record<ProviderId, Provider> = {
  INSIDETRACKER: {
    id: 'INSIDETRACKER',
    name: 'InsideTracker',
    website: 'https://www.insidetracker.com/',
    description:
      'InsideTrack is a leading blood testing provider that offers a wide range of blood tests to help you optimize your health and fitness.',
    isWorldWide: true,
  },
  EVERLYWELL: {
    id: 'EVERLYWELL',
    name: 'EverlyWell',
    website: 'https://www.everlywell.com/',
    description:
      'EverlyWell is a popular blood testing provider that offers a variety of blood tests to help you monitor your health and wellness.',
    isWorldWide: true,
  },
  HEALTHLABS: {
    id: 'HEALTHLABS',
    name: 'HealthLabs',
    website: 'https://www.healthlabs.com/',
    description:
      'HealthLabs is a trusted blood testing provider that offers a variety of blood tests to help you monitor your health and wellness.',
    isWorldWide: true,
  },
  QUESTDIAGNOSTICS: {
    id: 'QUESTDIAGNOSTICS',
    name: 'Quest Diagnostics',
    website: 'https://www.questdiagnostics.com/',
    description:
      'Quest Diagnostics is a leading blood testing provider that offers a wide range of blood tests to help you optimize your health and fitness.',
    isWorldWide: true,
  },
  QUESTHEALTH: {
    id: 'QUESTHEALTH',
    name: 'Quest Health',
    website: 'https://www.questhealth.com/',
    description:
      'Quest Health is a popular blood testing provider that offers a variety of blood tests to help you monitor your health and wellness.',
    isWorldWide: true,
  },
  LABCORP: {
    id: 'LABCORP',
    name: 'LabCorp',
    website: 'https://www.labcorp.com/',
    description:
      'LabCorp is a popular blood testing provider that offers a variety of blood tests to help you monitor your health and wellness.',
    isWorldWide: true,
  },
  MYDNAGE: {
    id: 'MYDNAGE',
    name: 'MyDNAge',
    website: 'https://www.mydnage.com/',
    description:
      "MyDNAge provides the most accurate and reliable DNA Age test using Horvath's Clock.",
    isWorldWide: true,
  },
  REQUESTATEST: {
    id: 'REQUESTATEST',
    name: 'Request A Test',
    website: 'https://requestatest.com/',
    description:
      'National Leader in Affordable Direct to Consumer Lab Testing. Order blood tests online with or without insurance or doctor visit. Walk-In Lab Testing Available.',
    isWorldWide: true,
  },
  TRUDIAGNOSTIC: {
    id: 'TRUDIAGNOSTIC',
    name: 'TruDiagnostic',
    website: 'https://www.trudiagnostic.com/',
    description: '',
    isWorldWide: true,
  },
  WALKINLAB: {
    id: 'WALKINLAB',
    name: 'Walk-In Lab',
    website: 'https://www.walkinlab.com/',
    description:
      "Walk-In Lab offers direct access to blood work and lab testing that's cheap and provides confidential results. Buy any lab test now with or without insurance and a doctor’s order is not required.",
    isWorldWide: true,
  },
}

export const PROVIDER_TESTS: Record<ProviderId, ProviderTest[]> = {
  EVERLYWELL: [],
  HEALTHLABS: [
    {
      name: 'CBC with Differential',
      description: 'Complete Blood Count with Differential',
      link: 'https://www.healthlabs.com/cbc-test-differential',
      providerId: 'HEALTHLABS',
      price: 28,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.RBC,
        BiomarkerId.RDW,
        BiomarkerId.MCV,
        BiomarkerId.Hgb,
        BiomarkerId.Hct,
        BiomarkerId.MCH,
        BiomarkerId.MCHC,
        BiomarkerId.WBC,
        BiomarkerId.PLT,
        BiomarkerId.NEUT,
        BiomarkerId.NEUT_PCT,
        BiomarkerId.LYMPHS,
        BiomarkerId.LYMPHS_PCT,
        BiomarkerId.MONO,
        BiomarkerId.MONO_PCT,
        BiomarkerId.EOS,
        BiomarkerId.EOS_PCT,
        BiomarkerId.BASOS,
        BiomarkerId.BASOS_PCT,
      ],
    },
    {
      name: 'Anemia Panel - Basic',
      description:
        'The Anemia Panel - Basic measures your blood iron levels to help you monitor your risk of anemia.',
      link: 'https://www.healthlabs.com/anemia-testing-basic',
      providerId: 'HEALTHLABS',
      price: 49,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.Hct,
        BiomarkerId.Hgb,
        BiomarkerId.MCV,
        BiomarkerId.MCH,
        BiomarkerId.MCHC,
        BiomarkerId.RBC,
        BiomarkerId.PLT,
        BiomarkerId.RDW,
        BiomarkerId.WBC,
        BiomarkerId.Fe,
        BiomarkerId.TIBC,
      ],
    },
    {
      name: 'Vitamin D 25-Hydroxy (Calcidiol) Blood Test',
      description:
        'This test measures Vitamin D 25-Hydroxy (Calcidiol) levels in the blood to check for vitamin D deficiencies. The major function of vitamin D in humans is maintenance of calcium homeostasis.',
      link: 'https://www.healthlabs.com/vitamin-d-25-hydroxy-calcidiol-testing',
      providerId: 'HEALTHLABS',
      price: 59,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.D],
    },
    {
      name: 'Standard Heavy Metals Profile, Blood Test',
      description:
        'This test measures the levels of heavy metals in your blood to help you monitor your exposure to toxic metals.',
      link: 'https://www.healthlabs.com/heavy-metals-testing-blood',
      providerId: 'HEALTHLABS',
      price: 198,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.As, BiomarkerId.Pb, BiomarkerId.Hg],
    },
  ],
  INSIDETRACKER: [],
  LABCORP: [
    {
      name: 'CBC with Differential',
      description: 'Complete Blood Count with Differential',
      link: 'https://www.ondemand.labcorp.com/lab-tests/complete-blood-count',
      providerId: 'LABCORP',
      price: 29,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.RBC,
        BiomarkerId.RDW,
        BiomarkerId.MCV,
        BiomarkerId.Hgb,
        BiomarkerId.Hct,
        BiomarkerId.MCH,
        BiomarkerId.MCHC,
        BiomarkerId.WBC,
        BiomarkerId.PLT,
        BiomarkerId.NEUT,
        BiomarkerId.NEUT_PCT,
        BiomarkerId.LYMPHS,
        BiomarkerId.LYMPHS_PCT,
        BiomarkerId.MONO,
        BiomarkerId.MONO_PCT,
        BiomarkerId.EOS,
        BiomarkerId.EOS_PCT,
        BiomarkerId.BASOS,
        BiomarkerId.BASOS_PCT,
      ],
    },
    {
      name: 'Cholesterol and Lipid Panel Test',
      description:
        'This cholesterol and lipid panel measures both LDL and HDL cholesterol levels to help you get a better picture of your heart health.',
      link: 'https://www.ondemand.labcorp.com/lab-tests/cholesterol-test-lipid-panel',
      providerId: 'LABCORP',
      price: 59,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.CHOL,
        BiomarkerId.HDL,
        BiomarkerId.LDL,
        BiomarkerId.Tg,
        BiomarkerId.VLDL,
      ],
    },
    {
      name: 'Comprehensive Metabolic Panel (CMP) Test',
      description:
        'The Comprehensive Metabolic Panel (CMP) test measures your blood sugar, electrolyte, and kidney function levels to help you monitor your overall health.',
      link: 'https://www.ondemand.labcorp.com/lab-tests/comprehensive-metabolic-panel',
      providerId: 'LABCORP',
      price: 49,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.Glu,
        BiomarkerId.BUN,
        BiomarkerId.Crea,
        BiomarkerId.eGFR,
        BiomarkerId.Na,
        BiomarkerId.K,
        BiomarkerId.Cl,
        BiomarkerId.CO2,
        BiomarkerId.Ca,
        BiomarkerId.Alb,
        BiomarkerId.TP,
        BiomarkerId.ALP,
        BiomarkerId.ALT,
        BiomarkerId.AST,
        BiomarkerId.Bil,
      ],
    },
    {
      name: 'Liver Health Test',
      description:
        'The Liver Health Test measures your liver enzyme levels to help you monitor your liver health and function.',
      link: 'https://www.ondemand.labcorp.com/lab-tests/liver-health-test',
      providerId: 'LABCORP',
      price: 79,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.ALP,
        BiomarkerId.ALT,
        BiomarkerId.AST,
        BiomarkerId.Bil,
        BiomarkerId.TP,
        BiomarkerId.Alb,
        BiomarkerId.PLT,
        BiomarkerId.FIB4,
      ],
    },
    {
      name: 'Vitamin Deficiency Test',
      description:
        "Find out if you're getting enough vitamin D, B12 and B9 (folate) with this vitamin test.",
      link: 'https://www.ondemand.labcorp.com/lab-tests/vitamin-deficiency-test',
      providerId: 'LABCORP',
      price: 169,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.D, BiomarkerId.B12, BiomarkerId.FOL],
    },
    {
      name: 'Diabetes Risk (HbA1c) & Cholesterol Test',
      description:
        'This test measures your HbA1c and cholesterol levels to help you monitor your risk of diabetes and heart disease.',
      link: 'https://www.ondemand.labcorp.com/lab-tests/diabetes-risk-hba1c-cholesterol-test',
      providerId: 'LABCORP',
      price: 89,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.HbA1c,
        BiomarkerId.CHOL,
        BiomarkerId.HDL,
        BiomarkerId.LDL,
        BiomarkerId.Tg,
      ],
    },
    {
      name: 'Vitamin B12 and Folate Test',
      description:
        'This test measures the levels of Vitamin B12 and Folate in your blood to help you monitor your overall health.',
      link: 'https://www.ondemand.labcorp.com/lab-tests/vitamin-b12-and-folate-test',
      providerId: 'LABCORP',
      price: 89,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.B12, BiomarkerId.FOL],
    },
    {
      name: 'Inflammation (hs-CRP) Test',
      description:
        'This test measures the levels of hs-CRP in your blood to help you monitor your inflammation levels and overall health.',
      link: 'https://www.ondemand.labcorp.com/lab-tests/inflammation-hs-crp-test',
      providerId: 'LABCORP',
      price: 59,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.hsCRP],
    },
  ],
  MYDNAGE: [
    {
      name: 'Blood Biological Age Test',
      description:
        'The At-Home Blood Collection Kit is a lancet-based kit that requires only 2-3 drops of blood. This test can be done from the comfort of your own home.',
      link: 'https://www.mydnage.com/products/blood',
      providerId: 'MYDNAGE',
      price: 299,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.HORVATH],
    },
  ],
  QUESTDIAGNOSTICS: [],
  QUESTHEALTH: [
    {
      name: 'Iron, TIBC & Ferritin Panel',
      description:
        'This panel measures your iron, TIBC, and ferritin levels to help you monitor your iron status and overall health.',
      link: 'https://www.questhealth.com/product/iron-tibc-ferritin-panel-5616M.html',
      providerId: 'QUESTHEALTH',
      price: 64,
      priceUnit: 'USD',
      measuredBiomarkers: [
        BiomarkerId.Fe,
        BiomarkerId.TIBC,
        BiomarkerId.Fer,
        BiomarkerId.TS,
      ],
    },
    {
      name: 'Vitamin D Test',
      description:
        'This test measures the levels of Vitamin D in your blood, which is a key nutrient that helps your body absorb calcium and phosphorus. Both are essential for building healthy and strong bones.',
      link: 'https://www.questhealth.com/product/vitamin-d-test-17306M.html',
      providerId: 'QUESTHEALTH',
      price: 72,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.D],
    },
  ],
  REQUESTATEST: [
    {
      name: 'Glutathione (GSH) Blood Test',
      description:
        'This test measures the levels of Glutathione (GSH) in your blood to help you monitor your antioxidant levels and overall health.',
      link: 'https://requestatest.com/glutathione-gsh-blood-test',
      providerId: 'REQUESTATEST',
      price: 149,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.GSH],
    },
  ],
  TRUDIAGNOSTIC: [
    {
      name: 'TrueAge COMPLETE',
      description:
        'This at-home epigenetic test tells you how old you really are from a biological standpoint, and analyzes how fast or slow your body is currently aging on a cellular level.',
      link: 'https://shop.trudiagnostic.com/products/truage-complete-epigenetic-collection',
      providerId: 'TRUDIAGNOSTIC',
      price: 499,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.DunedinPACE],
    },
  ],
  WALKINLAB: [
    {
      name: 'Glutathione, Total Blood Test',
      description:
        'The Glutathione, Total Blood Test is used to measure the amount of Glutathione in the blood.',
      link: 'https://www.walkinlab.com/products/view/glutathione-total-blood-test',
      providerId: 'WALKINLAB',
      price: 148,
      priceUnit: 'USD',
      measuredBiomarkers: [BiomarkerId.GSH],
    },
  ],
}
