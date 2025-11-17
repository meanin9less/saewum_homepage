import { FormField, FormTextarea } from "./FormField"

interface FormData {
  name: string
  phone: string
  email: string
  content: string
}

interface SaeumFormProps {
  formData: FormData
  onChange: (field: keyof FormData, value: string) => void
}

export function SaeumForm({ formData, onChange }: SaeumFormProps) {
  return (
    <>
      <FormField
        label="문의자명"
        value={formData.name}
        onChange={(e) => onChange("name", e.target.value)}
      />
      <FormField
        label="전화번호"
        type="tel"
        value={formData.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <FormField
        label="E-mail"
        type="email"
        value={formData.email}
        onChange={(e) => onChange("email", e.target.value)}
        fullWidth
      />
      <FormTextarea
        label="문의내용"
        value={formData.content}
        onChange={(e) => onChange("content", e.target.value)}
      />
    </>
  )
}