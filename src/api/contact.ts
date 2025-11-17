interface ContactFormData {
  inquiry: string
  company?: string
  companyWebsite?: string
  name: string
  title?: string
  phone: string
  email: string
  employees?: string
  meetingDate?: string
  content?: string
  apartmentName?: string
}

interface ApiResponse<T> {
  success: boolean
  message: string
  data?: T
  error?: string
}

const API_BASE_URL = process.env.REACT_APP_API_URL || ""

export const contactApi = {
  submitForm: async (formData: ContactFormData): Promise<ApiResponse<void>> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`)
      }

      const data: ApiResponse<void> = await response.json()
      return data
    } catch (error) {
      console.error("Contact API error:", error)
      throw error
    }
  },
}