interface HeroSectionProps {
  currentSlide: number
  onSlideChange: (index: number) => void
}

const heroSlides = [
  {
    id: 1,
    heading: ["새로운", "움직임"],
    title: "소프트웨어를 향한 20년의 열정",
    description: "20년간의 독자적 기술력을 기반으로 최고의\n 솔루션과 서비스를 제공하는 소프트웨어 전문기업",
    image: "/img/main/herosection_img/slide1.png",
  },
  {
    id: 2,
    heading: ["새로운", "움직임"],
    title: "그룹웨어의 새로운 기준",
    description: "더 나은 기업문화와 협업의 표준을 선도하는\n 차세대 그룹웨어의 새로운 기준",
    image: "/img/main/herosection_img/slide2.png",
  },
  {
    id: 3,
    heading: ["새로운", "움직임"],
    title: "아파트 전자결재의 첫걸음",
    description: "투명한 아파트의 문서행정을 위한 전자결재 기반의\n 아파트전용 전자문서 클라우드 서비스",
    image: "/img/main/herosection_img/slide3.png",
  },
  {
    id: 4,
    heading: ["새로운", "움직임"],
    title: "기업 업무를 바꾸는 차세대 AI 솔루션",
    description: "기업 내 협업과 소통을 돕는 똑똑한 비서",
    image: "/img/main/herosection_img/slide4.png",
  },
]

export function HeroSection({ currentSlide, onSlideChange }: HeroSectionProps) {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      {/* Slide Container */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 bg-gray-900 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-white px-3 md:px-8 flex flex-col md:flex-row items-center justify-between h-full max-w-9xl mx-auto w-full pt-16 md:pt-24 lg:pt-32">
        {/* Left Section - Heading */}
        <div className="flex-1 mb-8 md:mb-0">
          <div className="flex flex-col justify-center items-center h-full">
            <div>
            {heroSlides[currentSlide].heading.map((text, index) => (
              <h1 key={index} className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight ${index > 0 ? "ml-4 sm:ml-8 md:ml-12 lg:ml-24" : "mb-0"}`}>
                <span className="text-cyan-400">{text.charAt(0)}</span>
                {text.slice(1)}
              </h1>
            ))}
            </div>
          </div>
        </div>

        {/* Right Section - Description */}
        <div className="flex-1 pl-0 md:pl-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 lg:mb-8">{heroSlides[currentSlide].title}</h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed whitespace-pre-line">{heroSlides[currentSlide].description}</p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 md:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}