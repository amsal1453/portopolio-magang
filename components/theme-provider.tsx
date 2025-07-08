"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme") as Theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme

    setThemeState(initialTheme)
    updateTheme(initialTheme)
  }, [])

  const updateTheme = (newTheme: Theme) => {
    const root = document.documentElement

    // Remove existing theme classes
    root.classList.remove("dark", "light")

    // Add new theme class
    root.classList.add(newTheme)

    // Update CSS custom properties for smooth transitions
    if (newTheme === "dark") {
      root.style.setProperty("--bg-primary", "15 23 42") // slate-950
      root.style.setProperty("--bg-secondary", "30 41 59") // slate-800
      root.style.setProperty("--text-primary", "255 255 255")
      root.style.setProperty("--text-secondary", "148 163 184") // slate-400
    } else {
      root.style.setProperty("--bg-primary", "255 255 255")
      root.style.setProperty("--bg-secondary", "248 250 252") // slate-50
      root.style.setProperty("--text-primary", "15 23 42") // slate-950
      root.style.setProperty("--text-secondary", "100 116 139") // slate-500
    }
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    updateTheme(newTheme)
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="bg-slate-950">{children}</div>
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
