import { PageBanner } from "../../common/PageBanner"
import { newsData } from "../../../data/company/newsData"

export default function NewsPage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="회사소식" description="새움소프트의 최신 뉴스와 소식을 확인하세요" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">회사 소식</h2>

        <div className="space-y-4">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="bg-white border-b border-gray-300 p-6 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between"
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
                <p className="text-gray-800">{item.title}</p>
              </div>
              <span className="text-gray-500 text-sm">{item.date}</span>
            </div>
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
