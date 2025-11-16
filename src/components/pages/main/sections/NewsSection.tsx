import { newsData } from "../../../../data/company/newsData"

export function NewsSection() {
  const news = newsData.slice(0, 5)

  return (
    <section className="h-screen relative flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">최신 뉴스</h2>
          <p className="text-gray-600">새움소프트의 최신 소식을 확인하세요</p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white border-b border-gray-300 p-4 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap min-w-[88px] text-center ${
                    item.type === "보도자료"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {item.type}
                </span>
                <p className="text-gray-800 text-sm md:text-base">{item.title}</p>
              </div>
              <span className="text-gray-500 text-xs md:text-sm ml-4 whitespace-nowrap">{item.date}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors">
            더 알아보기 →
          </button>
        </div>
      </div>
    </section>
  )
}
