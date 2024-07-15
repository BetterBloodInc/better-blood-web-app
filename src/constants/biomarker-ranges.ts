import {
  AgeRange,
  BiomarkerId,
  Ethnicity,
  Gender,
  MetricRanges,
} from '~src/types/biomarker-types'

export const METRICS_RANGES_MAP: Partial<Record<BiomarkerId, MetricRanges>> = {
  RBC: {
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
  WBC: {
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
  Fe: {
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
  Fer: {
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
  Glu: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [70, 99],
      },
    },
  },
  Crea: {
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
  Hgb: {
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
  TS: {
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
  TIBC: {
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
  D: {
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
  Alb: {
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
  BUN: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [6, 24],
      },
    },
  },
  HgbA1c: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [3, 5.7],
      },
      [AgeRange.Thirties]: {
        [Ethnicity.Other]: [3, 5.1],
      },
    },
  },
  ALP: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [44, 147],
      },
    },
  },
  ApoB: {
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
  B12: {
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
  CHOL: {
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
  LDL: {
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
  HDL: {
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
  T: {
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
  FT: {
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
  Hct: {
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
  PLT: {
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
  UA: {
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
  ALT: {
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
  AST: {
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
  BASOS: {
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
  BASOS_PCT: {
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
  Bil: {
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
  Ca: {
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
  CK: {
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
  Cor: {
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
  CRP: {
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
  EOS: {
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
  EOS_PCT: {
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
  FOL: {
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
  GGT: {
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
  hsCRP: {
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
  Ins: {
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
  K: {
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
  LYMPHS: {
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
  LYMPHS_PCT: {
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
  MCH: {
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
  MCHC: {
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
  MCV: {
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
  Mg: {
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
  MONO: {
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
  MONO_PCT: {
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
  Na: {
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
  NEUT: {
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
  NEUT_PCT: {
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
  RDW: {
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
  SHBG: {
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
  Tg: {
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
  TSH: {
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
  Pb: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [0, 1],
      },
    },
  },
  Hg: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [0, 10],
      },
    },
  },
  SCr: {
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
  As: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [0, 1],
      },
    },
  },
  Cd: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [0, 0.4],
      },
    },
  },
  GSH: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [176, 323],
      },
    },
  },
  CO2: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [23, 30],
      },
    },
  },
  VLDL: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [2, 30],
      },
    },
  },
  Cl: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [96, 106],
      },
    },
  },
  IGF1: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [120, 440],
      },
    },
  },
  NAD: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [50, 75],
      },
    },
  },
  PSA: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [0, 4],
      },
    },
  },
  DunedinPACE: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [0, 1],
      },
    },
  },
  TP: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [6, 8.3],
      },
    },
  },
  HORVATH: {
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
  FIB4: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [0, 1.3],
      },
    },
  },
  Se: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [63, 160],
      },
    },
  },
  eGFR: {
    [Gender.Other]: {
      [AgeRange.Unknown]: {
        [Ethnicity.Other]: [90, 120],
      },
    },
  },
}
