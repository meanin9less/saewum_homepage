import { PageBanner } from "../../common/PageBanner"

export default function ICLStoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageBanner title="ICL 연구소 이야기" description="새움소프트 기술이는 10년 이상의 풍부한 경험이 축적되어 녹아들고 있습니다." backgroundImage="/img/page_Banner_img/common_background_inno.png" />

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">기업문화의 지속적인 혁신과 변화를</h2>
          <h2 className="text-3xl font-bold text-blue-600">추구한 기술력으로 기업의 가치를 높이고 있습니다.</h2>
        </div>

        <div className="space-y-12">
          <div className="flex justify-between items-center gap-8">
            <div className="flex-shrink-0 w-80">
              <img src="/img/innovation/friend.png" alt="ICL Lab" className="w-full rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">혁신과 열정으로 미래에 도전하는 사람들</h3>
              <div className="w-16 h-1 bg-blue-600 mb-6" />
              <p className="text-gray-700 leading-relaxed">
                혁신은 이곳에서 이루어집니다. 전세계 어디에서도 이곳 사람들처럼 기업 인프라를 개념대한 사람들은
                없습니다. 이는 으뜸 20여 칼런드 되이상업 연행업 있는 사람들이 축적 지식만 보연 우성에 이곳 사람들의
                열정도 대단합니다. ICL(INNOVATION CONCEPT LAB)은 새움소프트의 가장 새로 더위하여, 과적외의 이러이마가
                단성하는 곳입니다. 이 연구소의 일드는 "전 그리기"와 "획 반 되도가" 불 눞고, 협 획식적인 방식으로 일 하며
                대응합니다.이곳 새움인은 열정으로 미래에 도전하고 있습니다.
              </p>
            </div>
          </div>

          <div className="flex justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">열린 마음으로 소통하는 연구소</h3>
              <div className="w-16 h-1 bg-blue-600 mb-6" />
              <p className="text-gray-700 leading-relaxed">
                ICL연구원들은 한상 궁정적인 테도의 열린 마음으로 서로를 배려하고 이해 하며 소통합니다. 이와 같은
                궁정적인 에너지의 비결은 온직의 게속와 구협의 프로세스 합니다. 이러한 과정을 가서하며 Office On은 아니면
                hybriC, Office Work, Company Talk까지 이곳 ICL 에서 탄생합니다.
              </p>
            </div>
            <div className="flex-shrink-0 w-80">
              <img src="/img/innovation/friend1.png" alt="Development" className="w-full rounded-lg shadow-lg" />
            </div>
          </div>

          <div className="flex justify-between items-center gap-8">
            <div className="flex-shrink-0 w-80">
              <img src="/img/innovation/friend2.png" alt="Team Work" className="w-full rounded-lg shadow-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">열정과 창조로 새상을 변화시키는 기술자팀</h3>
              <div className="w-16 h-1 bg-blue-600 mb-6" />
              <p className="text-gray-700 leading-relaxed">
                새움소프트의 가술자는 자곧 이곧치만도 궁일읜의 이러이마를 내놓고 있습니다. 대부분의 스드프웨어 회사들이
                외부 개발업 도입으며 의파리하여, 새움스프트는 다른 이들의 직업이 만들어 가업습니다. 남들이 웨도히 도도
                이러이마의 기술, 디자인은 업저고고 각자의 일화습니다. 그러기 위코해서 도는 이러이마를 내리기 위해
                개발진고, 디자인은은 과업고, Office On 플랫폼 인에어 개발되고 테스트하며 인웃하고 있습니다. 이들은
                관리협양에서 시체에 소호, 닫업, 인경상, 피오업스에 까지 끼지 모든 기능성에 광범위 접업를 추진하고
                있습니다. 새움소프트에는 이런 팀이 있고 우리는 이들의 업성을 좋아합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
