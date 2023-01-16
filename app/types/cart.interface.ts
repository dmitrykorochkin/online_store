import { IProduct } from "@/types/product.inteface";

export interface ICartItem {
  id: number
  product: IProduct
  quantity: number
}