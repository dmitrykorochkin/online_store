import { IProduct } from "@/types/product.inteface"

export const products: IProduct[] = [
  {
    id: 1,
    descriptions: 'Mango Dragonfruit Starbucks Refreshers® Beverage',
    name: 'Capuchino',
    images: [
      '/images/products/HotChocolate.png',
      '/images/products/HotChocolate.png',
      '/images/products/Pistachio.png'
    ],
    price: 9,
    reviews: []
  },
  {
    id: 2,
    descriptions: 'Mango Dragonfruit Starbucks Refreshers® Beverage',
    name: 'Pistachio',
    images: [
      '/images/products/Pistachio.png',
      '/images/products/mochacookie.png',
      '/images/products/Pistachio.png'
    ],
    price: 5,
    reviews: []
  },
  {
    id: 3,
    descriptions: 'Mango Dragonfruit Starbucks Refreshers® Beverage',
    name: 'Peppermint',
    images: [
      '/images/products/mochacookie.png',
      '/images/products/mochacookie.png',
      '/images/products/Pistachio.png'
    ],
    price: 7,
    reviews: []
  }
]