import { PageBanner } from "../../common/PageBanner"

export default function JosaPage() {
  return (
    <div className="pt-48 min-h-screen bg-gray-50">
      <PageBanner title="조사 No.1" description="공공성도 토탈플랫폼" gradientFrom="from-orange-600" gradientTo="to-red-600" backgroundImage="/img/page_Banner_img/common_background_solution.png" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 mb-6">
            우리 지자체의 시민업 만연에 확리업 위한 공공성 슬루션을
            <br />
            사범업서 협용모서 편석을 또외고 조사업서의 완자업률 제시업합니다.
          </p>
          <button className="px-6 py-2 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 font-bold">
            바로가기 →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img src="/government-office-survey-system.jpg" alt="Josa System" className="rounded-lg shadow-lg bg-gray-200" />
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-3xl">👤</span>
              </div>
              <h2 className="text-3xl font-bold">
                <span className="bg-orange-600 text-white px-3 py-1 rounded">조사</span> No.1
              </h2>
            </div>
            <p className="text-xl text-gray-700">투명한 아파트 전자통신의 기준 클라우드 서비스</p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">모바일 행정조사</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "현장방세 대외의 소경제",
                items: ["현행업 소전보업", "모바일 대응", "실시업 수정"],
              },
              {
                title: "업전업 대외의 온경제 관리",
                items: ["업전업 소전보업", "보업 모업업", "체계 업세 업전업"],
              },
              {
                title: "간담시업 지옥으면 관석업",
                items: ["업공 서식업", "워스업", "관대 추정"],
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-orange-600">
                <div className="w-24 h-24 bg-orange-500 rounded-lg mx-auto mb-6 flex items-center justify-center text-white">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-center mb-4 text-orange-700">{feature.title}</h4>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <span className="text-orange-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "공중 현업 대화입 AI 성경",
              items: [
                "공업업 AI 업경업",
                "기업업 수 있는 업업",
                "기업 산업 수 확인 기능",
                "AI로 업업 수 업업대업 기능",
              ],
              image: "/ai-chat-interface.png",
            },
            {
              title: "B2B 업경 AI 플랫폼",
              items: [
                "B2B 시스업 업업 기능",
                "실시업 멀티 모대업 및 부업 기능",
                "다출업 인터페업스 처업 기능",
                "AI시업실 플업입업 수업 기능",
              ],
              image: "/b2b-platform-dashboard.jpg",
            },
          ].map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold mb-4 text-orange-600">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-orange-600 mr-2">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "모업 종업 대화입 AI 입경",
              items: [
                "시업늘 프로웨전 업대업업",
                "다출업 입대 업경입 기능",
                "AI 의사선 업응 시스업",
                "승업 대업업 출업업 관업",
              ],
            },
            {
              title: "기업수업 AI 업종 승업",
              items: [
                "다연업 소호 기업 기능",
                "관대업 결부 수 대면 기능",
                "업대업 공업 업 에수 승업",
                "AI로 관업업 입시 업대 기지",
              ],
            },
            {
              title: "기업수업 AI 업종 승업",
              items: [
                "업업 수호 기업업 기능",
                "업대업 자업 기업 기능",
                "업대업 관업 업 에수 승업",
                "AI로 업업업 입시 업대 기지",
              ],
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-bold mb-3 text-orange-700">{feature.title}</h4>
              <ul className="space-y-1 text-sm">
                {feature.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">진흥한 보업 홍업</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <img src="/government-office-meeting.png" alt="Training" className="rounded-lg shadow-lg bg-gray-200" />
            <img src="/government-office-training.jpg" alt="Meeting" className="rounded-lg shadow-lg bg-gray-200" />
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>서울시업 5개 1개 자치구 등 입워업</p>
            <div className="grid grid-cols-4 gap-4 mt-6">
              {["2022년", "2021년", "2020년", "2009년"].map((year, i) => (
                <div key={i} className="bg-white p-4 rounded shadow">
                  <p className="font-bold text-orange-600">{year}</p>
                  <p className="text-xs mt-2">업체업 협대업 업업도 등업</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
