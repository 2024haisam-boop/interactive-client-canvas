import horne from '@/assets/horne.jpg.asset.json'
import nil from '@/assets/le-nil-bruxelles.jpg.asset.json'
import lagence from '@/assets/lagence.jpg.asset.json'
import more from '@/assets/more-labs.jpg.asset.json'
import premiata from '@/assets/premiata.jpg.asset.json'
import baked from '@/assets/baked-pk.jpg.asset.json'
import padel from '@/assets/padel-pulse-ace.jpg.asset.json'

export const projects = [
  { slug: 'horne', name: 'HORNE', url: 'https://shophorne.com/', industry: 'Furniture & lighting', category: 'E-commerce', image: horne.url, live: true },
  { slug: 'lagence', name: 'L’AGENCE', url: 'https://lagence.com/', industry: 'Fashion & luxury', category: 'E-commerce', image: lagence.url, live: false },
  { slug: 'le-nil-bruxelles', name: 'Le Nil Bruxelles', url: 'https://lenil-bruxelles-i53u.vercel.app/', industry: 'Restaurant · Brussels', category: 'Websites', image: nil.url, live: true },
  { slug: 'more-labs', name: 'More Labs', url: 'https://www.morelabs.com/', industry: 'Health & wellness', category: 'E-commerce', image: more.url, live: true },
  { slug: 'premiata', name: 'Premiata', url: 'https://premiata.it/', industry: 'Footwear & fashion', category: 'E-commerce', image: premiata.url, live: false },
  { slug: 'padel-pulse-ace', name: 'Padel Pulse Ace', url: 'https://padelpulseace.com/', industry: 'Padel & sports', category: 'Websites', image: padel.url, live: false },
  { slug: 'baked-pk', name: 'Baked.pk', url: 'https://baked.pk/', industry: 'Bakery · Pakistan', category: 'E-commerce', image: baked.url, live: false },
  { slug: 'contra-coffee', name: 'Contra Coffee', url: 'https://contracoffee.pk/', industry: 'Café · Lahore', category: 'Websites', image: '', live: false },
  { slug: 'tehzeeb', name: 'Tehzeeb', url: 'https://tehzeeb.com/', industry: 'Bakery & confectionery', category: 'Websites', image: '', live: false },
]
export type Project = typeof projects[number]