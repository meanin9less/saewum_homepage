export function ValuesSection() {
  const values = [
    {
      title: "소프트웨어라는\n완전 변화에만 한다.",
      description: "투자와 거듭 수정 혁신을 거쳐 업종별 시스템을 구축, 변화를 가능 주도합니다",
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      ),
    },
    {
      title: "우리가 만지\n올리면이 된다.",
      description: "올리면은 설립 목적부터 각 주목 문제를 더 깊이 이해 형상화합니다",
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "고객과 기술 역량\n저하되는 한다.",
      description: "끊임없이 혁신만의 기대한 축적 토대를 바탕으로 고객서의 목표로 시스템을 민첩히 대응",
      icon: (
        <svg className="w-16 h-16 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-4.05-1-7-5.16-7-9.5V8.59l7-3.11 7 3.11V11c0 4.34-2.95 8.5-7 9.5z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="h-screen relative flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">핵심 가치</h2>
        <p className="text-gray-600 mb-12">
          새움소프트는 높은원칙은 존중하면서 경영하며 더 나은 내일을 위해 노력합니다.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 border border-blue-200 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold mb-4 text-blue-600 whitespace-pre-line">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
