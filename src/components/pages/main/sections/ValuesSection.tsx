import { useEffect, useRef, useState } from "react"

export function ValuesSection() {
  const values = [
    {
      keyword: "CONVENIENCE.",
      description: "우리는 가장 쉬운 협업의 표준을 지켜 세상의 모든 고객이 쉽고 편리하게 이용할 수 있는 소프트웨어를 만듭니다.",
    },
    {
      keyword: "FUN.",
      description: "새움소프트는 직원들이 좋아하는 일을 즐겁게 할 수 있도록 도우며, '우리가 즐겁지 않으면 만들지 않는다'의 마인드로 담아낸 제품을 선보입니다.",
    },
    {
      keyword: "PROMISE.",
      description: "새움소프트는 지난 20년 뿐만아니라 앞으로도 '기업의 좋은 문화를 담아낼 수 있는 소프트웨어를 만든다'는 약속을 지키기 위해 달려갈 것입니다.",
    },
  ]

  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])

  useEffect(() => {
    // CSS 애니메이션 정의 추가
    const style = document.createElement("style")
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes underlineExpand {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
      }

      .keyword-underline {
        position: relative;
        display: inline-block;
      }

      .keyword-underline::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 100px;
        height: 6px;
        background: #3B82F6;
        animation: underlineExpand 0.8s ease-out 0.2s forwards;
      }

    `
    document.head.appendChild(style)

    // Intersection Observer 설정
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleItems((prev) => {
              const newState = [...prev]
              newState[index] = entry.isIntersecting
              return newState
            })
          }
        })
      },
      {
        threshold: 0.3,
      }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <section className="w-full bg-white">
      {/* 섹션 제목 */}
      <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">핵심 가치</h2>
        <p className="text-sm sm:text-base text-gray-600">
          새움소프트는 늘 끊임없는 도전의식과 열정으로 더 나은 내일을 위해 노력합니다.
        </p>
      </div>

      {/* Values 아이템들 */}
      <div className="space-y-0">
        {values.map((value, index) => (
          <div
            key={index}
            ref={(el) => {
              itemRefs.current[index] = el
            }}
            className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 transition-opacity duration-700 ${
              visibleItems[index] ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{
              backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F9FAFB",
            }}
          >
            {/* 모바일 레이아웃 (세로 배치) */}
            <div className="md:hidden w-full max-w-2xl mobile-content">
              <div className="text-center space-y-6">
                <h3 className="keyword-underline text-5xl sm:text-6xl font-black text-gray-800">
                  {value.keyword}
                </h3>
                <p className="text-lg sm:text-xl text-black leading-relaxed font-semibold">
                  {value.description}
                </p>
              </div>
            </div>

            {/* 데스크톱 레이아웃 (좌우 배치) */}
            <div className="hidden md:flex items-center w-full gap-0 desktop-content">
              {/* 좌측: 키워드 (50%) */}
              <div className="w-1/2 flex items-center justify-center px-8 lg:px-12">
                <h3 className="keyword-underline text-6xl lg:text-7xl xl:text-8xl font-black text-gray-800 leading-tight text-center">
                  {value.keyword}
                </h3>
              </div>

              {/* 우측: 설명 (50%) */}
              <div className="w-1/2 flex items-center justify-center px-8 lg:px-12">
                <p className="text-lg lg:text-xl text-black leading-relaxed text-center font-semibold">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
