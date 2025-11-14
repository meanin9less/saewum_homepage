import { PageBanner } from "../../common/PageBanner"

export default function CEOPage() {
  return (
    <div className="pt-48 min-h-screen">
      <PageBanner
        title="CEO 인사말"
        description='늘 새로운 가능성에 도전하며 "할수있다"는 열정과 창의적 사고로 반드시 목표를 지향합니다.'
        backgroundImage="/img/page_Banner_img/common_background.png"
      />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">반갑습니다. 새움소프트 대표 최병진입니다.</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img src="/img/company/ceo_img/ceo_black.png" alt="CEO" className="w-full max-w-md mx-auto rounded-lg shadow-lg" />
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              새움소프트는 늘 새로운 가능성에 도전하며 할수있다는 열정과 창의적 사고로 매사에 임하고 있습니다.
            </p>

            <p className="leading-relaxed">
              솔루션 개발사업, 연구개발사업, 시스템통합, IT컨설팅 사업 등 다양한 분야에서 기술과 경험으로 기업의 협업과
              소통을 위한 다양한 기술과 프로젝트 경험을 가진 전문 업체로 자리잡고 있습니다.
            </p>

            <p className="leading-relaxed">
              이는 오랜 20여년 이라는 시간이 흐르는 동안 저희가 쌓은 IT 기업이라는 자부심을 바탕으로 고객과의 소통을
              위한 다양한 기술과 프로젝트 경험을 가진 전문 업체로 거듭나 있습니다. 새움소프트는 목표와 비전을 뚜렷이
              담아가며 성장을 이룩해 나가고자 합니다.
            </p>

            <p className="leading-relaxed">
              열정과 도전을 가지고 이제 새움소프트는 글로벌 기업으로 발전하고자 합니다. 끊적히 변화하는 환경 속에서
              고객의 의견들의 신뢰를 가지고 최상의 서비스와 기술을 제공하며 한다.
            </p>

            <p className="leading-relaxed">
              고객으로부터 전정으로 신뢰를 받고, 경보법인가술을 연구개발에 박차를 가하여 글로 별기업으로 발전해 나가기
              위해 끊임없이 노력을 하겠습니다.
            </p>

            <p className="leading-relaxed font-bold">감사합니다.</p>
          </div>
        </div>

        <div className="text-right">
          <img src="/img/company/ceo_img/ceodesc.png" alt="CEO Signature" className="w-64 ml-auto" />
        </div>
      </div>
    </div>
  )
}
