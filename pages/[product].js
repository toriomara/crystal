import {Grid, GridItem, Heading} from '@chakra-ui/react'
import {products} from '../data/productsData'
import ProductBar from '../components/ProductBar'
import Image from 'next/image'
import { Features } from '../components/Product/Features'


export const getStaticProps = async ({params}) => {
	const product = products.find(product => product.name === params.product)

	return {
		props: {
			product
		}
	}
}

export const getStaticPaths = async () => {
	const paths = products.map((product) => ({
		params: {product: product.name},
	}))

	return {
		paths,
		fallback: false
	}
}

const Product = ({product}) => {

	const {name, fullDesc, image, temperature, volume, packaging} = product

	return (
		<Grid
			templateRows='1fr 4fr 1fr'
			templateColumns='repeat(5, 1fr)'
			gap={6}
		>

			<GridItem rowSpan={1} colSpan={4} bg='coral'>
				<Heading>{name}</Heading>
			</GridItem>
			<GridItem rowSpan={4} colSpan={1} bg='lavender'>
				<ProductBar/>
			</GridItem>
			<GridItem rowSpan={3} colSpan={2} bg='papayawhip' justifyContent='center'>
				<Image src={image}/>
			</GridItem>
			<GridItem rowSpan={3} colSpan={2} bg='papayawhip'>
				{fullDesc}
			</GridItem>
			<GridItem rowSpan={1} colSpan={5} bg='yellow.300'>
				<Features temperature={temperature} volume={volume} packaging={packaging}/>
			</GridItem>

		</Grid>
	)
}

export default Product