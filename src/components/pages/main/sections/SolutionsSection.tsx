import { useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"

export function SolutionsSection() {
  const navigate = useNavigate()
  const [visibleSolutions, setVisibleSolutions] = useState<boolean[]>([false, false, false])
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([null, null, null])

  useEffect(() => {
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

      .solution-text-visible {
        animation: fadeInUp 0.8s ease-out forwards;
      }
    `
    document.head.appendChild(style)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = solutionRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleSolutions((prev) => {
              const newState = [...prev]
              newState[index] = entry.isIntersecting
              return newState
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    solutionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      solutionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      observer.disconnect()
      document.head.removeChild(style)
    }
  }, [])

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  const solutions = [
    {
      title: "기업 전용 차세대 생성형 AI챗봇 서비스 anytalk",
      description: "기업의 업무 지식을 스마트하게 관리하고 모든 직원들이 쉽고 빠르게 필요한 정보를 바탕으로 소통할 수 있게 만드는 AI 챗봇입니다.",
      bgImage: "/img/main/solutions/anytalk_robot.png",
      logo: "/img/solution/anytalkLogoColor.png",
      path: "/solutions",
    },
    {
      title: "실시간 협업의 컨버젼스 그룹웨어 OfficeON",
      description: "언제 어디서나 협업을 통한 업무 생산성을 향상시킬수 있는 구축형 그룹웨어입니다.",
      bgImage: "public/img/main/solutions/officeon_background0.png",
      logo: "/img/solution/officeonLogoColor.png",
      path: "/solutions/officeon",
    },
    {
      title: "투명한 아파트 전사문서의 기준 클라우드 서비스 아파트123",
      description: "다년간의 서비스로 축적된 기술과 노하우로 아파트관리소에서 꼭 필요한 기능으로만 구성된 아파트 문서행정 시스템",
      bgImage: "/img/main/solutions/apt123_main.jpg",
      logo: "/img/solution/apt123/apart123Logo.png",
      path: "/solutions/apt123",
    },
  ]

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col gap-0">
        {solutions.map((solution, index) => {
          // 두 번째 항목(index === 1)은 순서를 반대로
          const isReversed = index === 1

          return (
            <div
              key={index}
              onClick={() => handleNavigate(solution.path)}
              className={`w-full min-h-screen flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-stretch cursor-pointer hover:opacity-90 transition-opacity duration-300`}
            >
              {/* 이미지 영역 */}
              <div
                className="w-full md:w-1/2 h-64 md:h-screen"
                style={{
                  backgroundImage: `url("${solution.bgImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* 텍스트 영역 */}
              <div
                ref={(el) => {
                  solutionRefs.current[index] = el
                }}
                className={`w-full md:w-1/2 h-auto md:h-screen flex items-center justify-center p-6 md:p-12 bg-white ${
                  visibleSolutions[index] ? "solution-text-visible" : "opacity-0"
                }`}
              >
                <div className="max-w-md w-full flex flex-col gap-6">
                  <div className="mb-4 w-40 sm:w-48">
                    <img src={solution.logo} alt={`${solution.title} logo`} className="w-full h-auto object-contain" />
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                      {solution.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                  </div>
                  <button className="inline-block text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                    자세히 알아보기 →
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
