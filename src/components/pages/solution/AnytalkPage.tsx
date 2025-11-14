import { PageBanner } from "../../common/PageBanner"

export default function AnytalkPage() {
  return (
    <div className="pt-48 min-h-screen">
      <PageBanner
        title="anytalk"
        description="기업의 업무 지식을 스마트하게 관리하고 모든 정보들이 쉽고 빠르게 개발순환 정보로 버팀목으로 소통할 수 있게 만든 AI 챗봇입니다."
        gradientFrom="from-green-600"
        gradientTo="to-teal-600"
        backgroundImage="/img/page_Banner_img/common_background_solution.png"
      />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full text-3xl font-bold mb-8">
            anytalk
          </div>
          <h2 className="text-2xl font-bold text-teal-600 mb-4">기업 전용 차세대 생성형 AI챗봇 서비스</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img src="/ai-chatbot-interface-on-devices.jpg" alt="Anytalk" className="rounded-lg shadow-lg" />
          <div>
            <p className="text-xl leading-relaxed">
              애니톡은 복잡하고 비밀리적인 AI 서비스를
              <br />
              혁신하기 위해 출발했습니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { title: "다양한 데이터 타입 자동분석", icon: "📊" },
            { title: "다국어 지원", icon: "🌐" },
            { title: "조직 특화 관한 관리", icon: "🔒" },
            { title: "맞춤형 B2B 생각 가능", icon: "🎯" },
          ].map((item, index) => (
            <div key={index} className="bg-teal-500 text-white p-6 rounded-lg text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-bold">{item.title}</h3>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold mb-8 text-center">Main Service</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "유연 지식 대화형 AI 생성",
                items: ["실시간 반응과 자동의 학습 및 보정 기능", "과거 질의 기록 학습 및 개선"],
              },
              {
                title: "B2B 업계 AI 플랫폼",
                items: ["B2B 시스템 전용 기능", "실시간 멀티 모델 및 부서 기능"],
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4 text-teal-600">{service.title}</h4>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
