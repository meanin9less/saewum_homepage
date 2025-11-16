import { PageBanner } from "../../common/PageBanner"

export default function OrganizationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="조직구성" description="새움소프트의 조직 구조와 팀을 소개합니다" backgroundImage="/img/page_Banner_img/common_background.png" />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-12 flex justify-center">
          <img src="/img/company/organization/composition_edit.png" alt="조직 구성도" className="max-w-2xl w-full h-auto" />
        </div>
      </div>
    </div>
  )
}
