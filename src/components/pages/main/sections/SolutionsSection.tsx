export function SolutionsSection() {
  const solutions = [
    {
      emoji: "💬",
      title: "anytalk",
      description: "기업 내 훌륭한\n메신저 솔루션",
    },
    {
      emoji: "📊",
      title: "OfficeON",
      description: "실시간 협업\n스마트 그룹웨어",
    },
    {
      emoji: "🏢",
      title: "아파트온",
      description: "주민과 아파트\n운영을 돕습니다",
    },
    {
      emoji: "📋",
      title: "조사 No.1",
      description: "공무원님들\n공공정보 솔루션",
    },
  ]

  return (
    <section className="h-screen relative flex items-center justify-center bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">솔루션</h2>
        <p className="text-gray-300 mb-12">
          새움소프트는 높은원칙은 존중하면서 경영하며 더 나은 내일을 위해 노력합니다.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="p-8 bg-blue-900/80 rounded-lg text-white hover:transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">{solution.emoji}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-sm opacity-90 whitespace-pre-line">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}