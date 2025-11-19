import { useState } from "react"
import { PageBanner } from "../../common/PageBanner"
import { TabButton } from "../../common/TabButton"
import { certifications, programs } from "../../../data/company/certificationData"

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState<"인증현황" | "프로그램 등록현황">("인증현황")

  return (
    <div className="min-h-screen md:pt-16">
      <PageBanner title="프로그램 및 인증" description="국제 표준을 만족하는 새움소프트의 다양한 인증과 프로그램" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="flex gap-0 mb-8 md:mb-12 max-w-md mx-auto">
          <TabButton
            label="인증현황"
            isActive={activeTab === "인증현황"}
            onClick={() => setActiveTab("인증현황")}
          />
          <TabButton
            label="프로그램 등록현황"
            isActive={activeTab === "프로그램 등록현황"}
            onClick={() => setActiveTab("프로그램 등록현황")}
          />
        </div>

        {activeTab === "인증현황" ? (
          <div>
            <p className="text-center text-gray-600 mb-6 md:mb-12 text-sm md:text-base">
              기업의 협업과 소통의 혁신에 기여하고자 하는 의지와 포상을 가지고 만들고 있습니다.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">인증현황</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {certifications.map((cert) => (
                <div key={cert.id} className="rounded-lg p-4 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-32 md:h-48 bg-gray-100 rounded mb-3 md:mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={cert.certificateImage}
                      alt={cert.organization}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-sm md:text-lg mb-2 text-blue-600">{cert.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <p className="text-xs text-gray-500">{cert.organization}</p>
                    <img
                      src={cert.organizationLogo}
                      alt={cert.organization}
                      className="h-5 md:h-6 w-5 md:w-6 object-contain"
                    />
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">{cert.description}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-center text-gray-600 mb-6 md:mb-12 text-sm md:text-base">
              기업의 협업과 소통의 혁신에 기여하고자 하는 의지와 표상을 가지고 임하고 있습니다.
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">프로그램 등록현황</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              {programs.map((program) => (
                <div key={program.id} className="rounded-lg p-4 md:p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-32 md:h-48 bg-gray-50 rounded mb-3 md:mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={program.certificateImage}
                      alt={program.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-xs md:text-sm mb-2 text-blue-600">{program.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{program.registrationNo}</p>
                  <p className="text-xs text-gray-500 mb-1">프로그램 창작일: {program.creationDate}</p>
                  <p className="text-xs text-gray-500">프로그램 등록일: {program.registrationDate}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
