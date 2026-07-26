import * as React from 'react'
import { Box } from '@chakra-ui/react'

export interface JekoyLogoProps {
  height?: number
}

export function JekoyLogo({ height = 32 }: JekoyLogoProps) {
  const gradient_id = React.useId().replace(/:/g, '')
  const width = height * 3.2

  return (
    <Box
      as="svg"
      width={width}
      height={height}
      viewBox="0 0 160 40"
      flexShrink={0}
      aria-label="Jekoy"
      role="img"
    >
      <defs>
        <linearGradient id={gradient_id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#805AD5" />
          <stop offset="50%" stopColor="#6B46C1" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="32"
        fill={`url(#${gradient_id})`}
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="34"
        fontWeight="700"
        letterSpacing="-1"
      >
        Jekoy
      </text>
    </Box>
  )
}

export function JekoyLogoMark({ height = 32 }: JekoyLogoProps) {
  const gradient_id = React.useId().replace(/:/g, '')

  return (
    <Box
      as="svg"
      width={height}
      height={height}
      viewBox="0 0 40 40"
      flexShrink={0}
      aria-label="Jekoy"
      role="img"
    >
      <defs>
        <linearGradient id={gradient_id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#805AD5" />
          <stop offset="55%" stopColor="#6B46C1" />
          <stop offset="100%" stopColor="#0891B2" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill={`url(#${gradient_id})`} />
      <path
        d="M24 10H16V21.5C16 25.5 18.5 28 22 28C23.5 28 25 27.5 26.5 26.5"
        fill="none"
        stroke="white"
        strokeWidth="2.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.5 13C10.5 15 10 17 10 19M29 21C29.5 23 29.5 25 29 27"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M12 14H10M30 26H28"
        fill="none"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
        opacity="0.55"
      />
    </Box>
  )
}
