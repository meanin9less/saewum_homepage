export default function Apt123Page() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      {/* 히어로 섹션 */}
      <div
        className="w-full min-h-[500px] md:min-h-screen lg:min-h-[600px] flex flex-col md:flex-row items-stretch"
        style={{
          backgroundImage: 'url(/img/solution/pxfuel.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* 좌측 콘텐츠 */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-blue-600 mb-4 sm:mb-6">
              아파트123
            </h1>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                투명한 아파트 전사문서의 기준이 되세요
              </p>
              <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed">
                클라우드 기반 아파트 문서행정 시스템
              </p>
            </div>
            <a
              href="/contact"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              문의하기
            </a>
          </div>
        </div>

        {/* 우측 이미지 영역 */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 py-12 sm:py-16 md:py-20 relative min-h-[500px] md:min-h-auto flex items-center justify-center">
          {/* 목업 이미지 - 아래쪽, 뒤로 */}
          <div className="absolute bottom-0 sm:bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 w-56 sm:w-64 md:w-72 h-40 sm:h-48 md:h-56 overflow-hidden z-0">
            <img
              src="/img/solution/apt123_bg.png"
              alt="apt123 mockup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 로고 이미지 - 위쪽 */}
          <div className="absolute top-8 sm:top-12 md:top-16 left-1/2 transform -translate-x-1/2 w-48 sm:w-56 md:w-64 h-32 sm:h-40 md:h-48 overflow-hidden z-10">
            <img
              src="/img/solution/apt123Logo.png"
              alt="apt123 logo"
              className="w-full h-full object-contain p-4 sm:p-6"
            />
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
