import {
  AgeRange,
  BiomarkerId,
  Ethnicity,
  Gender,
  OptimalBiomarkerRangeSet,
} from '~src/types/biomarker-types'

export const enum BiomarkerRangeSourceId {
  MayClinicCBC = 'MayClinicCBC',
  Blueprint = 'Blueprint',
  Other = 'Other',
}

export interface BiomarkerRangeSource {
  id: BiomarkerRangeSourceId
  name: string
  url: string | null
}

export const BIOMARKER_RANGE_SOURCES: Record<
  BiomarkerRangeSourceId,
  BiomarkerRangeSource
> = {
  [BiomarkerRangeSourceId.MayClinicCBC]: {
    id: BiomarkerRangeSourceId.MayClinicCBC,
    name: 'Mayo Clinic - CBC',
    url: 'https://www.mayoclinic.org/tests-procedures/complete-blood-count/about/pac-20384919',
  },
  [BiomarkerRangeSourceId.Blueprint]: {
    id: BiomarkerRangeSourceId.Blueprint,
    name: 'Blueprint Protocol',
    url: 'https://protocol.bryanjohnson.com/',
  },
  [BiomarkerRangeSourceId.Other]: {
    id: BiomarkerRangeSourceId.Other,
    name: 'Other',
    url: null,
  },
}

export const OPTIMAL_BIOMARKER_RANGE_MAP: Partial<
  Record<BiomarkerId, OptimalBiomarkerRangeSet[]>
