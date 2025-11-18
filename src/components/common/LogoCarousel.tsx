import { useEffect, useRef, useState } from 'react'

interface LogoCarouselProps {
  logos: string[] // 로고 이미지 경로 배열
  title?: string // 섹션 제목
  className?: string // 커스텀 클래스
  speed?: number // 애니메이션 속도 (초)
}

export function LogoCarousel({
  logos,
  title,
  className = '',
  speed = 30
}: LogoCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    // CSS 애니메이션 정의
    const style = document.createElement('style')
    const animationName = `scroll-logos-${speed}`
    style.textContent = `
      @keyframes ${animationName} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-25%);
        }
      }
      .logo-carousel-track {
        animation: ${animationName} ${speed}s linear infinite;
        will-change: transform;
      }
      .logo-carousel-track.dragging {
        animation: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [speed])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setScrollLeft(trackRef.current?.scrollLeft || 0)
    if (trackRef.current) {
      trackRef.current.classList.add('dragging')
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return
    const x = e.pageX - startX
    trackRef.current.scrollLeft = scrollLeft - x
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    if (trackRef.current) {
      trackRef.current.classList.remove('dragging')
    }
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      if (trackRef.current) {
        trackRef.current.classList.remove('dragging')
      }
    }
  }

  // 부드러운 무한 루프를 위해 로고 배열 4배 복제
  const duplicatedLogos = Array(4).fill([...logos]).flat()

  return (
    <div className={`w-full bg-white py-8 sm:py-12 md:py-16 overflow-hidden ${className}`}>
      {title && (
        <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-12 text-gray-800">
          {title}
        </h3>
      )}

      <div
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={trackRef}
          className="logo-carousel-track flex gap-4 sm:gap-6 md:gap-8"
          style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-12 sm:h-14 md:h-16 flex items-center justify-center select-none"
              draggable={false}
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="h-full object-contain px-2 sm:px-3 pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}