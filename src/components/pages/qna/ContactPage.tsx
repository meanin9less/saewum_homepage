"use client"

import type React from "react"

import { useState } from "react"
import { PageBanner } from "../../common/PageBanner"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    company: "새움소프트",
    name: "",
    phone: "",
    email: "",
    content: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("문의가 접수되었습니다.")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="문의하기" description="질서만으로 문의를 확인하여, 최대한 빠른 답변 드리도록 최선을 다하겠습니다." backgroundImage="/img/page_Banner_img/common_background_contact.png" />

      <div className="max-w-3xl mx-auto px-4 py-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8">문의 신청서</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-blue-600">문의분류</label>
                <select
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                >
                  <option>새움소프트</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-blue-600">문의자명</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-blue-600">전화번호</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-blue-600">문의내용</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg h-32"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
              />
            </div>

            <div className="bg-gray-50 p-4 rounded text-sm text-gray-600">
              <p className="font-bold mb-2">개인정보 수집 및 이용에 대한 안내</p>
              <ul className="space-y-1 text-xs">
                <li>• 수집 및 이용 목적 : 발문공문, 회시명, 부서명, 직위서</li>
                <li>• 수집 및 이용 목적/기간 : 문의 검수 및 회시자 신문</li>
                <li>• 수집 및 이용 기간 : 해당 서명 공문하기 전까지 이용 (단, 고치 시 서지 시 폐기)</li>
              </ul>
            </div>

            <div className="flex items-center">
              <input type="checkbox" id="agree" className="mr-2" required />
              <label htmlFor="agree" className="text-sm">
                위 개인 정보 수집 및 이용에 동의합니다.
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
              등록
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
