"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"

interface CounterAnimationProps {
  value: number
  suffix?: string
  duration?: number
}

export default function CounterAnimation({ value, suffix = "", duration = 2 }: CounterAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const rounded = useTransform(count, Math.round)

  useEffect(() => {
    if (isInView) {
      const animation = animate(count, value, { duration })
      return animation.stop
    }
  }, [isInView, count, value, duration])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  )
}
