import type React from "react"
import { useState } from "react"
import { PageBanner } from "../../common/PageBanner"
import { AnytalkForm } from "./AnytalkForm"
import { Apt123Form } from "./Apt123Form"
import { SaeumForm } from "./SaeumForm"
import { contactApi } from "../../../api/contact"

interface FormData {
  company: string
  companyWebsite: string
  name: string
  title: string
  phone: string
  email: string
  employees: string
  meetingDate: string
  content: string
  apartmentName: string
}

export default function ContactPage() {
  const [inquiry, setInquiry] = useState("새움소프트")
  const [formData, setFormData] = useState<FormData>({
    company: "",
    companyWebsite: "",
    name: "",
    title: "",
    phone: "",
    email: "",
    employees: "",
    meetingDate: "",
    content: "",
    apartmentName: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [agreeChecked, setAgreeChecked] = useState(false)

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // 필수 필드 검증
  const validateForm = (): string | null => {
    // 개인정보 동의 확인
    if (!agreeChecked) {
      return "개인정보 수집 및 이용에 대한 안내는 반드시 동의하셔야 합니다."
    }

    // 문의분류별 필수 필드 검증
    if (inquiry === "새움소프트") {
      if (!formData.name.trim()) return "문의자명을 입력해주세요."
      if (!formData.phone.trim()) return "연락처를 입력해주세요."
      if (!formData.email.trim()) return "이메일을 입력해주세요."
      if (!formData.content.trim()) return "문의내용을 입력해주세요."
    } else if (inquiry === "아파트123") {
      if (!formData.apartmentName.trim()) return "아파트명을 입력해주세요."
      if (!formData.name.trim()) return "문의자명을 입력해주세요."
      if (!formData.email.trim()) return "이메일을 입력해주세요."
      if (!formData.phone.trim()) return "전화번호를 입력해주세요."
      if (!formData.employees.trim()) return "사용인원을 입력해주세요."
    } else if (inquiry === "애니톡" || inquiry === "오피스온") {
      if (!formData.company.trim()) return "회사명을 입력해주세요."
      if (!formData.name.trim()) return "문의자명을 입력해주세요."
      if (!formData.title.trim()) return "직함을 입력해주세요."
      if (!formData.email.trim()) return "이메일을 입력해주세요."
      if (!formData.phone.trim()) return "전화번호를 입력해주세요."
      if (!formData.employees.trim()) return "사용인원을 입력해주세요."
      if (!formData.meetingDate.trim()) return "미팅 희망일자를 입력해주세요."
      if (!formData.content.trim()) return "문의내용을 입력해주세요."
    }

    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // 폼 검증
    const validationError = validateForm()
    if (validationError) {
      alert(validationError)
      return
    }

    setIsLoading(true)

    try {
      // 레거시 API 형식으로 데이터 구성
      let comments = ""

      if (inquiry === "새움소프트") {
        comments = `- 본문내용 : ${formData.content}\n`
      } else if (inquiry === "아파트123") {
        comments += `- 아파트이름 : ${formData.apartmentName}\n`
        comments += `- 사용인원 : ${formData.employees}\n`
        comments += `- 본문내용 : ${formData.content}\n`
      } else {
        // 애니톡, 오피스온
        comments += `- 직책 : ${formData.title}\n`
        comments += `- 사용인원 : ${formData.employees}\n`
        comments += `- 미팅날짜 : ${formData.meetingDate}\n`
        comments += `- 그룹웨어교체여부 : new\n`
        comments += `- 본문내용 : ${formData.content}\n`
      }

      // 레거시 API 호출
      await contactApi.submitLegacyForm({
        inquireType: "I",
        inquireKind: "C",
        userName: formData.name,
        replyEmail: formData.email,
        userMobileNumber: formData.phone,
        companyName: formData.company || undefined,
        companyHomepage: formData.companyWebsite || undefined,
        totalPeople: formData.employees || undefined,
        meetingDate: formData.meetingDate || undefined,
        comments:
          `문의분류: ${inquiry} <br>susoft 홈페이지에서 접수되었습니다.<br>` + comments,
        homePageSite: "susoft",
      })

      alert(`${formData.name}님께서 작성하신 문의사항이 접수되었습니다.\n접수해주신 연락처로 연락드리겠습니다. 감사합니다.`)

      // 폼 초기화
      setFormData({
        company: "",
        companyWebsite: "",
        name: "",
        title: "",
        phone: "",
        email: "",
        employees: "",
        meetingDate: "",
        content: "",
        apartmentName: "",
      })
      setInquiry("새움소프트")
      setAgreeChecked(false)
    } catch (error) {
      console.error("Submit error:", error)
      const errorMessage = error instanceof Error ? error.message : "문의 접수 중 오류가 발생했습니다."
      alert(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const renderFormFields = () => {
    if (inquiry === "애니톡" || inquiry === "오피스온") {
      return <AnytalkForm formData={formData} onChange={handleFieldChange} />
    }
    if (inquiry === "아파트123") {
      return <Apt123Form formData={formData} onChange={handleFieldChange} />
    }
    return <SaeumForm formData={formData} onChange={handleFieldChange} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="문의하기" description="질서만으로 문의를 확인하여, 최대한 빠른 답변 드리도록 최선을 다하겠습니다." backgroundImage="/img/page_Banner_img/common_background_contact.png" />

      <div className="max-w-3xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">문의 신청서</h2>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-blue-600">문의분류</label>
                <select
                  className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base"
                  value={inquiry}
                  onChange={(e) => {
                    setInquiry(e.target.value)
                  }}
                >
                  <option>새움소프트</option>
                  <option>애니톡</option>
                  <option>오피스온</option>
                  <option>아파트123</option>
                </select>
              </div>

              {renderFormFields()}
            </div>

            <div className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded text-xs sm:text-sm text-gray-600">
              <p className="font-bold mb-2 sm:mb-3">개인정보 수집 및 이용에 대한 안내</p>
              <ul className="space-y-1 text-xs sm:text-xs">
                <li>• 수집 및 이용 항목 : 방문경로, 회사명, 부서명, 직원수, 이름, 이메일, 연락처</li>
                <li>• 수집 및 이용 목적/기간 : 문의 접수 및 회신과 진행</li>
                <li>• 수집 및 이용 기간 : 해당 사업 종료하기 전까지 이용 (단, 요청 시 삭제)</li>
              </ul>
              <p className="text-xs mt-2 sm:mt-3 leading-relaxed">그 외 문의 내용은 관계법령 및 기타 응대를 위해 개인정보를 보관할 수 있습니다.<br />그 밖에 사항은 개인 정보 취급 방침을 준수 합니다</p>
            </div>

            <div className="flex items-start sm:items-center gap-2">
              <input
                type="checkbox"
                id="agree"
                className="mt-1 sm:mt-0"
                checked={agreeChecked}
                onChange={(e) => setAgreeChecked(e.target.checked)}
              />
              <label htmlFor="agree" className="text-xs sm:text-sm">
                위 개인 정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isLoading ? "접수 중..." : "등록"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
