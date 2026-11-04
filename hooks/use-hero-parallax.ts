import * as React from 'react'
import {
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

/* Px distances reached when the hero has fully scrolled out of view. The
 * illustration lifts upward (faster than scroll); the ambient glow lags behind
 * (slower than scroll). Matches Chakra md (48em) and lg (62em). */
const illustration_distance = { base: 0, md: -30, lg: -60 }
const ambient_distance = { base: 20, md: 40, lg: 80 }

function get_parallax_distances() {
  if (typeof window == 'undefined') {
    return { illustration: 0, ambient: 0 }
  }

  const width = window.innerWidth
  if (width >= 992) {
    return {
      illustration: illustration_distance.lg,
      ambient: ambient_distance.lg,
    }
  }
  if (width >= 768) {
    return {
      illustration: illustration_distance.md,
      ambient: ambient_distance.md,
    }
  }
  return {
    illustration: illustration_distance.base,
    ambient: ambient_distance.base,
  }
}

export function useHeroParallax(target: React.RefObject<HTMLElement>) {
  const reduced_motion = useReducedMotion()
  const illustration_range = useMotionValue(0)
  const ambient_range = useMotionValue(0)

  React.useEffect(() => {
    function apply_distances() {
      const { illustration, ambient } = get_parallax_distances()
      illustration_range.set(reduced_motion ? 0 : illustration)
      ambient_range.set(reduced_motion ? 0 : ambient)
    }

    apply_distances()
    window.addEventListener('resize', apply_distances)
    return () => {
      window.removeEventListener('resize', apply_distances)
    }
  }, [reduced_motion, illustration_range, ambient_range])

  const { scrollYProgress } = useScroll({
    target,
    offset: ['start start', 'end start'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  })

  const illustration_y = useTransform(
    [progress, illustration_range],
    (values: number[]) => values[0] * values[1]
  )
  const ambient_y = useTransform(
    [progress, ambient_range],
    (values: number[]) => values[0] * values[1]
  )
  const illustration_opacity = useTransform(progress, [0.5, 1], [1, 0.85])
  const ambient_opacity = useTransform(progress, [0.3, 1], [1, 0])

  return { illustration_y, illustration_opacity, ambient_y, ambient_opacity }
}
