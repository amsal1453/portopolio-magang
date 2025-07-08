"use client"

import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "./theme-provider"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-slate-700 dark:bg-slate-700 light:bg-slate-300 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-950 dark:focus:ring-offset-slate-950 light:focus:ring-offset-white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Toggle Background */}
      <motion.div
        className="absolute inset-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
        animate={{
          x: theme === "dark" ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Icons Container */}
      <div className="relative flex items-center justify-between w-full h-full px-1">
        {/* Moon Icon (Dark Mode) */}
        <motion.div
          className="flex items-center justify-center w-5 h-5"
          animate={{
            scale: theme === "dark" ? 1 : 0.8,
            opacity: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={14} className="text-white" />
        </motion.div>

        {/* Sun Icon (Light Mode) */}
        <motion.div
          className="flex items-center justify-center w-5 h-5"
          animate={{
            scale: theme === "light" ? 1 : 0.8,
            opacity: theme === "light" ? 1 : 0.5,
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={14} className="text-white" />
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-blue-500/20 blur-md"
        animate={{
          opacity: theme === "dark" ? 0.5 : 0.3,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
