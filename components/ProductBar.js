import {Flex, Grid, GridItem, Link, useColorModeValue} from '@chakra-ui/react'
import NextLink from 'next/link'
import {products} from '../data/productsData'
import product from '../pages/[product]'
import styled from '@emotion/styled';

const ProductItems = products.map((p) => p.name)

const ProductLinks = styled(Link)`
  display: flex;
  letter-spacing: 2px;
  padding: 1.25rem 0;
  opacity: 0.75;
  transition: opacity 0.2s;
`

const ProductBar = ({href, path, products}) => {
	return (
		<Grid
			justifyContent='end'
		>
			<Grid
				templateRows='repeat(4, 1fr)'
				gap={3}
			>
				{ProductItems.map((product, index) => {
					const active = path === href
					return (
						<GridItem
							border='1px solid black'

							key={index}
							color={
								useColorModeValue(active ? 'primary' : 'black',
									active ? 'alternative' : 'secondary')
							}
							_hover={{
								textDecoration: 'none',
								color: 'red.600'
							}}>
							<NextLink passHref href={`/${product}`}>
								<ProductLinks product={product} href={`/${product}`}>
									{product}
								</ProductLinks>
							</NextLink>
						</GridItem>
					)
				})}
			</Grid>
		</Grid>
	)
}

export default ProductBar