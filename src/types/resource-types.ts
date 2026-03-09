export enum ResourceId {
  Nature_d41586_019_02638_w = 'Nature_d41586_019_02638_w',
  Frontiersin_fcanc_2022_00005 = 'Frontiersin_fcanc_2022_00005',
  LPI_Garlic = 'LPI_Garlic',
  JN_131_3s_1054S_4687050 = 'JN_131_3s_1054S_4687050',
  NutraIngredients_Omega3 = 'NutraIngredients_Omega3',
}

export type ResourceQuality = 'High' | 'Medium' | 'Low'

export interface Resource {
  id: ResourceId
  title: string
  url: string
  description?: string
  image?: string
  tags?: string[]
  when_published: number
  quality: ResourceQuality
}
