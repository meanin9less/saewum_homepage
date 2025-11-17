import { GlassCard } from "../../../ui/Card"

export function ValuesSection() {
  const values = [
    {
      title: "소프트웨어는\n쉽고 편리해야 한다.",
      description: "우리는 가장 쉬운 협업의 표준을 지켜 세상의 모든 고객이 쉽고 편리하게 이용할 수 있는 소프트웨어를 만듭니다.",
      icon: (
        <svg className="w-12 sm:w-16 h-12 sm:h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
    },
    {
      title: "우리가 먼저\n즐거워야 한다.",
      description: "새움소프트는 직원들이 좋아하는 일을 즐겁게 할 수 있도록 도우며, '우리가 즐겁지 않으면 만들지 않는다'의 마인드로 담아낸 제품을 선보입니다.",
      icon: (
        <svg className="w-12 sm:w-16 h-12 sm:h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "고객과 기술 약속은\n지켜져야 한다.",
      description: "새움소프트는 지난 20년 뿐만아니라 앞으로도 '기업의 좋은 문화를 담아낼 수 있는 소프트웨어를 만든다'는 약속을 지키기 위해 달려갈 것입니다.",
      icon: (
        <svg className="w-12 sm:w-16 h-12 sm:h-16 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-4.05-1-7-5.16-7-9.5V8.59l7-3.11 7 3.11V11c0 4.34-2.95 8.5-7 9.5z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-center w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">핵심 가치</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base px-2">
          새움소프트는 높은원칙은 존중하면서 경영하며 더 나은 내일을 위해 노력합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto place-items-center">
          {values.map((value, index) => (
            <GlassCard key={index} label="" r={index * 15 - 15}>
              <div className="flex flex-col items-center justify-center h-full px-2 sm:px-4 py-4 sm:py-6">
                <div className="mb-2 sm:mb-3 w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-black mb-2 sm:mb-3 whitespace-pre-line">
                  {value.title}
                </h3>
                <p className="hidden md:block text-xs md:text-sm text-black leading-relaxed">
                  {value.description}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
