import { PageBanner } from "../../common/PageBanner"

export default function OfficeONPage() {
  return (
    <div className="pt-48 min-h-screen">
      <PageBanner
        title="OfficeON"
        description="언제 어디서나 협업을 통한 업무 생산성을 향상시킬 수 있는 구축형 그룹웨어입니다."
        backgroundImage="/img/page_Banner_img/common_background_solution.png"
        contentImage="/img/solution/officeonLogo.png"
      />

      <div className="bg-blue-50 py-12 border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-6">
            언제 어디서나 협업을 통한 업무 생산성을 향상시킬수 있는 구축형 그룹웨어입니다.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            자세히 알아보기 →
          </button>
        </div>
      </div>

      <div className="py-12 flex items-center justify-center">
        <img src="/img/solution/officeonLogoColor.png" alt="officeon" className="h-48 w-48 object-contain" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl font-bold mb-2">
              <span className="text-blue-600">Office</span>
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full">ON</span>
            </h2>
            <p className="text-xl text-gray-600">실시간 협업의 전버전스 그룹웨어</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img src="/ai-chatbot-interface-laptop-mobile.jpg" alt="OfficeON" className="rounded-lg shadow-lg" />
          <div>
            <p className="text-lg text-gray-700 mb-6">
              오피스 3.0은 기업 그룹웨어의 기능을 실시간 협업과 컨텐츠관리솔루션을 통합으로서한 업무를 신뢰를 더합니다.
            </p>
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔄</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12">언제 어디서나 편리한 기능</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📧",
                title: "메일",
                desc: "메일 관리하여 신뢰성을 높입니다.",
                items: ["메일 관리화", "실시간 소통", "모바일 대응"],
              },
              {
                icon: "👥",
                title: "주소록",
                desc: "통합 주 있는 실무관리를 합니다.",
                items: ["주소록 조회", "조직도 관리", "외부 주소"],
              },
              {
                icon: "📅",
                title: "일정관리",
                desc: "일정과 전체 협업을 구성합니다.",
                items: ["개인 일정", "공유 일정", "알림 설정"],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-center mb-2 text-blue-700">{feature.title}</h4>
                <p className="text-sm text-gray-600 text-center mb-4">{feature.desc}</p>
                <ul className="space-y-1 text-sm">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "👨‍👩‍👧‍👦", title: "커뮤니티", desc: "게시판을 만들어 구성원 간의 소통을 할 수 있습니다." },
            {
              icon: "📁",
              title: "파일 드라이브",
              desc: "내 PC와 스마트폰의 파일들을 클라우드에 백업하며업 관리합니다.",
            },
            { icon: "✍️", title: "전자결재", desc: "체계적인 의사결정을 위한 구성원의 승인을 공유" },
            { icon: "📱", title: "모바일", desc: "언제 어디서나 업무 지능적 관리를 모바일(Android, iOS 모두지원)" },
            {
              icon: "🔄",
              title: "컨버전스",
              desc: "중요한 주소, 일정, 메일, 채팅, 결재서류 등 하나의 계정안에 모든 것",
            },
            {
              icon: "🔍",
              title: "멀티포탈",
              desc: "워크 스테이션, 포렌식 및, 각자의 작업공간을 개시 수 있도록 제시합니다.",
            },
            {
              icon: "💬",
              title: "메신저",
              desc: "언제 어디서나 모든 조직에서 지원하는 실시 간 기업용 커뮤니케이션 도구",
            },
            {
              icon: "🖥️",
              title: "기록 포텐노",
              desc: "기업 단위를 바탕으로 투자 / 조직재건로 템플릿 수 있도록, 제시합니다",
            },
            {
              icon: "↔️",
              title: "타임라인",
              desc: "내가 업수 또는 협트를 하는 모든 업무를 개 획득 수 있도록 제시합니다.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h4 className="font-bold mb-2 text-blue-700">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
