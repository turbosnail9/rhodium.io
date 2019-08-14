export const LAMBDA_ENDPOINT = 'https://kvz60gz535.execute-api.us-east-1.amazonaws.com/prod/distance'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const META = {
  common: {
    image: '/images/profile.jpg',
  },
  index: {
    title: 'Rhodium Labs | Heretics',
    description: 'Rhodium Labs, heretical venture studio based in Toronto, Canada. We build products that make the world a bit more sane.'
  },
  about: {
    title: 'Rhodium Labs | About',
    description: 'Over the last 4+ years, we have worked with the world\'s best companies.'
  },
  works: {
    title: 'Rhodium Labs | Works',
    description: 'A selection of the work carried out over 4+ years of work. Among which: Websites, Web applications, coordinated images and more.'
  }
}