> = {
  RBC: [
    {
      source: BiomarkerRangeSourceId.MayClinicCBC,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.92, 5.65],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [5.35, 5.65],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.92, 5.13],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [4.4, 5.8],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [4.7, 6.1],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [4.2, 5.4],
          },
        },
      },
    },
  ],
  WBC: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.5, 6],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.MayClinicCBC,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.4, 9.6],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [4, 11],
          },
          [AgeRange.Teens]: {
            [Ethnicity.Other]: [5, 10],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [3.8, 7.1],
          },
        },
      },
    },
  ],
  Fe: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [50, 180],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [50, 180],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [83, 114],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [10, 200],
          },
        },
      },
    },
  ],
  Fer: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [15, 350],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 500],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [20, 500],
            [Ethnicity.Asian]: [20, 345],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [10, 200],
          },
        },
      },
    },
  ],
  Glu: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [70, 99],
          },
        },
      },
    },
  ],
  Crea: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.74 + 0.59 / 2, (1.35 + 1.04) / 2],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.74, 1.35],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.59, 1.04],
          },
        },
      },
    },
  ],
  Hgb: [
    {
      source: BiomarkerRangeSourceId.MayClinicCBC,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [11.6, 16.6],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [13.2, 16.6],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [11.6, 15],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [12.9, 15.8],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [13.2, 16.6],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [13.2, 17.1],
            [Ethnicity.Asian]: [13.2, 17.1],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [11.6, 15],
          },
        },
      },
    },
  ],
  TS: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [17.5, 50],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 50],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [15, 50],
          },
        },
      },
    },
  ],
  TIBC: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [245, 450],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [250, 450],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [240, 450],
          },
        },
      },
    },
  ],
  D: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 40],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 40],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [32, 100],
            [Ethnicity.Asian]: [32, 100],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 40],
          },
        },
      },
    },
  ],
  Alb: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.45, 5.45],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.5, 5.5],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [3.6, 5.1],
            [Ethnicity.Asian]: [3.6, 5.1],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.4, 5.4],
          },
        },
      },
    },
  ],
  BUN: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [6, 24],
          },
        },
      },
    },
  ],
  HbA1c: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [4.5, 5.6],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3, 5.7],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [3, 5.1],
          },
        },
      },
    },
  ],
  ALP: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [44, 147],
          },
        },
      },
    },
  ],
  ApoB: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 90],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 90],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 90],
          },
        },
      },
    },
  ],
  B12: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [200, 900],
          },
          [AgeRange.Sixties]: {
            [Ethnicity.Other]: [300, 350],
          },
          [AgeRange.Seventies]: {
            [Ethnicity.Other]: [300, 350],
          },
          [AgeRange.Eighties]: {
            [Ethnicity.Other]: [300, 350],
          },
          [AgeRange.Nineties]: {
            [Ethnicity.Other]: [300, 350],
          },
        },
        [Gender.Male]: {
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [300, 675],
          },
        },
      },
    },
  ],
  CHOL: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 158],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 150],
          },
        },
        [Gender.Male]: {
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [125, 177],
          },
        },
      },
    },
  ],
  LDL: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 100],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 129],
          },
        },
        [Gender.Male]: {
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [0, 84],
          },
        },
      },
    },
  ],
  HDL: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [50, 60],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [40, 80],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [40, 80],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [54, 77],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [50, 80],
          },
        },
      },
    },
  ],
  T: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [15, 1000],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [350, 750],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [562.2, 1100],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [15, 70],
          },
          [AgeRange.Teens]: {
            [Ethnicity.Other]: [15, 70],
          },
          [AgeRange.Twenties]: {
            [Ethnicity.Other]: [8, 60],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [6, 60],
          },
          [AgeRange.Forties]: {
            [Ethnicity.Other]: [5, 60],
          },
          [AgeRange.Fifties]: {
            [Ethnicity.Other]: [5, 60],
          },
          [AgeRange.Sixties]: {
            [Ethnicity.Other]: [5, 60],
          },
          [AgeRange.Seventies]: {
            [Ethnicity.Other]: [5, 60],
          },
          [AgeRange.Eighties]: {
            [Ethnicity.Other]: [5, 60],
          },
          [AgeRange.Nineties]: {
            [Ethnicity.Other]: [5, 60],
          },
        },
      },
    },
  ],
  FT: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.1, 30],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [9, 30],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [8.8, 22.4],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.1, 2.2],
          },
          [AgeRange.Teens]: {
            [Ethnicity.Other]: [0.1, 2.2],
          },
          [AgeRange.Twenties]: {
            [Ethnicity.Other]: [0.1, 2.2],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [0.1, 2.2],
          },
          [AgeRange.Forties]: {
            [Ethnicity.Other]: [0.1, 1.2],
          },
          [AgeRange.Fifties]: {
            [Ethnicity.Other]: [0.1, 1.2],
          },
          [AgeRange.Sixties]: {
            [Ethnicity.Other]: [0.1, 1.2],
          },
          [AgeRange.Seventies]: {
            [Ethnicity.Other]: [0.1, 1.2],
          },
          [AgeRange.Eighties]: {
            [Ethnicity.Other]: [0.1, 1.2],
          },
          [AgeRange.Nineties]: {
            [Ethnicity.Other]: [0.1, 1.2],
          },
        },
      },
    },
  ],
  Hct: [
    {
      source: BiomarkerRangeSourceId.MayClinicCBC,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [35.5, 48.6],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [38.3, 48.6],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [35.5, 44.9],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [36, 54],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [40, 54],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [38.5, 50],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [36, 48],
          },
        },
      },
    },
  ],
  PLT: [
    {
      source: BiomarkerRangeSourceId.MayClinicCBC,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [135, 371],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [135, 317],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [157, 371],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [150, 450],
          },
        },
        [Gender.Male]: {
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [140, 400],
          },
        },
      },
    },
  ],
  UA: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.4, 7],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.4, 7.0],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.4, 6.0],
          },
        },
      },
    },
  ],
  ALT: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 15],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [7, 55],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [7, 55],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [7, 55],
          },
        },
      },
    },
  ],
  AST: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [8, 48],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [8, 48],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [8, 48],
          },
        },
      },
    },
  ],
  BASOS: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.01, 0.03],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.01, 0.03],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.01, 0.03],
          },
        },
      },
    },
  ],
  BASOS_PCT: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.5, 1],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.5, 1],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.5, 1],
          },
        },
      },
    },
  ],
  Bil: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.3, 1.9],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.3, 1.9],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.3, 1.9],
          },
        },
      },
    },
  ],
  Ca: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [8.6, 10.2],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [8.6, 10.2],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [8.6, 10.2],
          },
        },
      },
    },
  ],
  CK: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [38, 336],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [52, 336],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [38, 176],
          },
        },
      },
    },
  ],
  Cor: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [6.2, 19.4],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [6.2, 19.4],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [6.2, 19.4],
          },
        },
      },
    },
  ],
  CRP: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 1],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 1],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 1],
          },
        },
      },
    },
  ],
  EOS: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 0.4],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 0.4],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 0.4],
          },
        },
      },
    },
  ],
  EOS_PCT: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 5],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 5],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 5],
          },
        },
      },
    },
  ],
  FOL: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.7, 40],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.7, 40],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.7, 40],
          },
        },
      },
    },
  ],
  GGT: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 14],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [6, 48],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [9, 48],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [6, 29],
          },
        },
      },
    },
  ],
  hsCRP: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 0.55],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 2],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 2],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 2],
          },
        },
      },
    },
  ],
  Ins: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.6, 24.9],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.6, 24.9],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [3.57, 10.18],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2.6, 24.9],
          },
        },
      },
    },
  ],
  K: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.5, 5.0],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.5, 5.0],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [3.5, 5.0],
          },
        },
      },
    },
  ],
  LYMPHS: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.0, 4.0],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.0, 4.0],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.0, 4.0],
          },
        },
      },
    },
  ],
  LYMPHS_PCT: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 40],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 40],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [20, 40],
          },
        },
      },
    },
  ],
  MCH: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [27, 33],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [27, 33],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [27, 33],
          },
        },
      },
    },
  ],
  MCHC: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [33, 36],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [33, 36],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [33, 36],
          },
        },
      },
    },
  ],
  MCV: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [80, 96],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [80, 96],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [80, 96],
          },
        },
      },
    },
  ],
  Mg: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.7, 2.2],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.7, 2.2],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.7, 2.2],
          },
        },
      },
    },
  ],
  MONO: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.2, 1.0],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.2, 1.0],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.2, 1.0],
          },
        },
      },
    },
  ],
  MONO_PCT: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2, 8],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2, 8],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2, 8],
          },
        },
      },
    },
  ],
  Na: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [135, 145],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [135, 145],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [135, 145],
          },
        },
      },
    },
  ],
  NEUT: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.5, 7.5],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.5, 7.5],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1.5, 7.5],
          },
        },
      },
    },
  ],
  NEUT_PCT: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [40, 60],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [40, 60],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [40, 60],
          },
        },
      },
    },
  ],
  RDW: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [11.5, 14.5],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [11.5, 14.5],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [11.5, 14.5],
          },
        },
      },
    },
  ],
  SHBG: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [18, 144],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [18, 54],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [18, 144],
          },
        },
      },
    },
  ],
  Tg: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [27, 89],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 150],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 150],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 150],
          },
        },
      },
    },
  ],
  TSH: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [1, 2.1],
          },
        },
      },
    },
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.5, 4.0],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.5, 4.0],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0.5, 4.0],
          },
        },
      },
    },
  ],
  Pb: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 1],
          },
        },
      },
    },
  ],
  Hg: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 10],
          },
        },
      },
    },
  ],
  SCr: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [100, 150],
          },
        },
        [Gender.Male]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [110, 150],
          },
        },
        [Gender.Female]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [100, 130],
          },
        },
      },
    },
  ],
  As: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 1],
          },
        },
      },
    },
  ],
  Cd: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 0.4],
          },
        },
      },
    },
  ],
  GSH: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [176, 323],
          },
        },
      },
    },
  ],
  CO2: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [23, 30],
          },
        },
      },
    },
  ],
  VLDL: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [2, 30],
          },
        },
      },
    },
  ],
  Cl: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [96, 106],
          },
        },
      },
    },
  ],
  IGF1: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [120, 440],
          },
        },
      },
    },
  ],
  NAD: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [50, 75],
          },
        },
      },
    },
  ],
  PSA: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 4],
          },
        },
      },
    },
  ],
  DunedinPACE: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 1],
          },
        },
      },
    },
  ],
  TP: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [6, 8.3],
          },
        },
      },
    },
  ],
  HORVATH: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 100],
          },
          [AgeRange.Twenties]: {
            [Ethnicity.Other]: [0, 20],
          },
          [AgeRange.Thirties]: {
            [Ethnicity.Other]: [0, 30],
          },
          [AgeRange.Forties]: {
            [Ethnicity.Other]: [0, 40],
          },
          [AgeRange.Fifties]: {
            [Ethnicity.Other]: [0, 50],
          },
          [AgeRange.Sixties]: {
            [Ethnicity.Other]: [0, 60],
          },
          [AgeRange.Seventies]: {
            [Ethnicity.Other]: [0, 70],
          },
          [AgeRange.Eighties]: {
            [Ethnicity.Other]: [0, 80],
          },
        },
      },
    },
  ],
  FIB4: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 1.3],
          },
        },
      },
    },
  ],
  Se: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [63, 160],
          },
        },
      },
    },
  ],
  eGFR: [
    {
      source: BiomarkerRangeSourceId.Other,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [90, 120],
          },
        },
      },
    },
  ],
  BMI: [
    {
      source: BiomarkerRangeSourceId.Blueprint,
      range: {
        [Gender.Other]: {
          [AgeRange.Unknown]: {
            [Ethnicity.Other]: [0, 22.5],
          },
        },
      },
    },
  ],
}
