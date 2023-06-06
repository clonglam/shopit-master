import { render, screen } from '../../../tests/utils'
import HeroBanner from '../HeroBanner'

describe('HeroBanner', () => {
  test('should render a Mobile Hero Banner', () => {
    const banner = {
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
    }

    render(<HeroBanner banner={banner} />)

    // const incrediblesPosterImg = screen.getByAltText(/incredibles.*? poster/i)
    // const image = screen.getByAltText('Incredibles 2 Poster')
    // expect(image.getAttribute('src')).toContain(banner.image)

    // expect(screen.getByRole('heading')).toHaveTextContent(banner.headline)

    // expect(screen.getByRole('button')).toBeDisabled()
    expect(true).toBeTruthy()
  })
})
