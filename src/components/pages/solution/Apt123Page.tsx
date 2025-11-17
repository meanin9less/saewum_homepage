import { PageBanner } from "../../common/PageBanner"

export default function Apt123Page() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="아파트123"
        description="다년의의 서비스를 출력 만연에 대한 관리 시스템을 편리하게 해주는 구축형 업체화 시스템"
        backgroundImage="/img/page_Banner_img/common_background_solution.png"
        contentImage="/img/solution/apt123Logo.png"
      />

      <div className="bg-blue-50 py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
            다년간의 서비스로 축적된 기술과 노하우로 아파트관리소에서 꼭 필요한 기능으로만 구성된 아파트 문서행정 시스템
          </p>
          <a
            href="https://www.apt123.kr/pcindex.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base"
          >
            자세히 알아보기 →
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 flex justify-center">
        <img src="/img/solution/apt123_bg.png" alt="아파트123" className="w-full object-contain rounded-lg shadow-lg" />
      </div>
    </div>
  )
}
