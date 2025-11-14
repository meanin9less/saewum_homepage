import { Search } from "lucide-react"

interface HeroSectionProps {
  currentSlide: number
  onSlideChange: (index: number) => void
}

const heroSlides = [
  {
    id: 1,
    title: "새로운",
    subtitle: "움직임",
    description: "기업 업무를 바꾸는\n차세대 AI 솔루션\n1가지 내 할일까지 소통을 돕는 독특한 비서",
    image: "/img/main/herosection_img/slide1.png",
  },
  {
    id: 2,
    title: "새로운",
    subtitle: "움직임",
    description: "변화를 선도하는\n기술력으로\n미래를 만들어갑니다",
    image: "/img/main/herosection_img/slide2.png",
  },
  {
    id: 3,
    title: "새로운",
    subtitle: "움직임",
    description: "고객 중심의\n솔루션으로\n성공을 함께합니다",
    image: "/img/main/herosection_img/slide3.png",
  },
  {
    id: 4,
    title: "새로운",
    subtitle: "움직임",
    description: "세계 시장으로\n나아가는\n새움소프트입니다",
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
      <div className="relative z-10 text-center text-white px-4 flex flex-col items-center justify-center h-full">
        <p className="text-sm mb-4">새로운 시대를 여는 첫걸음, 당신에게만 드립니다.</p>
        <h1 className="text-6xl font-bold mb-2">
          <span className="text-cyan-400">{heroSlides[currentSlide].title.charAt(0)}</span>
          {heroSlides[currentSlide].title.slice(1)}
        </h1>
        <h1 className="text-6xl font-bold mb-4">
          <span className="text-cyan-400">{heroSlides[currentSlide].subtitle.charAt(0)}</span>
          {heroSlides[currentSlide].subtitle.slice(1)}
        </h1>
        <p className="text-xl mb-8 whitespace-pre-line h-24 flex items-center">{heroSlides[currentSlide].description}</p>
      </div>

      {/* Search Bar Container */}
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-3xl px-4">
        <div className="flex gap-2 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <input
            placeholder="제품,서비스,인물 또는 정보에대해 궁금하신것이 있으신가요?"
            className="flex-1 px-4 py-2 bg-transparent text-gray-800 border-0 outline-none"
          />
          <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 flex-shrink-0">
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideChange(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>


      {/* 챗봇 아이콘 */}
      {/* User Menu
      <div className="absolute right-8 bottom-8 flex flex-col gap-4 z-20">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100">
          <span className="text-sm">👤</span>
        </div>
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300">
          <span className="text-sm">TOP</span>
        </div>
      </div> */}
    </section>
  )
}