import { ICartItem } from '@/types/cart.interface'
import { FC } from 'react'

const CartItem: FC<{item: ICartItem}> = ({item}) => {
  return (
    <div>
      <Image>
        src={}
      </Image>
    </div>
  )
}

export default CartItem