import * as React from 'react'
import { Flex, VisuallyHidden } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { JekoyLogo } from 'components/brand'

export interface LogoProps {
  href?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

import siteConfig from 'data/config'

export const Logo = ({ href = '/', onClick }: LogoProps) => {
  return (
    <Flex h="8" flexShrink="0" alignItems="center">
      <Link
        href={href}
        display="flex"
        p="1"
        borderRadius="sm"
        onClick={onClick}
        _hover={{ textDecoration: 'none' }}
      >
        <JekoyLogo height={32} />
        <VisuallyHidden>{siteConfig.seo?.title}</VisuallyHidden>
      </Link>
    </Flex>
  )
}
