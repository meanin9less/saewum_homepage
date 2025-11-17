import { PageBanner } from "../../common/PageBanner"
import { newsData } from "../../../data/company/newsData"

export default function NewsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="회사소식" description="새움소프트의 최신 뉴스와 소식을 확인하세요" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-4xl mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">회사 소식</h2>

        <div className="space-y-4">
          {newsData.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-b border-gray-300 p-4 sm:p-6 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                <div className="flex items-center gap-2 sm:gap-4">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-bold whitespace-nowrap min-w-[75px] sm:min-w-[88px] text-center ${
                      item.type === "보도자료"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {item.type}
                  </span>
                  <p className="text-gray-800 text-xs sm:text-sm md:text-base">{item.title}</p>
                </div>
                <span className="hidden sm:inline text-gray-500 text-xs sm:text-sm">{item.date}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
            더 알아보기 →
          </button>
        </div>
      </div>
    </div>
  )
}
