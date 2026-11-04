import * as React from 'react'

import { MotionBox, MotionBoxProps } from './box'

const reveal_ease: [number, number, number, number] = [0.25, 1, 0.5, 1]

interface RevealCustom {
  delay: number
  duration: number
  distance: number
  instant: boolean
}

const reveal_variants = {
  hidden: (custom: RevealCustom) => ({
    opacity: 0,
    y: custom.distance,
  }),
  visible: (custom: RevealCustom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.instant ? 0 : custom.duration,
      delay: custom.instant ? 0 : custom.delay,
      ease: reveal_ease,
    },
  }),
}

export interface HeroRevealItemProps extends MotionBoxProps {
  as?: React.ElementType
  delay?: number
  duration?: number
  distance?: number
}

/* Plays once on mount. When the page is reloaded while already scrolled, it is
 * applied instantly so nothing animates off-screen. */
export function HeroRevealItem(props: HeroRevealItemProps) {
  const {
    children,
    delay = 0,
    duration = 0.6,
    distance = 16,
    ...rest
  } = props
  const [animate_state, set_animate_state] = React.useState<'hidden' | 'visible'>(
    'hidden'
  )
  const [instant, set_instant] = React.useState(false)

  React.useLayoutEffect(() => {
    if (window.scrollY > 0) {
      set_instant(true)
      set_animate_state('visible')
    }
  }, [])

  React.useEffect(() => {
    if (window.scrollY == 0) {
      set_animate_state('visible')
    }
  }, [])

  const custom = React.useMemo(
    () => ({
      delay,
      duration,
      distance,
      instant,
    }),
    [delay, duration, distance, instant]
  )

  return (
    <MotionBox
      data-hero-reveal=""
      variants={reveal_variants}
      custom={custom}
      initial="hidden"
      animate={animate_state}
      {...rest}
    >
      {children}
    </MotionBox>
  )
}

/* Reveal items are server-rendered hidden, so without JavaScript they must be
 * forced visible. */
export function HeroRevealNoscript() {
  return (
    <noscript>
      <style>
        {'[data-hero-reveal]{opacity:1 !important;transform:none !important}'}
      </style>
    </noscript>
  )
}
