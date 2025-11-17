import { PageBanner } from "../../common/PageBanner"

export default function OfficeONPage() {
  return (
    <div className="min-h-screen">
      <PageBanner
        title="OfficeON"
        description="언제 어디서나 협업을 통한 업무 생산성을 향상시킬 수 있는 구축형 그룹웨어입니다."
        backgroundImage="/img/page_Banner_img/common_background_solution.png"
        contentImage="/img/solution/officeonLogo.png"
      />

      <div className="bg-blue-50 py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
            언제 어디서나 협업을 통한 업무 생산성을 향상시킬수 있는 구축형 그룹웨어입니다.
          </p>
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm sm:text-base">
            자세히 알아보기 →
          </button>
        </div>
      </div>

      <div className="py-4 sm:py-6 md:py-8 flex flex-col items-center justify-center max-w-2xl mx-auto px-3 sm:px-4">
        <img src="/img/solution/officeonLogoColor.png" alt="officeon" className="h-24 sm:h-32 md:h-40 object-contain mb-2 sm:mb-3" />
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600 text-center">실시간 협업의 컨버젼스 그룹웨어</p>
      </div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <img src="/img/solution/officeon_bg1.png" alt="officeon" className="w-full h-32 sm:h-48 md:h-[28rem] object-contain rounded-lg shadow-lg" />
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center">
            오피스 3.0은 기존 그룹웨어의 기능은 실시간 협업과 컨텐츠컨버젼스<br />
            활용으로당신의 업무에 편안함과 신뢰를 더합니다.
          </p>
        </div>

        <div className="mb-12 sm:mb-16">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-8 sm:mb-12">언제 어디서나 편리한 기능</h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { image: "/img/solution/mail.png", title: "메일", desc: "메일 관리하여 신뢰성을 높입니다." },
              { image: "/img/solution/addrbook.png", title: "주소록", desc: "통합 주 있는 실무관리를 합니다." },
              { image: "/img/solution/calender.png", title: "일정관리", desc: "일정과 전체 협업을 구성합니다." },
              { image: "/img/solution/comunity.png", title: "커뮤니티", desc: "게시판을 만들어 구성원 간의 소통을 할 수 있습니다." },
              {
                image: "/img/solution/filedrive.png",
                title: "파일 드라이브",
                desc: "내 PC와 스마트폰의 파일들을 클라우드에 백업하며업 관리합니다.",
              },
              { image: "/img/solution/onlineSign.png", title: "전자결재", desc: "체계적인 의사결정을 위한 구성원의 승인을 공유" },
              { image: "/img/solution/mobile.png", title: "모바일", desc: "언제 어디서나 업무 지능적 관리를 모바일(Android, iOS 모두지원)" },
              {
                image: "/img/solution/conversion.png",
                title: "컨버전스",
                desc: "중요한 주소, 일정, 메일, 채팅, 결재서류 등 하나의 계정안에 모든 것",
              },
              {
                image: "/img/solution/multi.png",
                title: "멀티포탈",
                desc: "워크 스테이션, 포렌식 및, 각자의 작업공간을 개시 수 있도록 제시합니다.",
              },
              {
                image: "/img/solution/messenser.png",
                title: "메신저",
                desc: "언제 어디서나 모든 조직에서 지원하는 실시 간 기업용 커뮤니케이션 도구",
              },
              {
                image: "/img/solution/organi.png",
                title: "기록 포텐노",
                desc: "기업 단위를 바탕으로 투자 / 조직재건로 템플릿 수 있도록, 제시합니다",
              },
              {
                image: "/img/solution/timeline.png",
                title: "타임라인",
                desc: "내가 업수 또는 협트를 하는 모든 업무를 개 획득 수 있도록 제시합니다.",
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
