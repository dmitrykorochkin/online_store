
import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'
import { products } from '@/data/product.data'
import { ICartItem } from '@/types/cart.interface'
import { useActions } from '@/hooks/useActions'

const CartActions: FC<{item: ICartItem}> = ({item}) => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

  const {removeFromCart} = useActions()

	return (
		<div>
			<HStack maxW='320px'>
				<Button {...inc}>
					<AddIcon />
				</Button>
				<Input {...input} focusBorderColor='green.400' />
				<Button {...dec}>
					<MinusIcon />
				</Button>
			</HStack>
			<Button 
          variant={'link'} 
          color='red.400' 
          marginTop={2} 
          size='sm'
          onClick={() => removeFromCart({id: item.id})} 
      >
          
				Remove
			</Button>
		</div>
	)
}

export default CartActions
