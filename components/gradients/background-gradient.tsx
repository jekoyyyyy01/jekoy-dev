import { Box, useTheme, useColorModeValue } from '@chakra-ui/react'

export const BackgroundGradient = ({ hideOverlay, ...props }: any) => {
  const theme = useTheme()
  const colors = [
    theme.colors.primary['700'],
    theme.colors.secondary['500'],
    theme.colors.cyan['500'],
    theme.colors.teal['500'],
  ]

  let fallbackBackground = `radial-gradient(at top left, ${colors[0]} 30%, transparent 80%), radial-gradient(at bottom, ${colors[1]} 0%, transparent 90%), radial-gradient(at bottom left, var(--chakra-colors-cyan-100) 0%, transparent 50%),
        radial-gradient(at top right, ${colors[0]}, transparent), radial-gradient(at bottom right, ${colors[0]} 0%, transparent 50%);`

  const overlay_bg = useColorModeValue('white', 'gray.900')

  return (
    <Box
      backgroundImage={fallbackBackground}
      backgroundBlendMode="saturation"
      position="absolute"
      top="0"
      left="0"
      zIndex="0"
      opacity={useColorModeValue('0.3', '0.5')}
      transition="opacity 1.5s ease"
      height="100vh"
      width="100%"
      overflow="hidden"
      pointerEvents="none"
      {...props}
    >
      {!hideOverlay ? (
        <Box
          bg={overlay_bg}
          position="absolute"
          top="0"
          right="0"
          bottom="0"
          left="0"
          zIndex="1"
          transition="background-color 1.5s ease"
          sx={{
            WebkitMaskImage: 'linear-gradient(0deg, black 30%, transparent 100%)',
            maskImage: 'linear-gradient(0deg, black 30%, transparent 100%)',
          }}
        />
      ) : null}
    </Box>
  )
}
