import { PageBanner } from "../../common/PageBanner"

export default function ContributionPage() {
  return (
    <div className="min-h-screen md:pt-16">
      <PageBanner title="기술의 사회기여" description="기업의 협업과 소통의 혁신에 기여하고자 하는 의지와 포상을 가지고 임하고 있습니다." backgroundImage="/img/page_Banner_img/common_background_inno.png" />

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">세계최고를 향한 경쟁에서</h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-blue-600">당당히 승리하기 위해 꾸준히 노력합니다</h2>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">지속 가능한 솔루션 제공</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-4">
              새움소프트의 기업인프라 제품들은 세계최고입니다. 새움소프트가 모든 설계부터 개발, 테스트까지 직접 관리하고, 업계 최고의 표준을 준수하기 때문입니다. 완벽을 향한 열정과 기술적 도전은 모든 기능과 서비스의 미래를 제시합니다. 새움소프트는 업계에서 드물게도 모든 기능과 모듈을 직접 만듭니다.
            </p>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 md:p-12 rounded-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-center">세계 최고의 제품군</h3>
            <ul className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">애니톡 차세대 생성형 AI 챗봇 서비스(Anytalk)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">조사1 공공정보 토탈 플랫폼(Josa1)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">더알림 (The Alim - Alarm Social Service)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">스텔라 메일서버 (Stella Mail Server)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">오피스온 전자결재 (OfficeON ADMS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">오피스온 오픈커뮤니티 (OfficeON Community)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">워크플로우플랫폼 (OWorkflow)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">하이브릭 모바일포탈 (HybriC Portal - Hybrd+BriC)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">푸시 메시지서버 (PushMsg.net)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">컴퍼니톡 메신저 (CompanyTalk Messenger)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">컨버전스 플랫폼 (Convergence)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">YEAS플랫폼 (Your Everything Auto-Save)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span className="text-xs sm:text-sm md:text-base">오렌지 검색엔진 (Orange Searching)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
