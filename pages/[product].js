import {Heading} from '@chakra-ui/react'
import {products} from '../data/productsData'
import ProductBar from "../components/ProductBar";

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

  const {name, desc} = product

  return (
    <div>
      <ProductBar/>
      <Heading>{name}</Heading>
      {desc}
    </div>
  )
}

export default Product