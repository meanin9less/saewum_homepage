import { LogoCarousel } from '../../common/LogoCarousel'

const officeonLogos = [
  '/img/solution/officeon/other_logos/CJ_logo.png',
  '/img/solution/officeon/other_logos/cammsys_logo.png',
  '/img/solution/officeon/other_logos/good_logo.png',
  '/img/solution/officeon/other_logos/hana_logo.png',
  '/img/solution/officeon/other_logos/jardin_logo.png',
  '/img/solution/officeon/other_logos/kait_logo.png',
  '/img/solution/officeon/other_logos/kb_logo.png',
  '/img/solution/officeon/other_logos/kbet_logo.png',
  '/img/solution/officeon/other_logos/kyoungdong_logo.png',
  '/img/solution/officeon/other_logos/naeun_logo.png',
  '/img/solution/officeon/other_logos/opera_logo.png',
  '/img/solution/officeon/other_logos/samco_logo.png',
  '/img/solution/officeon/other_logos/sky007_logo.png',
  '/img/solution/officeon/other_logos/univercity_logo.png',
  '/img/solution/officeon/other_logos/welcron_logo.png',
  '/img/solution/officeon/other_logos/zinus_logo.png',
]

export default function OfficeONPage() {
  return (
    <div className="min-h-screen md:pt-16">
      {/* 히어로 섹션 */}
      <div className="w-full min-h-[500px] md:min-h-screen lg:min-h-[600px] flex flex-col md:flex-row items-stretch">
        {/* 좌측 콘텐츠 */}
        <div className="w-full md:w-1/2 bg-white px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
          <div>
            <div className="mb-4 sm:mb-6 w-48 sm:w-56 md:w-64">
              <img src="/img/solution/officeonLogoColor.png" alt="officeon logo" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                언제 어디서나 협업을 통한 업무 생산성을 높이세요
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                구축형 그룹웨어 솔루션
              </p>
            </div>
            <a
              href="/contact"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-bold text-base sm:text-lg hover:bg-blue-700 transition-colors duration-200"
            >
              자세히 알아보기
            </a>
          </div>
        </div>

        {/* 우측 이미지 영역 */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 py-12 sm:py-16 md:py-20 relative min-h-[300px] sm:min-h-[400px] md:min-h-auto flex items-center justify-center">
          {/* 우측 이미지 영역 */}
            <img
              src="/img/solution/officeon_bg1.png"
              alt="anytalk mockup"
              className="w-full h-full"
            />
        </div>
      </div>

      <div className="w-full py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <h3 className="text-center text-lg sm:text-xl md:text-2xl font-bold mb-8 sm:mb-12 text-gray-800">
            OfficeON의 기술력을 믿고<br className="sm:hidden" /> 길을 함께하는 소중한 파트너사
          </h3>
          <LogoCarousel logos={officeonLogos} speed={40} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
              언제 어디서나 협업을 통한 업무 생산성을 향상시킬수 있는 구축형 그룹웨어입니다.
        </p>
      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
            오피스 3.0은 기존 그룹웨어의 기능은 실시간 협업과 컨텐츠컨버젼스<br />
            활용으로당신의 업무에 편안함과 신뢰를 더합니다.
      </p>


        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-8 sm:mb-12">언제 어디서나 편리한 기능</h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { image: "/img/solution/mail.png", title: "메일", desc: "메일 관리의 편리성과 신뢰성을 높입니다." },
              { image: "/img/solution/addrbook.png", title: "주소록", desc: "놓칠 수 있는 상대방과의 정보를 관리할 수 있습니다." },
              { image: "/img/solution/calender.png", title: "캘린더", desc: "일정과 진행 현황을 구성원과 실시간으로 공유합니다." },
              { image: "/img/solution/comunity.png", title: "커뮤니티", desc: "게시판을 만들어 구성원과 공유/토론할 수 있습니다." },
              {
                image: "/img/solution/filedrive.png",
                title: "파일 드라이브",
                desc: "내 PC와 스마트폰의 파일들을 첨부파일과 웹하드로 활용합니다.",
              },
              { image: "/img/solution/onlineSign.png", title: "전자결재", desc: "체계적인 의사결정을 위한 구성원 간의 신뢰성 있는 공유" },
              { image: "/img/solution/mobile.png", title: "모바일", desc: "언제 어디서나 멈추지 않고 움직이는 모바일 오피스(Android, IOS 모두 지원)" },
              {
                image: "/img/solution/conversion.png",
                title: "컨버젼스",
                desc: "중요한 주소, 일정, 메일, 게시글, 결재문서를 하나의 캐비닛에 모두 담습니다.",
              },
              {
                image: "/img/solution/multi.png",
                title: "멀티포탈",
                desc: "워크 스페이스, 포틀릿으로 나와 회사에 맞는 업무를 구성합니다.",
              },
              {
                image: "/img/solution/messenser.png",
                title: "메신저",
                desc: "언제 어디서나 모든 장치에서 지원하는 실시간 기업용 커뮤니케이션입니다.",
              },
              {
                image: "/img/solution/organi.png",
                title: "기업 조직도",
                desc: "기업 문화를 반영하는 부서/조직체계로 협업합니다.",
              },
              {
                image: "/img/solution/timeline.png",
                title: "타임라인",
                desc: "내가 언제 무엇을 했는지 알려주고 일정을 계획할 수 있도록 제시합니다.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow text-center">
                <div className="w-30 h-30 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                  <img src={feature.image} alt={feature.title} className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 object-contain" />
                </div>
                <h3 className="text-base sm:text-lg md:text-2xl font-bold mb-2 sm:mb-3 text-blue-700">{feature.title}</h3>
                <p className="text-xs sm:text-sm md:text-lg text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
