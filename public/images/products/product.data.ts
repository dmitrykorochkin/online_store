import { IProduct } from "@/types/product.inteface"

export const products: IProduct[] = [
  {
    id:1,
    descriptions: 'Mango Dragonfruit Starbucks Refreshers® Beverage',
    name: 'Capuchino',
    images: [
      '/products/Peppermint.png',
      '/products/mochacookie.png',
      '/products/Pistachio.png'
    ],
    price: 9,
    reviews: []
},
{
  id:2,
  descriptions: 'Mango Dragonfruit Starbucks Refreshers® Beverage',
  name: 'Pistachio',
  images: [
    '/products/Peppermint.png',
    '/products/mochacookie.png',
    '/products/Pistachio.png'
  ],
  price: 5,
  reviews: []
},
{
  id:3,
  descriptions: 'Mango Dragonfruit Starbucks Refreshers® Beverage',
  name: 'Peppermint',
  images: [
    '/products/Peppermint.png',
    '/products/mochacookie.png',
    '/products/Pistachio.png'
  ],
  price: 7,
  reviews: []
}
]