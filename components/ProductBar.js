import {Box, Grid, GridItem, MenuItem, Text} from '@chakra-ui/react'
import NextLink from 'next/link'
import {products} from '../data/productsData'

const ProductItems = products.map((a) => a.name)

const ProductBar = () => {
	return (
		<Grid flexDirection='column'>
			{ProductItems.map((product, index) => {
				return (
					<GridItem key={index}>
						<NextLink href={`/${product}`}>
							{product}
						</NextLink>
					</GridItem>
				)
			})}
		</Grid>
	)
}

export default ProductBar