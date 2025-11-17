import { PageBanner } from "../../common/PageBanner"

export default function AnytalkPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="anytalk"
        description="기업의 업무 지식을 스마트하게 관리하고 모든 정보들이 쉽고 빠르게 개발순환 정보로 버팀목으로 소통할 수 있게 만든 AI 챗봇입니다."
        backgroundImage="/img/page_Banner_img/common_background_solution.png"
        contentImage="/img/solution/anytalkLogo.png"
      />

      <div className="bg-teal-50 py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
            기업의 업무 지식을 스마트하게 관리하고 모든 직원들이 쉽고 빠르게 필요한 정보를 바탕으로 소통할 수 있게 만드는 AI 챗봇입니다.
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm sm:text-base">
            자세히 알아보기 →
          </button>
        </div>
      </div>

      <div className="py-4 sm:py-6 md:py-8 flex flex-col items-center justify-center max-w-2xl mx-auto px-3 sm:px-4">
        <img src="/img/solution/anytalkLogoColor.png" alt="anytalk" className="h-24 sm:h-32 md:h-40 object-contain mb-2 sm:mb-3" />
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-teal-600 text-center">기업 전용 차세대 생성형 AI챗봇 서비스</p>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <img src="/img/solution/anytalk_mock_2.png" alt="anytalk" className="w-full h-32 sm:h-48 md:h-[28rem] object-contain rounded-lg shadow-lg" />
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
            애니톡은 복잡하고 비합리적인 AI 서비스를<br />
            혁신하기 위해 출발했습니다.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            { title: "다양한 데이터 타입\n자동분석" },
            { title: "다국어\n지원" },
            { title: "조직 특화\n권한 관리" },
            { title: "맞춤형 B2B\n설계 가능" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl p-4 sm:p-6 md:p-8 text-center hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out shadow-lg"
            >
              <h3 className="text-sm sm:text-base md:text-xl font-bold text-white whitespace-pre-line">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12">Main Service</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {[
            {
              title: "유연 지식 대화형 AI 성장",
              items: [
                "실시간 유연한 자연어 처리 및 지식 관리 기능",
                "전문가 선택적 지식 학습 및 자사화 기능",
                "자동적 지식 학습 및 구성 기능",
                "지식 검증 및 업데이트 기능",
              ],
              image: "/img/solution/anytalk_example_1.png",
            },
            {
              title: "B2B 연계 AI 플랫폼",
              items: [
                "B2B 시스템 연동 기능",
                "실시간 정보 추출 및 분석 기능",
                "다중화 인터페이스 지원 기능",
                "API/DB 워크 플로우 자동화 기능",
              ],
              image: "/img/solution/anytalk_example_2.png",
            },
            {
              title: "로봇 응답 대화 기능 엔진",
              items: [
                "지능형 프로젝트 인터페이스",
                "다중 언어 표준화 기능",
                "AI 정보 통합 시스템",
                "통합 디바이스 출력양 관리",
              ],
              image: "/img/solution/anytalk_example_3.png",
            },
            {
              title: "키오스크 AI 메뉴 추천",
              items: [
                "다양한 추천 가이드 기능",
                "멀티모달 지원 기능",
                "비대면 결제 및 영수증 관리",
                "시간 유형별로 최적 검색 안내 기능",
              ],
              image: "/img/solution/anytalk_example_4.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 px-3 sm:px-4 py-3 sm:py-4 flex-shrink-0 flex items-center justify-center bg-white">
                <div className="w-full h-32 sm:h-40 md:h-auto bg-white rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="px-4 sm:px-6 py-4 sm:py-6 w-full md:w-1/2 flex flex-col justify-center bg-white">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-teal-600 mb-2 sm:mb-3">{item.title}</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="flex items-start text-xs sm:text-sm md:text-sm text-gray-600">
                      <span className="text-teal-600 mr-2 flex-shrink-0">•</span>
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
