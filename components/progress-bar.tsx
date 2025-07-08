"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ProgressBarProps {
  progress: number
  delay?: number
  color?: string
}

export default function ProgressBar({ progress, delay = 0, color = "from-indigo-500 to-blue-500" }: ProgressBarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
      <motion.div
        className={`h-full bg-gradient-to-r ${color} rounded-full`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${progress}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  )
}
