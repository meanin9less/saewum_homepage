import { FormField, FormTextarea } from "./FormField"

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
}

interface AnytalkFormProps {
  formData: FormData
  onChange: (field: keyof FormData, value: string) => void
}

export function AnytalkForm({ formData, onChange }: AnytalkFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <FormField
        label="회사명"
        value={formData.company}
        onChange={(e) => onChange("company", e.target.value)}
        required
      />
      <FormField
        label="회사 홈페이지"
        type="url"
        value={formData.companyWebsite}
        onChange={(e) => onChange("companyWebsite", e.target.value)}
      />
      <FormField
        label="문의자명"
        value={formData.name}
        onChange={(e) => onChange("name", e.target.value)}
        required
      />
      <FormField
        label="직함"
        value={formData.title}
        onChange={(e) => onChange("title", e.target.value)}
        required
      />
      <FormField
        label="E-mail"
        type="email"
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
        required
      />
      <FormField
        label="전화번호"
        type="tel"
        value={formData.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        required
      />
      <FormField
        label="사용인원"
        value={formData.employees}
        onChange={(e) => onChange("employees", e.target.value)}
        required
      />
      <FormField
        label="미팅 희망일자"
        type="date"
        value={formData.meetingDate}
        onChange={(e) => onChange("meetingDate", e.target.value)}
        required
      />
      <FormTextarea
        label="문의내용"
        value={formData.content}
        onChange={(e) => onChange("content", e.target.value)}
      />
    </div>
  )
}