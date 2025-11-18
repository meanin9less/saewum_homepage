import { useState, useEffect, useRef } from "react"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { ValuesSection } from "./sections/ValuesSection"
import { SolutionsSection } from "./sections/SolutionsSection"
import { NewsSection } from "./sections/NewsSection"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="-mt-16 md:-mt-20 overflow-hidden">
      <div ref={heroRef}>
        <HeroSection currentSlide={currentSlide} onSlideChange={setCurrentSlide} />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={valuesRef}>
        <ValuesSection />
      </div>
      <div ref={solutionsRef}>
        <SolutionsSection />
      </div>
      <div ref={newsRef}>
        <NewsSection />
      </div>
    </div>
  )
}
