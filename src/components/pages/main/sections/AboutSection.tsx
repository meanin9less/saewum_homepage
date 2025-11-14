export function AboutSection() {
  return (
    <section
      className="h-screen relative flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/img/main/aboutSection/section2_bg.jpg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          
        </div>
        <div>
          <img src="/img/main/aboutSection/saeum_since2015.png" alt="Saeum Soft" className="mb-6 h-20" />
          <p className="text-lg mb-6">
            변화하신을 바탕으로 새움소프트의
            <br />
            기술력은 세계를 향해 나아갑니다.
          </p>
          <img src="/img/main/aboutSection/bar.png" alt="bar" className="mb-6 h-1" />
          <p className="text-gray-600 mb-8">
            새움소프트는 글로벌한 기업 변화를 선도하는 소프트웨어 개발을 주도 수행하여 한국 및 해외 시장을 준비합니다.
            고객의 업무 로드를 줄여드리고 선제적 대응을 가능케 하여 신뢰를 쌓아드립니다.
          </p>
          <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">
            더 알아보기 →
          </button>
        </div>
      </div>
    </section>
  )
}