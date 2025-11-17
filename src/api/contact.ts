import axios, { AxiosError } from "axios"

export interface ContactFormData {
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

export interface ApiResponse<T = void> {
  success: boolean
  message: string
  data?: T
  error?: string
}

// 레거시 API 응답 형식 (officeon 기존 API)
export interface LegacyApiResponse {
  resultMessage?: string
  result?: string
  [key: string]: unknown
}

const API_BASE_URL = import.meta.env.VITE_API_URL || ""

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

// 요청 인터셉터 (필요시 토큰 추가)
axiosInstance.interceptors.request.use(
  (config) => {
    // 필요하면 인증 토큰 추가
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error: AxiosError) => {
    console.error("API Error:", error.message)
    return Promise.reject(error)
  }
)

export const contactApi = {
  // 신규 API 엔드포인트
  submitForm: async (formData: ContactFormData): Promise<ApiResponse> => {
    try {
      const response = await axiosInstance.post("/api/contact", formData)
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message || error.message
        throw new Error(`문의 접수 실패: ${errorMessage}`)
      }
      throw error
    }
  },

  // 레거시 OfficeON API (기존 서비스)
  submitLegacyForm: async (formData: {
    inquireType: string
    inquireKind: string
    userName: string
    replyEmail: string
    userMobileNumber: string
    companyName?: string
    companyHomepage?: string
    totalPeople?: string
    meetingDate?: string
    comments: string
    homePageSite: string
  }): Promise<LegacyApiResponse> => {
    try {
      const response = await axiosInstance.post(
        "https://gw.officeon.com/officeon/everyone/officeon.createReceipt",
        formData
      )
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.resultMessage || error.message
        throw new Error(`문의 접수 실패: ${errorMessage}`)
      }
      throw error
    }
  },
}