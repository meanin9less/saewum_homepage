import { FormField } from "./FormField"

interface FormData {
  apartmentName: string
  name: string
  email: string
  phone: string
  employees: string
}

interface Apt123FormProps {
  formData: FormData
  onChange: (field: keyof FormData, value: string) => void
}

export function Apt123Form({ formData, onChange }: Apt123FormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      <FormField
        label="아파트명"
        value={formData.apartmentName}
        onChange={(e) => onChange("apartmentName", e.target.value)}
        required
      />
      <FormField
        label="문의자명"
        value={formData.name}
        onChange={(e) => onChange("name", e.target.value)}
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
        fullWidth
      />
    </div>
  )
}