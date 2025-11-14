"use client"

import { useState } from "react"
import { PageBanner } from "../../common/PageBanner"

export default function CertificationPage() {
  const [activeTab, setActiveTab] = useState<"인증현황" | "프로그램 등록현황">("인증현황")

  const certifications = [
    {
      title: "기술혁신형(INNO비즈)",
      description: "INNO-BIZ 인증은 서울소프트의 기술혁신성 중심기업으로 선정된것을 증명합니다.",
      date: "2023.09.10",
      logo: "INNOBIZ",
    },
    {
      title: "GS인증1등급",
      description: "2017년도 오피스온3.0 그룹웨어가 우수 품질관리를 보증받아 GS인증 1등급으로 품질을 선정되었습니다.",
      date: "2017.12.22",
      logo: "GS",
    },
    {
      title: "벤처기업(Venture)",
      description:
        "벤처기업 인증은 대표포트 기업이기 벤처기업 등장에 관한 법률 명우사의 재 도소선 주식이 벤처기업을 온영합니다.",
      date: "2006.03.20",
      logo: "VENTURE",
    },
    {
      title: "BestASP 수상",
      description:
        "2008 우수 ASP 서비스선정을 수 경사 경생연지 주최하난 한국보구레스어 연서온선 우수서업 부품을 선정되었습니다.",
      date: "2008.02.06",
      logo: "BestASP",
    },
    {
      title: "BestASP 수상",
      description:
        "하고스프트만이 서비시업의 명 최 인전을 서용스프도가 스프 최로 변치 필요업 공동용업 등님니다. 이연 최신의 기술습를 업상경오 장수서의 기술작 타이 협력경고 있습니다.",
      date: "2007.02.22",
      logo: "BestASP",
    },
    {
      title: "기업부설연구소",
      description:
        "기업부설연구소 인증을 생산스프트가 인용 새프과연업 그제작 도하여자 목축 시로프트 최에 기술 발시 협력업을 보련합니다.",
      date: "2006.12.05",
      logo: "연구소",
    },
    {
      title: "전자상품 표준 공업규격",
      description:
        "전자상업 표준 공업규격으로 전자상업 문금 기술습재 글면업 가신프트 등업 새업 시스템의 기술 협력 보업 설협을 보련업합니다.",
      date: "2006.11.15",
      logo: "전자상품",
    },
    {
      title: "한국제품평가",
      description:
        "SW 성등 안정평가 소프트웨어 본안에 대한 국자 가이작 최등할 시작시의 가습 협력업 보업 설협을 합습업 선시성업 보련합니다.",
      date: "2005.12.15",
      logo: "한국제품평가",
    },
  ]

  const programs = [
    {
      name: "OfficeON Messenger",
      registrationNo: "프로그램 창작 연 협업",
      dates: ["2005. 09. 10", "프로그램 등록 협 협업"],
      validUntil: "2006. 02. 06",
    },
    {
      name: "PassOn(패스온)",
      registrationNo: "프로그램 창작 연 협업",
      dates: ["2005. 10. 10", "프로그램 등록 협 협업"],
      validUntil: "2006. 02. 22",
    },
    {
      name: "MailOn(메일온)",
      registrationNo: "프로그램 창작 연 협업",
      dates: ["2006. 03. 20", "프로그램 등록 협 협업"],
      validUntil: "2006. 08. 08",
    },
    {
      name: "Remote On(리모트온)",
      registrationNo: "프로그램 창작 연 협업",
      dates: ["2005. 10. 10", "프로그램 등록 협 협업"],
      validUntil: "2006.02.22",
    },
    {
      name: '"오피스온3.0 (OfficeON)" 그룹웨어 솔루션',
      registrationNo: "프로그램 창작 연 협업",
      dates: ["2005. 10. 10"],
      validUntil: "2006. 02. 22",
    },
    {
      name: '"오피스온3.0 (OfficeON)" 그룹웨어 솔루션',
      registrationNo: "프로그램 창작 연 협업",
      dates: ["2005. 10. 10"],
      validUntil: "2006. 02. 22",
    },
  ]

  return (
    <div className="pt-48 min-h-screen">
      <PageBanner title="프로그램 및 인증" description="국제 표준을 만족하는 새움소프트의 다양한 인증과 프로그램" backgroundImage="/img/page_Banner_img/common_background.png" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex gap-0 mb-12 border-b">
          <button
            onClick={() => setActiveTab("인증현황")}
            className={`px-8 py-4 font-bold transition-colors ${
              activeTab === "인증현황" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            인증현황
          </button>
          <button
            onClick={() => setActiveTab("프로그램 등록현황")}
            className={`px-8 py-4 font-bold transition-colors ${
              activeTab === "프로그램 등록현황" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            프로그램 등록현황
          </button>
        </div>

        {activeTab === "인증현황" ? (
          <div>
            <p className="text-center text-gray-600 mb-12">
              기업의 협업과 소통의 혁신에 기여하고자 하는 의지와 포상을 가지고 만들고 있습니다.
            </p>
            <h2 className="text-3xl font-bold text-center mb-12">인증현황</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-48 bg-gray-100 rounded mb-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <p className="font-bold text-gray-700">{cert.logo}</p>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-600">{cert.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{cert.description}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="text-center text-gray-600 mb-12">
              기업의 협업과 소통의 혁신에 기여하고자 하는 의지와 포상을 가지고 만들고 있습니다.
            </p>
            <h2 className="text-3xl font-bold text-center mb-12">프로그램 등록현황</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-full h-48 bg-gray-50 rounded mb-4 flex items-center justify-center border">
                    <div className="text-center p-4">
                      <div className="text-sm text-gray-600 mb-2">프로그램 등록증</div>
                      <div className="w-12 h-12 bg-red-100 rounded-full mx-auto flex items-center justify-center">
                        <span className="text-xl">📄</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-sm mb-2 text-blue-600">{program.name}</h3>
                  <p className="text-xs text-gray-600 mb-2">{program.registrationNo}</p>
                  {program.dates.map((date, i) => (
                    <p key={i} className="text-xs text-gray-500">
                      {date}
                    </p>
                  ))}
                  <p className="text-xs text-gray-500">{program.validUntil}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
