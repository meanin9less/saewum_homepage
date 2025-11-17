import { PageBanner } from "../../common/PageBanner"

export default function ICLStoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="ICL 연구소 이야기" description="새움소프트 기술이는 10년 이상의 풍부한 경험이 축적되어 녹아들고 있습니다." backgroundImage="/img/page_Banner_img/common_background_inno.png" />

      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">기업문화의 지속적인 혁신과 변화를</h2>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">추구한 기술력으로 기업의 가치를 높이고 있습니다.</h2>
        </div>

        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {/* Section 1 - Normal order */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex-shrink-0 w-full md:w-80 order-2 md:order-1">
              <img src="/img/innovation/friend.png" alt="ICL Lab" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">혁신과 열정으로 미래에 도전하는 사람들</h3>
              <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-3 sm:mb-6" />
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                혁신은 이곳에서 이루어집니다. 전세계 어디에서도 이곳 사람들처럼 기업인프라를 개선하는 일을 반복하는 사람들은 없습니다. 이는 모든 것에 질문을 던지는 호기심과 재능을 갖고 있는 열정적인 엔지니어와 디자인, 기획팀에서부터 시작합니다. ICL(INNOVATION CONCEPT LAB)은 새움소프트의 가장 새롭고 대담하며, 파격적인 아이디어가 탄생하는 곳입니다. 이 연구소의 임무는 "왜 그런가"와 "왜 안 되는가"를 묻고, 늘 혁신적인 방식으로 이 질문에 대해 답변을 제시하는 것입니다.이렇게 새움인은 혁신과 열정으로 미래에 도전하고 있습니다.
              </p>
            </div>
          </div>
유
          {/* Section 2 - Reversed order */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
            <div className="order-1 md:order-1">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">열린 마음으로 소통하는 연구소</h3>
              <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-3 sm:mb-6" />
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                ICL연구원들은 항상 긍정적인 태도와 열린 마음으로 서로를 배려하고 이해하며 소통합니다. 이와 같은 긍정적인 에너지를 바탕으로 한 순수한 연구는 온전히 제품의 구현과 퍼포먼스 향상으로 이어집니다. ICL엔지니어는 연구소에서 아이디어를 곧바로 구현하고 테스트 합니다. 이러한 과정을 거치며 Office On뿐만 아니라 HybriC, Office Work, Company Talk까지 이곳 ICL 에서 탄생했습니다.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-80 order-2 md:order-2">
              <img src="/img/innovation/friend1.png" alt="Development" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          {/* Section 3 - Normal order */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex-shrink-0 w-full md:w-80 order-2 md:order-1">
              <img src="/img/innovation/friend2.png" alt="Team Work" className="w-full rounded-lg shadow-lg" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4">열정과 창조로 새상을 변화시키는 기술자팀</h3>
              <div className="w-12 sm:w-16 h-1 bg-blue-600 mb-3 sm:mb-6" />
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                새움소프트의 기술자팀은 지금 이순간에도 끊임없이 아이디어를 내놓고 있습니다. 대부분의 소프트웨어 회사들이 외부 제품과 짜깁기를 하거나 업무기능을 외부에 의뢰하지만, 새움소프트는 다른 이들의 작업에 만족하지 않습니다. 그렇기 때문에 모든 아이디어와 기능, 디자인은 업계최고의 정밀한 Office On 플랫폼 안에서 개발되고 테스트하여 인증합니다. 이런 혁신적인 기능들은 열정적이고 창조적인 기술자 팀이 책임지고 있습니다. 이들은 편리함부터 시작해서 소통, 협업, 안정성, 퍼포먼스에 이르기 까지 모든 가능성에 전력을 다하고 있습니다. 새움소프트에는 이런 팀이 있고 우리는 이들의 방식을 좋아합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
