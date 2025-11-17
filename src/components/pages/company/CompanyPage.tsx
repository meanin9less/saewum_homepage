import { PageBanner } from "../../common/PageBanner"

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      <PageBanner title="회사소개" description="변화하신을 바탕으로 한 새움소프트의 기술력은 세계를 향해 나아갑니다" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-blue-600">새움소프트</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            지난 20년간 독자적인 기술로서 기업의 협업과 소통을 책임지는 최고의 솔루션과 서비스를 제공하는 새움소프트 입니다.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          <div className="flex-shrink-0 w-full md:w-auto">
            <img src="/img/company/intro/building.png" alt="Company Building" className="rounded-lg shadow-lg w-full md:w-auto" />
          </div>
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <img src="/img/company/intro/saeumcup.png" alt="Entrance" className="rounded-lg shadow-lg w-full md:w-auto" />
            <img src="/img/company/intro/saeumfront.png" alt="Office Interior" className="rounded-lg shadow-lg w-full md:w-auto" />
          </div>
        </div>

        <div className="bg-gray-50 p-4 md:p-8 rounded-lg">
          <table className="w-full text-sm md:text-base">
            <tbody className="divide-y">
              <tr>
                <td className="py-2 md:py-4 font-bold w-20 md:w-32">대표이사</td>
                <td className="py-2 md:py-4">최병진</td>
              </tr>
              <tr>
                <td className="py-2 md:py-4 font-bold">설립일</td>
                <td className="py-2 md:py-4">2005.1.4 (주) 새움소프트 설립</td>
              </tr>
              <tr>
                <td className="py-2 md:py-4 font-bold">주소</td>
                <td className="py-2 md:py-4">경기도 안양시 만안구 안양천서로 93 새움빌딩</td>
              </tr>
              <tr>
                <td className="py-2 md:py-4 font-bold">사업</td>
                <td className="py-2 md:py-4">
                  IT 솔루션(그룹웨어, 메신저, 전산관리), 메일서버 등 솔루션은 연구개발 사업, IT솔루션 컨설팅, 시스템
                  통합 및 운영
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
