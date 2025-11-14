import { PageBanner } from "../../common/PageBanner"

export default function NewsPage() {
  const news = [
    {
      type: "보도자료",
      title: "서울대구 부산인천 주요 5개 문체 총점은 JVM, 업계의 순위내이슈 하남 수도",
      date: "2023-12-29",
    },
    {
      type: "새소식",
      title: "새움소프트는 업성의 시사위 가상화 문제 주요",
      date: "2023-09-01",
    },
    {
      type: "새소식",
      title: "음중 모오 애당 중임금 소개나s, 공업도중체안성 서울협의 연하",
      date: "2024-06-11",
    },
    {
      type: "보도자료",
      title: "서울시청 , 공중개납 소중성의 5-slot 업체 총업",
      date: "2024-09-21",
    },
    {
      type: "새소식",
      title: "지도찾아산의 업식시, 중소시업가기업의 정보산업 업식 재식",
      date: "2022-12-18",
    },
    {
      type: "보도자료",
      title: "긴공민, 업신 문제정보총 등 조화업 시스업 업태 재식",
      date: "2024-11-11",
    },
    {
      type: "새소식",
      title: "서울시, 아업내 전자결재 가업 안연식 운화업서 소식업 부식 업출해봄업 주득업 재원",
      date: "2020-09-01",
    },
  ]

  return (
    <div className="pt-48 min-h-screen bg-gray-50">
      <PageBanner title="회사소식" description="새움소프트의 최신 뉴스와 소식을 확인하세요" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">회사 소식</h2>

        <div className="space-y-4">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white border-b border-gray-300 p-6 hover:shadow-md transition-shadow cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 rounded-lg text-sm font-bold whitespace-nowrap min-w-[88px] text-center ${
                    item.type === "보도자료"
                      ? "bg-yellow-100 text-yellow-800"
                      : item.type === "새소식"
                        ? "bg-blue-100 text-blue-800"
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
