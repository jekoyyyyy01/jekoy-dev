import * as React from 'react'
import { Box, Flex, Heading, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

import siteConfig from 'data/config'

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  return (
    <Flex h="8" flexShrink="0" alignItems="flex-start">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
         _hover={{ textDecoration: "none" }}
      >
        <Heading as="h1" size="md">
          {siteConfig.seo?.title}
        </Heading>
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
