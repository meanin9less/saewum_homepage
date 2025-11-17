import { PageBanner } from "../../common/PageBanner"

export default function GoalPage() {
  return (
    <div>
      <PageBanner title="나아가는 방향" description="새움소프트는 늘 경험업은 축적업으로 더 나은 경영업을 위해 노력합니다" backgroundImage="/img/page_Banner_img/common_background_inno.png" />
      <section className="text-center mb-8 sm:mb-12 md:mb-16 mt-8 sm:mt-12 md:mt-16 max-w-6xl mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 sm:mb-4 md:mb-6">
          기업의 질을 향상시키기 위한 제품과 서비스를 제공함으로서
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-3 sm:mb-4 md:mb-6">
          자랑스러운 기업이 되도록 노력합니다.
        </p>
      </section>

      <section className="mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          <div>
            <img src="/img/innovation/goal_1_1.jpg" alt="기업 협업" className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">기업 협업을 위한 깊은 혁신</h3>
            <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-3 sm:mb-4 md:mb-6" />
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              모든 새움소프트의 기능들은 단순한 약속을 제공합니다. 기업이 소통하고 즐겁게 업무를 하는 것 입니다. 새움소프트는 기업인프라로서 가장 보안성이 높은 스트레스상황에 대해 견디게끔 만듭니다. 그리고 우리는 업계 최고의 품질보증을 하며 FCA(Full Cycle Angel)정책으로 2005년도에 만들어진 최초 버젼까지도 보증합니다. 이렇게 오랫동안 기업소통이라는 분야에서 연구하고 구현하는 일에는 많은 것들이 필요합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 sm:mb-12 md:mb-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">사용자들의 편의성을 고려한 최고의 기술력</h3>
              <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-3 sm:mb-4 md:mb-6" />
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3 md:mb-4">
                훌륭한 편의성과 디자인, 정확하고 혁신적인 기술과 엔지니어링, 품질 좋은 보안과 성능, 기능간의 빈틈없는 유연함, 그리고 사용자들이 평생 사용하고 싶은 서비스를 구현해야 합니다. 새움소프트는 이 모든 것들을 소유하고 있습니다. 조건들을 모두 갖추고 있다는 것은 새움소프트가 만드는 모든 서비스 모듈들은 직접 테스트하기 때문입니다.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="/img/innovation/goal_2_1.jpg" alt="기술력" className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 sm:mb-12 md:mb-16 max-w-6xl mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center">
          <div>
            <img src="/img/innovation/goal_3_1.jpg" alt="기업소통" className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg shadow-lg" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">기업소통을 위한 새음소프트의 열정적인 노력</h3>
            <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-3 sm:mb-4 md:mb-6" />
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3 md:mb-4">
              기업소통을 위해서라면 필요하면 무엇이든 만들어냅니다. 가장 안정적인 OfficeON플랫폼, 모든 장치에서 편리한 메신저, 대용량 메일서버, 기업 업무와의 인터페이스의 워크플로우, 웹 포탈에서 모바일 포탈로 진화하는 하이브릭(MEAP)뿐 아니라 검색엔진(OrangeSearching)도 기업소통을 위해 필요했기 때문입니다. 이 모든 하나하나가 기업의 업무에 보안과 편리함, 유연한 활용성으로 일의 즐거움을 주기 위한 새움소프트의 바람입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}