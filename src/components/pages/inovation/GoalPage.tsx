import { PageBanner } from "../../common/PageBanner"

export default function GoalPage() {
  return (
    <div>
      <PageBanner title="나아가는 방향" description="새움소프트는 늘 경험업은 축적업으로 더 나은 경영업을 위해 노력합니다" backgroundImage="/img/page_Banner_img/common_background_inno.png" />
      <section className="text-center mb-16 mt-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          기업의 질을 향상시키기 위한 제품과 서비스를 제공함으로서 
        </h2>
        <p className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
          자랑스러운 기업이 되도록 노력합니다.
        </p>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/img/innovation/goal_1_1.jpg" alt="기업 협업" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">기업 협업을 위한 깊은 혁신</h3>
            <div className="w-16 h-1 bg-blue-600 mb-6" />
            <p className="text-gray-600 leading-relaxed">
              모든 새움소프트의 기능들은 단순한 약속을 제공합니다. 기업이 소통하고 즐겁게 업무를 하는 것 입니다. 새움소프트는 기업인프라로서 가장 보안성이 높은 스트레스상황에 대해 견디게끔 만듭니다. 그리고 우리는 업계 최고의 품질보증을 하며 FCA(Full Cycle Angel)정책으로 2005년도에 만들어진 최초 버젼까지도 보증합니다. 이렇게 오랫동안 기업소통이라는 분야에서 연구하고 구현하는 일에는 많은 것들이 필요합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">사용자들의 편의성을 고려한 최고의 기술력</h3>
              <div className="w-16 h-1 bg-blue-600 mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                훌륭한 편의성과 디자인, 정확하고 혁신적인 기술과 연계되어야 하며, 통일 좋은 보안과 성능, 기능간의 반응하는 유연함, 그리고 사용자들이 필요한 사용하고 있는 서비스를 구현해야 합니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                새음소프트는 이 모든 것들을 소중하고 있습니다. 추가로 모든 것들은 이러한 것은 새음소프트가 만드는 모든 서비스 모듈들은 전체 대스트가 대행됩니다.
              </p>
            </div>
            <div>
              <img src="/img/innovation/goal_2_1.jpg" alt="기술력" className="w-full h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/img/innovation/goal_3_1.jpg" alt="기업소통" className="w-full h-64 object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">기업소통을 위한 새음소프트의 열정적인 노력</h3>
            <div className="w-16 h-1 bg-blue-600 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              기업소통을 위해서라면 필요하면 무엇이든 만들어냅니다. 가장 인성적인 OfficeON을 필두로, 모든 참여에서 필리핀 메신저, 대용량메일함, 기업 업무일정 이데일리이스의 워크플로우, 웹 포탈에이서 메일망 포털을 전환하는 마이핀박스(MEAP)로 그리고 검색엔진 (OrangeSearching)도 기업소통을 위해 할 일이 많습니다.
            </p>
            <p className="text-gray-600 leading-relaxed">
              이 모든 하나하나가 기업의 업무에 보안과 편리함, 유연한 활용성으로 많은 경제를 주기 위한 새음소프트의 바람입니다.
            </p>
          </div>
        </div>
      </section>
    </div>



  )
}