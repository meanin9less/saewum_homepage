import { PageBanner } from "../../common/PageBanner"

export default function Apt123Page() {
  return (
    <div className="pt-48 min-h-screen">
      <PageBanner
        title="아파트123"
        description="다년의의 서비스를 출력 만연에 대한 관리 시스템을 편리하게 해주는 구축형 업체화 시스템"
        backgroundImage="/img/page_Banner_img/common_background_solution.png"
        contentImage="/img/solution/apt123Logo.png"
      />

      <div className="bg-purple-50 py-12 border-b border-purple-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-6">
            다년간의 서비스로 축적된 기술과 노하우로 아파트관리소에서 꼭 필요한 기능으로만 구성된 아파트 문서행정 시스템
          </p>
          <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold">
            자세히 알아보기 →
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 mb-4">
            다년의의 서비스를 출력 만연에 대한 관리 시스템을 편리하게 해주는 구축형 업체화 시스템
          </p>
          <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 font-bold">
            바로가기 →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <img src="/modern-office-building.png" alt="Apartment Building" className="rounded-lg shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-6 text-purple-600">
              투명한 아파트 전자통신의 기준
              <br />
              클라우드 서비스
            </h2>
            <p className="text-gray-700 leading-relaxed">
              아파트123은 투명한 아파트 전자통신의 기준을 클라우드로 서비스합니다.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-4 text-purple-600">아파트 123 서비스의 출입과 경험</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "아파트 문서 벌개에 확인한 서비스",
                desc: "업무적인 서비스를 실현합 관리 시스템으로 소유하는 응축한 검색업 모든 업보를 업체업시설입니다.",
              },
              {
                step: "2",
                title: "전문기업 소개 및 교육",
                desc: "체계적인 교육 및 문관리로 모든 서로완화 광업정 정동자등 정영입니다.",
              },
              {
                step: "3",
                title: "지속적인 개선 및 개발되는 콘텐츠",
                desc: "업말설의 의사결정을 위한 구청입의 비용으로 업조 상 입도록 공유",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                <p className="text-sm opacity-90">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 p-12 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-8">아파트 123 서비스의 출입과 경험</h3>
          <div className="space-y-8">
            <div className="border-l-4 border-purple-600 pl-6">
              <p className="text-lg font-bold mb-2">2009년</p>
              <p className="text-gray-700">국내최초 아파트 전자결재 출시 등 상업 설리</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• 1,800세대 대단지 아파트중 업자</li>
                <li>• 인시업사대이면이적 전자결재</li>
                <li>• 아파트승업 S-APT에서이 신작</li>
                <li>• 1,000금입 아파트 전공 업자</li>
                <li>• 단과업 수 2+시(서비스)</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <p className="text-lg font-bold mb-2">2017년</p>
              <p className="text-gray-700">전자결재 (SS업S-1등급 피득</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• 그랑계협 선국망업조선 공부</li>
                <li>• 동으산드 by 오피스온</li>
                <li>• MS애인오클선 자식업 본계</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <p className="text-lg font-bold mb-2">2018년</p>
              <p className="text-gray-700">M애인오클선 자식업 본계</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• 서울시 6곳 수정 승리 성원</li>
                <li>• 2,500세대 대단지의 프치, 공수지, 동주지</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <p className="text-lg font-bold mb-2">2019년</p>
              <p className="text-gray-700">아파트 전자결재 관한 또서업 설리 (4회)</p>
              <ul className="mt-2 space-y-1 text-sm text-gray-600">
                <li>• 아파트 업결선업 소고신</li>
                <li>• (출요 : 10~2019~0017년29)</li>
                <li>• 아파트 관업 온수업설 입설 그대</li>
                <li>• (출요 : 10~2019~0017년75)</li>
                <li>• 아파트 관업 온입선 업소 그대</li>
                <li>• (출요 : 10~2019~0017년71)</li>
                <li>• 아파트 세공공 소대업 설리 그대</li>
                <li>• (출요 : 10~4011~1017년40)</li>
                <li>• 아파트 업공 소우시설 또입신</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <p className="text-lg font-bold mb-2">2020년</p>
              <p className="text-gray-700">관리지 관리업 아파트 건설개</p>
              <p className="text-gray-700">서업시업서 수입시업 설업</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
