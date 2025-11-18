import { useEffect, useMemo, useRef, useState } from 'react'

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
  speed = 18
}: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const effectiveSpeed = Math.max(8, speed)
  const animationClassName = useMemo(() => `logo-carousel-track-${String(effectiveSpeed).replace('.', '-')}`, [effectiveSpeed])
  const containerClassName = 'logo-carousel-scroller'

  useEffect(() => {
    // CSS 애니메이션 정의
    const style = document.createElement('style')
    const animationName = `${animationClassName}-scroll`
    style.textContent = `
      @keyframes ${animationName} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .${animationClassName} {
        animation: ${animationName} ${effectiveSpeed}s linear infinite;
        will-change: transform;
      }
      .${animationClassName}.dragging {
        animation: none !important;
      }
      .${containerClassName} {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .${containerClassName}::-webkit-scrollbar {
        display: none;
      }
    `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [animationClassName, effectiveSpeed])

  useEffect(() => {
    const handleWindowUp = () => setIsDragging(false)
    window.addEventListener('mouseup', handleWindowUp)
    window.addEventListener('touchend', handleWindowUp)
    return () => {
      window.removeEventListener('mouseup', handleWindowUp)
      window.removeEventListener('touchend', handleWindowUp)
    }
  }, [])

  const startDrag = (clientX: number) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(clientX)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const onPointerMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return
    const x = clientX - startX
    containerRef.current.scrollLeft = scrollLeft - x
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    startDrag(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    onPointerMove(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    if (!touch) return
    startDrag(touch.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const touch = e.touches[0]
    if (!touch) return
    onPointerMove(touch.clientX)
  }

  const handleInteractionEnd = () => {
    setIsDragging(false)
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

      <div className="relative w-full overflow-hidden">
        <div
          ref={containerRef}
          className={`${containerClassName} w-full overflow-x-scroll cursor-grab active:cursor-grabbing select-none`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleInteractionEnd}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleInteractionEnd}
        >
          <div
            className={`${animationClassName} ${isDragging ? 'dragging' : ''} flex gap-4 sm:gap-6 md:gap-8`}
            style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-12 sm:h-14 md:h-16 flex items-center justify-center pointer-events-none"
                draggable={false}
              >
                <img
                  src={logo}
                  alt={`logo-${index}`}
                  className="h-full object-contain px-2 sm:px-3"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
