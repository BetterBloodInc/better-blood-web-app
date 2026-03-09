import { Resource, ResourceId } from '~src/types/resource-types'

export const RESOURCES: Partial<Record<ResourceId, Resource>> = {
  [ResourceId.Nature_d41586_019_02638_w]: {
    id: ResourceId.Nature_d41586_019_02638_w,
    title: `First hint that bodys 'biological age' can be reversed`,
    url: 'https://www.nature.com/articles/d41586-019-02638-w',
    description:
      "In a small trial, drugs seemed to rejuvenate the body's 'epigenetic clock', which tracks a person's biological age.",
    tags: ['Regeneration', 'Aging'],
    when_published: 2019,
    quality: 'High',
  },
  [ResourceId.Frontiersin_fcanc_2022_00005]: {
    id: ResourceId.Frontiersin_fcanc_2022_00005,
    title:
      'Effects of aged garlic extract (AGE) on immune function in patients with advanced cancer',
    url: 'https://www.frontiersin.org/articles/10.3389/fcanc.2022.00005/full',
    description:
      'This study found that aged garlic extract significantly enhanced the number and activity of natural killer (NK) cells in patients with advanced lung, colon, pancreatic, and liver cancer.',
    tags: ['Garlic', 'Cancer', 'ImmuneFunction', 'NKCells'],
    when_published: 2022,
    quality: 'High',
  },
  [ResourceId.LPI_Garlic]: {
    id: ResourceId.LPI_Garlic,
    title:
      'Garlic consumption and its effects on immune markers and white blood cell count',
    url: 'https://lpi.oregonstate.edu/mic/dietary-factors/phytochemicals/garlic',
    description:
      "This research highlighted garlic's role in modulating immune markers, including white blood cell count, and its broader implications for cancer prevention.",
    tags: ['Garlic', 'CancerPrevention', 'ImmuneMarkers'],
    when_published: 2020,
    quality: 'High',
  },
  [ResourceId.JN_131_3s_1054S_4687050]: {
    id: ResourceId.JN_131_3s_1054S_4687050,
    title:
      'The influence of garlic on leukocyte activity in healthy volunteers',
    url: 'https://academic.oup.com/jn/article/131/3s/1054S/4687050',
    description:
      'This clinical trial found that garlic intake increased the expression of genes related to immunity and apoptosis, enhancing leukocyte activity in healthy volunteers.',
    tags: ['Garlic', 'LeukocyteActivity', 'Immunity'],
    when_published: 2015,
    quality: 'Medium',
  },
  [ResourceId.NutraIngredients_Omega3]: {
    id: ResourceId.NutraIngredients_Omega3,
    title: 'Omega-3 linked to lower levels of inflammation',
    url: 'https://www.nutraingredients.com/Article/2009/04/14/Omega-3-linked-to-lower-levels-of-inflammation',
    description:
      'Increased blood levels of the omega-3 fatty acids DHA and EPA are associated with lower levels of a marker of inflammation linked to heart disease, says a new study from Australia.',
    tags: ['Omega3', 'Inflammation', 'HeartDisease'],
    when_published: 2009,
    quality: 'Medium',
  },
}
