import { YouTubeEmbed } from '../../common/YouTubeEmbed'

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
          <div className="md:hidden flex items-start justify-between gap-4 mb-8">
            <div className="w-40 sm:w-48 flex-shrink-0">
              <img src="/img/solution/apt123Logo.png" alt="apt logo" className="w-full h-auto object-contain" />
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <img
                src="/img/solution/apt123/onapt-banner%201.png"
                alt="onapt banner"
                className="w-16 sm:w-20 h-auto object-contain"
              />
              <img
                src="/img/solution/apt123/banner.png"
                alt="banner"
                className="w-16 sm:w-20 h-auto object-contain"
              />
            </div>
          </div>
          <div className="hidden md:block mb-4 sm:mb-6 w-48 sm:w-56 md:w-64">
            <img src="/img/solution/apt123Logo.png" alt="apt logo" className="w-full h-auto object-contain" />
          </div>
          <div>
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
        <div className="hidden md:flex md:w-1/2 px-6 sm:px-8 pb-8 md:pb-20 pt-0 md:items-start md:justify-end items-center justify-end">
          <div className="flex gap-2 md:gap-4 mt-0">
            <img
              src="/img/solution/apt123/onapt-banner%201.png"
              alt="onapt banner"
              className="w-16 sm:w-20 md:w-40 h-auto object-contain mt-0"
            />
            <img
              src="/img/solution/apt123/banner.png"
              alt="banner"
              className="w-16 sm:w-20 md:w-40 h-auto object-contain mt-0"
            />
          </div>
        </div>
      </div>

      {/* 소개 섹션 */}
      <section className="w-full bg-white py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12 sm:space-y-16">
          {/* 텍스트 */}
          <div className="text-center">
            <div className="flex items-center gap-2 md:gap-4 justify-center">
              <div className="w-36 sm:w-44 md:w-56">
                <img src="/img/solution/apt123/apart123Logo.png" alt="아파트123 로고" className="w-full h-auto object-contain" />
              </div>
              <span className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                을 소개합니다.
              </span>
            </div>
          </div>

          {/* 영상 */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <YouTubeEmbed videoId="gc3xdhg5xBk" title="Apt123 Video" />
            </div>
          </div>

          {/* 특징 카드 섹션 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* 첫 번째 카드 */}
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                여러 지자체가 선택한 공식 문서행정 서비스
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-sm sm:text-base">서울시, 경기도, 광주광역시 광산구 등 여러 지자체에서 시범서비스</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-sm sm:text-base">서울시 S-APT 플랫폼 공식 서비스</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-sm sm:text-base">인천시 온-아파트 플랫폼 공식 서비스</span>
                </li>
              </ul>
            </div>

            {/* 두 번째 카드 */}
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                지자체와 함께하는 스마트 공동주택 토탈서비스
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-sm sm:text-base">아파트 전자결재, 문서유통, 상황전파, 층간소음-스마트중재 시스템을 제공</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-sm sm:text-base">아파트 핵심특허 5종을 보유하고, 각종 인증상을 수상한 검증된 서비스</span>
                </li>
              </ul>
            </div>

            {/* 세 번째 카드 */}
            <div className="bg-blue-50 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                11년 무정지의 안정적인 서비스
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-sm sm:text-base">대규모 아파트 단지에 10년 동안 무정지 아파트 전자결재 서비스를 제공</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span className="text-sm sm:text-base">독보적인 노하우와 정통성을 증명한 아파트 관리업무 전용 전자결재 서비스</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 서비스의 특징 섹션 */}
          <div className="space-y-10 sm:space-y-12">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
                아파트123 서비스의 특징
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {/* 특징 1 */}
              <div className="p-6 sm:p-8 text-center">
                <h4 className="text-2xl sm:text-3xl font-black text-black mb-3">
                  빠르고 쉬운 서비스
                </h4>
                <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                  모바일과 pc를 모두 지원하는 빠르고 쉬운 서비스
                </p>
              </div>

              {/* 특징 2 */}
              <div className="p-6 sm:p-8 text-center">
                <h4 className="text-2xl sm:text-3xl font-black text-black mb-3">
                  효율적인 결재처리
                </h4>
                <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                  종이문서보다 훨씬 쉽고 빠른 결재작성과 승인처리
                </p>
              </div>

              {/* 특징 3 */}
              <div className="p-6 sm:p-8 text-center">
                <h4 className="text-2xl sm:text-3xl font-black text-black mb-3">
                  다양한 도구 지원
                </h4>
                <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                  다양한 결재문서 작성을 돕는 도구 지원
                </p>
              </div>
            </div>
          </div>

          {/* 아파트 문서행정을 간편하게 섹션 */}
          <div className="space-y-10 sm:space-y-12">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black">
                아파트 문서행정을 간편하게
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {/* 전자결재 */}
              <div className="space-y-4 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="w-full h-64 sm:h-80 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                  <img src="/img/solution/apt123/function1.png" alt="전자결재" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-black">
                    전자결재
                  </h3>
                  <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                    체계화 된 아파트 전용서식으로 쉽고 빠른 결재문서 작성
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>아파트관리 업무를 전문적으로 분석해 만든 100여종 이상의 양식을 만나보세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>종이문서보다 쉽고 편리한 전자결재 문서를 작성하고 승인하고 반려하세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>기존 작성된 종이문서를 전자화하여 빠르게 복구하여 사용해보세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>사용자의 편의에 따라 구성 가능한 서식과 양식의 듀얼 방식을 이용해보세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>아파트 전용결재선과 수월한 작업을 위한 웹 에디터로 업무 효율을 높이세요.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 정보공개 */}
              <div className="space-y-4 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="w-full h-64 sm:h-80 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                  <img src="/img/solution/apt123/function2.png" alt="정보공개" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-black">
                    정보공개
                  </h3>
                  <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                    대시민과의 양방향 소통을 위한 투명한 아파트 정보공개
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>문서 수집 및 관리 절차를 준수하여 안정적으로 전자문서를 공개합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>빠른 문서접근과 제한을 위한 문서유형, 문서진열, 문서함을 구성합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>검색엔진을 연동하여 다양한 검색요건별 통합검색을 이용하실 수 있습니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>공동주택 통합정보마당과 아파트전용 전자결재 시스템 연동을 지원합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>모바일 웹서비스를 통한 공개시스템 접속과 문서 열람이 가능합니다.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 문서유통 */}
              <div className="space-y-4 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="w-full h-64 sm:h-80 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                  <img src="/img/solution/apt123/function3.png" alt="문서유통" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-black">
                    문서유통
                  </h3>
                  <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                    지자체 공문을 팩스나 우편이 아닌 아파트123으로
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>발송 공문의 수신여부와 열람여부 확인하여 빠짐없이 관리하세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>스마트폰을 이용한 공문을 빠르고 편리하게 열람하고 전달하세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>아파트전용 전자결재 시스템과 연동을 통한 회람소통을 지원합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>회신필요 여부를 설정하여 회신을 요청하고 확인해보세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>대용량 첨부파일 추가하고 발송함과 수신함을 이용해보세요.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 상황전파 */}
              <div className="space-y-4 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="w-full h-64 sm:h-80 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                  <img src="/img/solution/apt123/function4.png" alt="상황전파" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-black">
                    상황전파
                  </h3>
                  <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                    실시간 상황전파 시스템을 통해서 지자체의 상황을 빠르게
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>발송할 상황전파 내용을 아파트 단지에 실시간으로 전달하세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>수신받은 상황전파 내용의 음성변환 서비스를 지원합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>상황전파 시간의 예약 및 스케줄 관리가 용이해집니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>회발송 상황에 대한 이력관리 및 리포팅 서비스가 제공됩니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>아파트 단지 내 방송시스템과의 연동가이드를 제공합니다.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 층간소음 스마트중재 */}
              <div className="space-y-4 border border-gray-200 rounded-2xl p-6 sm:p-8">
                <div className="w-full h-64 sm:h-80 rounded-xl flex items-center justify-center overflow-hidden border border-gray-200">
                  <img src="/img/solution/apt123/function5.png" alt="층간소음 스마트중재" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-black">
                    층간소음 스마트중재
                  </h3>
                  <p className="text-base sm:text-lg text-black font-bold leading-relaxed">
                    공정하고 스마트한 중재 시스템으로 안전하게 갈등을 해결
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>이웃간에 다투는 위험 없이 비대면으로 해결하세요.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>층간소음 중재 시스템을 통해 소음발생을 판정하고 수치화합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>단계별로 체계화된 조치사항을 사용자 알림으로 전송합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>시간에 구애 받지 않고 모바일 웹서비스를 통해 신고가 가능합니다.</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <span className="text-blue-600 font-bold mt-0.5">·</span>
                      <span>피해 이력 관리를 통해 똑같은 일이 발생하지 않도록 지원합니다.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CTA 카드 */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 flex flex-col justify-center items-center text-center text-white space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                    아파트123과 함께<br />스마트한 문서행정을<br />시작하세요
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-blue-100">
                    전자결재부터 층간소음 중재까지<br />모든 아파트 업무를 한 번에 해결하세요
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                  <a
                    href="/contact"
                    className="px-6 sm:px-8 py-3 bg-white text-blue-600 rounded-lg font-bold text-sm sm:text-base hover:bg-blue-50 transition-colors duration-200"
                  >
                    문의하기
                  </a>
                  <a
                    href="https://www.apt123.kr/pcindex.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 bg-blue-500 text-white rounded-lg font-bold text-sm sm:text-base hover:bg-blue-400 transition-colors duration-200 border border-blue-400"
                  >
                    자세히 알아보기 →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
