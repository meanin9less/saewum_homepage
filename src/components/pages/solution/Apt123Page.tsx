export default function Apt123Page() {
  return (
    <div className="min-h-screen md:pt-16">
      {/* 히어로 섹션 */}
      <div
        className="w-full min-h-[500px] md:min-h-screen lg:min-h-[600px] flex flex-col md:flex-row items-stretch bg-cover bg-center"
        style={{ backgroundImage: "url('/img/solution/apt123/mainSlide1.jpg')" }}
      >
        {/* 좌측 콘텐츠 */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
          <div>
            <div className="mb-4 sm:mb-6 w-48 sm:w-56 md:w-64">
              <img src="/img/solution/apt123Logo.png" alt="apt logo" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                투명한 아파트 전사문서의 기준이 되세요
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
                클라우드 기반 아파트 문서행정 시스템
              </p>
            </div>
            <a
              href="/contact"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-500 transition-colors duration-200"
            >
              문의하기
            </a>
          </div>
        </div>

        {/* 우측 이미지 영역 */}
        <div className="hidden md:flex md:w-1/2 px-6 sm:px-8 pb-12 md:pb-20 pt-0 items-start justify-end">
          <div className="w-full max-w-lg flex flex-col items-end gap-4">
            <div className="flex gap-4 mt-0">
              <img
                src="/img/solution/apt123/onapt-banner%201.png"
                alt="onapt banner"
                className="w-28 sm:w-32 md:w-40 h-auto object-contain mt-0"
              />
              <img
                src="/img/solution/apt123/banner.png"
                alt="banner"
                className="w-28 sm:w-32 md:w-40 h-auto object-contain mt-0"
              />
            </div>
          </div>
        </div>
      </div>

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
