import { useState, useEffect, useRef } from "react"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { ValuesSection } from "./sections/ValuesSection"
import { SolutionsSection } from "./sections/SolutionsSection"
import { NewsSection } from "./sections/NewsSection"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const newsRef = useRef<HTMLDivElement>(null)

  const sections = [heroRef, aboutRef, valuesRef, solutionsRef, newsRef]
  const SCROLL_DELAY = 800 // 스크롤 애니메이션 시간

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // 스크롤 중이면 이벤트 무시
      if (isScrolling) {
        e.preventDefault()
        return
      }

      const deltaY = e.deltaY
      const isScrollingDown = deltaY > 0
      const isScrollingUp = deltaY < 0

      // 마지막 섹션에서 아래로 스크롤
      if (currentSection === sections.length - 1 && isScrollingDown) {
        return
      }

      // 첫 섹션에서 위로 스크롤
      if (currentSection === 0 && isScrollingUp) {
        return
      }

      e.preventDefault()
      setIsScrolling(true)

      // 다음 섹션으로 이동
      const nextSection = isScrollingDown ? currentSection + 1 : currentSection - 1
      const nextRef = sections[nextSection]

      if (nextRef?.current) {
        if (nextSection === 0) {
          // 첫 섹션으로 갈 때는 맨 위로 스크롤
          window.scrollTo({ top: 0, behavior: "smooth" })
        } else {
          // 다른 섹션으로 갈 때는 scrollIntoView 사용
          nextRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
        }
        setCurrentSection(nextSection)
      }

      // 스크롤 차단 해제
      setTimeout(() => {
        setIsScrolling(false)
      }, SCROLL_DELAY)
    }

    window.addEventListener("wheel", handleWheel, { passive: false })
    return () => window.removeEventListener("wheel", handleWheel)
  }, [currentSection, isScrolling, sections])

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
