import { PageBanner } from "../../common/PageBanner"

export default function InnovationPage() {
  return (
    <div className="pt-48 min-h-screen">
      <PageBanner title="혁신의 시작" description="새움소프트는 늘 경험업은 축적업으로 더 나은 경영업을 위해 노력합니다" backgroundImage="/img/page_Banner_img/common_background_inno.png" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">나아가는 방향</h2>
            <p className="text-lg text-gray-700 mb-4">
              새움소프트의 기업인프라 제품들은 세계최고입니다. 새움소프트의 모든 솔루션은 해외 수출도 가능합니다.
              온라인판 새프도 하여만 수업을 순수하기 매우합니다.
            </p>
            <p className="text-gray-600">
              새움소프트는 은금업에서 업금업 연구원를 보급합니다 모든 기능과 서비스의 매체를 제시합니다. 새움소프트는
              업게에서 드물게도 모든 기능과 모듈을 직접 만듭니다.
            </p>
          </div>
          <div>
            <img src="/business-people-city-view.jpg" alt="Innovation" className="rounded-lg shadow-lg" />
          </div>
        </div>

        <div className="bg-gray-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">세계최고를 향한 경쟁에서</h3>
          <h3 className="text-2xl font-bold text-center mb-12 text-blue-600">당당히 승리하기 위해 꾸준히 노력합니다</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4">지속 가능한 솔루션 제공</h4>
              <p className="text-gray-600">
                새움소프트의 기업인프라 제품들은 세계최고입니다. 새움소프트의 모든 솔루션은 해외 수출도 가능합니다.
                테스트까지 직접 관리하고 대응으로 순수하기 제공합니다. 환벡을 향한 평생과 기술상 도전은 모든 기능과
                서비스의 매체를 쌓습니다.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h4 className="text-xl font-bold mb-4">세계 최고의 제품군</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 조사1 공공정보 토탈 플랫폼(Josa1)</li>
                <li>• 더알림 (The Alim - Alarm Social Service)</li>
                <li>• 스텔라 메일서버 (Stella Mail Server)</li>
                <li>• 오피스온 전자결재 (OfficeON ADMS)</li>
                <li>• 오피스온 오프커뮤니티 (OfficeON Community)</li>
                <li>• 워크플로우우플랫폼 (OWorkflow)</li>
                <li>• 하이브리드 모바일포탈 (HybriC Portal - Hybrd+BriC)</li>
                <li>• 푸시 메시지서버 (PushMsg.net)</li>
                <li>• 컴파니톡 메신저 (CompanyTalk Messenger)</li>
                <li>• 오피스온 전자결재 (OfficeON ADMS)</li>
                <li>• 컨버전스 플넷 (Convergence)</li>
                <li>• YEAS플랫폼 (Your Everything Auto-Save)</li>
                <li>• 오렌지 검색엔진 (Orange Searching)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
