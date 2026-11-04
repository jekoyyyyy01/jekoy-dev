import { Box, keyframes, useColorModeValue } from '@chakra-ui/react'
import { MotionValue } from 'framer-motion'

import { MotionBox } from 'components/motion/box'

const drift_cyan = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(var(--drift-x, 30px), var(--drift-y, 20px), 0); }
`

const drift_violet = keyframes`
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(calc(var(--drift-x, 30px) * -1), calc(var(--drift-y, 20px) * -1), 0); }
`

const reduced_motion_off = {
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
}

interface HeroAmbientProps {
  y: MotionValue<number>
  opacity: MotionValue<number>
}

/* Soft cyan/violet glow. Uses plain radial gradients (no blur filter) and only
 * animates transform/opacity to stay cheap on the GPU. */
export function HeroAmbient({ y, opacity }: HeroAmbientProps) {
  const alpha = useColorModeValue(0.12, 0.2)

  return (
    <Box
      aria-hidden="true"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100vh"
      zIndex="-1"
      overflow="hidden"
      pointerEvents="none"
    >
      <MotionBox position="absolute" inset="0" style={{ y, opacity }}>
        <Box
          position="absolute"
          top="6%"
          right={{ base: '-30%', md: '-8%' }}
          width={{ base: '360px', md: '520px' }}
          height={{ base: '360px', md: '520px' }}
          borderRadius="full"
          backgroundImage={`radial-gradient(circle at center, rgba(34, 211, 238, ${alpha}) 0%, transparent 70%)`}
          willChange="transform"
          animation={{
            base: 'none',
            md: `${drift_cyan} 22s ease-in-out infinite alternate`,
          }}
          sx={{
            '--drift-x': { md: '16px', lg: '30px' },
            '--drift-y': { md: '12px', lg: '20px' },
            ...reduced_motion_off,
          }}
        />
        <Box
          position="absolute"
          top="30%"
          left="-10%"
          width="520px"
          height="520px"
          borderRadius="full"
          display={{ base: 'none', md: 'block' }}
          backgroundImage={`radial-gradient(circle at center, rgba(139, 92, 246, ${alpha}) 0%, transparent 70%)`}
          willChange="transform"
          animation={`${drift_violet} 28s ease-in-out infinite alternate`}
          sx={{
            '--drift-x': { md: '16px', lg: '30px' },
            '--drift-y': { md: '12px', lg: '20px' },
            ...reduced_motion_off,
          }}
        />
      </MotionBox>
    </Box>
  )
}
