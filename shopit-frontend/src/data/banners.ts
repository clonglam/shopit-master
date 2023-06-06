export interface Banner {
  headline: string
  amplify?: string
  subtitle: string
  callForAction: CallForActionType
  imageId: number
  image: string
}

export type CallForActionType = {
  text: string
  href: string
}

const bannersData: Banner[] = [
  {
    headline: 'lighting By',
    amplify: 'Anglepoise',
    subtitle: 'Easy-tomaneuver task lighting for all spaces',
    callForAction: {
      text: 'LIGHT THIS WAY',
      href: '/collections/lighting',
    },
    imageId: 8,
    image:
      'https://cdn.shopify.com/s/files/1/1087/6904/files/Screenshot_2023-04-17_at_4.42.15_PM_2000x.png?v=1681764163',
  },
]

export default bannersData
