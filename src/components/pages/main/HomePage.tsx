"use client"

import { useState, useEffect } from "react"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { ValuesSection } from "./sections/ValuesSection"
import { SolutionsSection } from "./sections/SolutionsSection"
import { NewsSection } from "./sections/NewsSection"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <HeroSection currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
      <AboutSection />
      <ValuesSection />
      <SolutionsSection />
      <NewsSection />
    </>
  )
}
