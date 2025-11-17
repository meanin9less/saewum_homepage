import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function SolutionsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0)
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  const solutions = [
    {
      emoji: "💬",
      title: "anytalk",
      description: "기업 내 훌륭한\n메신저 솔루션",
      bgImage: "public/img/solution/anytalk_mock_2.png",
      path: "/solutions",
    },
    {
      emoji: "📊",
      title: "OfficeON",
      description: "실시간 협업\n스마트 그룹웨어",
      bgImage: "public/img/solution/officeon_bg1.png",
      path: "/solutions/officeon",
    },
    {
      emoji: "🏢",
      title: "아파트온",
      description: "주민과 아파트\n운영을 돕습니다",
      bgImage: "/img/main/solutions/apt123_main.jpg",
      path: "/solutions/apt123",
    },
    // {
    //   emoji: "📋",
    //   title: "조사 No.1",
    //   description: "공무원님들\n공공정보 솔루션",
    //   bgImage: "/img/main/solutions/4.jpg",
    // },
    // {
    //   emoji: "🚀",
    //   title: "Innovation Hub",
    //   description: "미래 기술 연구\n개발 플랫폼",
    //   bgImage: "/img/main/solutions/5.jpg",
    // },
    // {
    //   emoji: "🔐",
    //   title: "SecureFlow",
    //   description: "기업 보안\n관리 솔루션",
    //   bgImage: "/img/main/solutions/6.jpg",
    // },
    // {
    //   emoji: "❓",
    //   title: "문의하기",
    //   description: "더 알아보고\n싶으신가요?",
    //   bgImage: "/img/main/solutions/7.jpg",
    //   isContact: true,
    // },
  ]

  return (
    <section className="relative flex flex-col bg-white md:h-screen">
      <div className="flex flex-col md:flex-row gap-0 flex-1 w-full">
          {solutions.map((solution, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
              onClick={() => handleNavigate(solution.path)}
              className={`
                relative text-white overflow-hidden cursor-pointer
                transition-all duration-500 ease-out
                flex flex-col md:flex-col items-start md:items-center justify-start md:justify-center p-4 md:p-8
                w-full md:w-auto md:h-full
                ${hoveredIndex === index ? "md:flex-[5]" : "md:flex-1"}
              `}
              style={{
                backgroundImage: `url("${solution.bgImage}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className={`absolute inset-0 transition-all duration-500 bg-black/50 ${hoveredIndex === index ? "md:bg-black/0" : ""}`}></div>
              <div className="relative z-10 w-full flex flex-col items-start justify-start md:items-start">
                {/* <div className="hidden md:flex w-16 h-16 mb-4 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{solution.emoji}</span>
                </div> */}
                <div className="flex flex-col md:flex-col gap-2 justify-start w-full md:justify-start md:items-start">
                  <h3 className="text-lg md:text-xl font-bold md:mb-2 whitespace-nowrap">
                    {solution.title}
                  </h3>
                  <p className="text-xs md:text-sm opacity-90 whitespace-pre-line line-clamp-2 md:line-clamp-none">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}