import Link from 'next/link'
import {Button} from '@chakra-ui/react'

export const ChakraNextLinkButton = ({ href, prefetch = true, ...props }) => {
  return (
    <Link href={href} passHref prefetch={prefetch}>
      <Button as='a' {...props} />
    </Link>
  )
}