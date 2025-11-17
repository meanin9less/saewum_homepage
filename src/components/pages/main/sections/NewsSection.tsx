import { newsData } from "../../../../data/company/newsData"

export function NewsSection() {
  const news = newsData.slice(0, 5)

  return (
    <section className="min-h-screen relative flex items-center justify-center bg-white py-12 md:py-0">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 w-full">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">최신 뉴스</h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600">새움소프트의 최신 소식을 확인하세요</p>
        </div>

        <div className="space-y-2 md:space-y-4 max-w-4xl mx-auto">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white border-b border-gray-300 p-3 md:p-4 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between gap-2 md:gap-4"
            >
              <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                <span
                  className={`px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap min-w-[70px] md:min-w-[88px] text-center flex-shrink-0 ${
                    item.type === "보도자료"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {item.type}
                </span>
                <p className="text-xs sm:text-sm md:text-base text-gray-800 truncate">{item.title}</p>
              </div>
              <span className="hidden md:block text-gray-500 text-xs md:text-sm whitespace-nowrap flex-shrink-0">{item.date}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <button className="px-4 md:px-6 py-2 text-xs md:text-sm border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
            더 알아보기 →
          </button>
        </div>
      </div>
    </section>
  )
}
