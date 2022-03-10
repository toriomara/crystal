import {Container, MenuItem} from '@chakra-ui/react'
import NextLink from 'next/link'
import {products} from '../data/productsData'

const ProductItems = products.map((a) => a.name)

const ProductBar = () => {
	return (
		<div>
			<Container>
				{ProductItems.map((product, index) => {
					return (
						<MenuItem key={index}>
							<NextLink href={`/${product}`}>
								{product}
							</NextLink>
						</MenuItem>
					)
				})}
			</Container>
		</div>
	)
}

export default ProductBar