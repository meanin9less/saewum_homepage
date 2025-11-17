import { GlassCard } from "../../../ui/Card"

export function ValuesSection() {
  const values = [
    {
      title: "소프트웨어는\n쉽고 편리해야 한다.",
      description: "우리는 가장 쉬운 협업의 표준을 지켜 세상의 모든 고객이 쉽고 편리하게 이용할 수 있는 소프트웨어를 만듭니다.",
      image: "/img/main/valueSection/img_1.png",
    },
    {
      title: "우리가 먼저\n즐거워야 한다.",
      description: "새움소프트는 직원들이 좋아하는 일을 즐겁게 할 수 있도록 도우며, '우리가 즐겁지 않으면 만들지 않는다'의 마인드로 담아낸 제품을 선보입니다.",
      image: "/img/main/valueSection/img_2.png",
    },
    {
      title: "고객과 기술 약속은\n지켜져야 한다.",
      description: "새움소프트는 지난 20년 뿐만아니라 앞으로도 '기업의 좋은 문화를 담아낼 수 있는 소프트웨어를 만든다'는 약속을 지키기 위해 달려갈 것입니다.",
      image: "/img/main/valueSection/img_3.png",
    },
  ]

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-white py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 text-center w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">핵심 가치</h2>
        <p className="text-gray-600 mb-6 sm:mb-8 md:mb-12 text-xs sm:text-sm md:text-base px-2">
          새움소프트는 높은원칙은 존중하면서 경영하며 더 나은 내일을 위해 노력합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto place-items-center">
          {values.map((value, index) => (
            <GlassCard key={index} label="" r={index * 15 - 15}>
              <div className="flex flex-col items-center justify-center h-full px-2 sm:px-4 py-4 sm:py-8 md:py-10">
                <div className="mb-2 sm:mb-4 md:mb-6 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 flex items-center justify-center flex-shrink-0">
                  <img src={value.image} alt={value.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xs sm:text-sm md:text-lg font-bold text-black mb-2 sm:mb-3 md:mb-4 whitespace-pre-line">
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
