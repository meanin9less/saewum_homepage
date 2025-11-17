import type React from "react"

interface FormFieldProps {
  label: string
  type?: "text" | "email" | "tel" | "url" | "date"
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  fullWidth?: boolean
}

export function FormField({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  fullWidth = false,
}: FormFieldProps) {
  return (
    <div className={fullWidth ? "md:col-span-2" : ""}>
      <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-blue-600">
        {label}
        {required && " *"}
      </label>
      <input
        type={type}
        className="w-full px-3 sm:px-4 py-2 border rounded-lg text-sm sm:text-base"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

interface FormTextareaProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
}

export function FormTextarea({
  label,
  value,
  onChange,
  required = false,
}: FormTextareaProps) {
  return (
    <div className="md:col-span-2">
      <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-blue-600">
        {label}
      </label>
      <textarea
        className="w-full px-3 sm:px-4 py-2 border rounded-lg h-24 sm:h-32 text-sm sm:text-base"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}