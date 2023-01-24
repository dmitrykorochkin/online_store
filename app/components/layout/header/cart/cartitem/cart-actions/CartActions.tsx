import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

const CartActions: FC = () => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 0,
			max: 1000
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

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
			<Button variant={'link'} color='red.400' marginTop={2} size='sm'>
				Remove
			</Button>
		</div>
	)
}

export default CartActions
