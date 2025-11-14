import { PageBanner } from "../../common/PageBanner"

export default function ContributionPage() {
  return (
    <div className="pt-48 min-h-screen">
      <PageBanner title="기술의 사회기여" description="기업의 협업과 소통의 혁신에 기여하고자 하는 의지와 포상을 가지고 임하고 있습니다." backgroundImage="/img/page_Banner_img/common_background_inno.png" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">세계최고를 향한 경쟁에서</h2>
          <h2 className="text-3xl font-bold mb-4 text-blue-600">당당히 승리하기 위해 꾸준히 노력합니다</h2>
        </div>

        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">지속 가능한 솔루션 제공</h3>
              <p className="text-gray-600 leading-relaxed">
                새움소프트의 기업인프라 제품들은 세계최고입니다. 새움소프트가 모든 생명체를 개발, 테스트까지 직접
                관리하고, 업계 최고의 표준을 준수하기 때문입니다. 완벽을 향한 평생과 기술의 도전을 직접 만들어냅니다.
              </p>
            </div>
            <img src="/team-collaboration.png" alt="Collaboration" className="rounded-lg shadow-lg" />
          </div>

          <div className="bg-gray-50 p-12 rounded-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">세계 최고의 제품군</h3>
            <ul className="space-y-3 max-w-3xl mx-auto">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>조사1 공공정보 토탈 플랫폼(Josa1)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>더알림 (The Alim - Alarm Social Service)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>스텔라 메일서버 (Stella Mail Server)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>오피스온 전자결재 (OfficeON ADMS)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>오피스온 오픈커뮤니티 (OfficeON Community)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
