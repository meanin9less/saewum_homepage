import { useEffect, useRef, useState } from 'react'
import { YouTubeEmbed } from '../../common/YouTubeEmbed'
import { Link } from 'react-router-dom'

export default function AnytalkPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false])
  const textRef = useRef<HTMLDivElement | null>(null)
  const [textVisible, setTextVisible] = useState(false)

  const useCaseScenarios = [
    {
      label: "공공기관 및 지자체",
      headline: "공공 서비스 최적화 및 민원 처리 자동화",
      description: "공공기관의 민원, 포털 도우미 서비스 제공을 자동화하여 행정 효율성과 시민 만족도를 극대화하는 스마트 챗봇 솔루션 입니다.",
      bullets: [],
    },
    {
      label: "기업",
      headline: "비즈니스 성과 향상과 효율적 운영 지원",
      description: "고객 응대 시스템 최적화와 내부 업무 효율화로 기업 운영 성과를 극대화하는 맞춤형 솔루션 입니다.",
      bullets: [],
    },
    {
      label: "병원 및 학원",
      headline: "병원 고객과 학생을 위한 스마트 솔루션",
      description: "예약 시스템을 신속하고 정확하게 처리하며, 병원 업무 및 예약현황 관리와 학생들의 강의 상담과 일정표 관리를 강화합니다.",
      bullets: [],
    },
    {
      label: "로봇",
      headline: "로봇과 연동된 지능형 자동화 서비스 제공",
      description: "AI 로봇 솔루션으로 자동화된 고객 응대와 정보 제공을 실현해 인텔리전트한 비즈니스 환경을 구축합니다.",
      bullets: [],
    },
    {
      label: "키오스크",
      headline: "무인 키오스크와의 통합 고객 경험 솔루션",
      description: "키오스크에서 고객이 쉽게 정보를 탐색하고, 주문을 신속 처리하도록 지원해 고객 경험을 향상시킵니다.",
      bullets: [],
    },
    {
      label: "소상공인",
      headline: "소상공인을 위한 맞춤형 고객 서비스 도우미",
      description: "소상공인이 고객 응대와 정보 제공을 효과적으로 할 수 있도록 돕고, 매장 운영을 효율화하는 맞춤형 챗봇 솔루션입니다.",
      bullets: [],
    },
  ]

  const [activeUseCaseIndex, setActiveUseCaseIndex] = useState(0)
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(0)
  const activeUseCase = useCaseScenarios[activeUseCaseIndex]

  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes slideInFromRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .slide-in-card-visible {
        animation: slideInFromRight 0.6s ease-out forwards;
      }
      .slide-in-card-visible:nth-child(1) { animation-delay: 0.1s; }
      .slide-in-card-visible:nth-child(2) { animation-delay: 0.2s; }
      .slide-in-card-visible:nth-child(3) { animation-delay: 0.3s; }
      .slide-in-card-visible:nth-child(4) { animation-delay: 0.4s; }
      .text-visible {
        animation: fadeInUp 1s ease-out forwards;
      }
    `
    document.head.appendChild(style)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === textRef.current) {
            setTextVisible(entry.isIntersecting)
            return
          }
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement)
          if (index !== -1) {
            setVisibleCards((prev) => {
              const newState = [...prev]
              newState[index] = entry.isIntersecting
              return newState
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (textRef.current) {
      observer.observe(textRef.current)
    }
    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="min-h-screen md:pt-16">

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
            <div className="mb-4 sm:mb-6 w-48 sm:w-56 md:w-64">
              <img src="/img/solution/anytalkLogo.png" alt="anytalk logo" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                기업 전용 차세대 생성형 AI챗봇 서비스
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Knowledge Base의 가치를 AI로 높이세요
              </p>
            </div>
            <a
              href="/contact"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-teal-600 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              자세히 알아보기
            </a>
          </div>
        </div>

        {/* 우측 이미지 영역 */}
        <div className="w-full md:w-1/2 px-6 sm:px-8 py-12 sm:py-16 md:py-20 relative min-h-[300px] md:min-h-auto">
            <img
              src="/img/solution/anytalk_mock_2_edit-cutout.png"
              alt="anytalk mockup"
              className="w-full h-full"
            />

        </div>
      </div>

      <section className="w-full bg-white py-10 sm:py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex-1 space-y-4 sm:space-y-6">
            <p className="inline-flex items-center gap-3 text-sm font-semibold text-teal-600 tracking-widest uppercase">
              <img src="/img/solution/gs-logo.png" alt="GS 인증" className="w-8 h-8 object-contain" />
              <span>GS Certified</span>
              <span className="h-1 w-1 rounded-full bg-teal-500 inline-block" />
              <span>1등급 품질</span>
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              까다로운 국가 품질 기준 통과,<br className="hidden sm:block" />믿을 수 있는 AI 챗봇 애니톡
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              GS 인증 1등급은 기능 적합성, 성능, 사용성, 보안성 등 국제 표준 기준을 모두 충족할 때만 부여되는 소프트웨어 품질의 최고 등급입니다.
            </p>
          </div>
          <div className="flex-1 w-full max-w-xl mx-auto flex items-center justify-center">
            <img src="/img/solution/gslogo_new.png" alt="GS 인증 1등급 로고" className="w-48 sm:w-56 md:w-64 object-contain" />
          </div>
        </div>
      </section>

      <div className="w-full min-h-auto md:min-h-[600px] flex flex-col md:flex-row items-stretch">
        {/* 좌측 텍스트 */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 bg-white px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-20 flex flex-col justify-center space-y-8">
            <div className="flex justify-center">
              <img src="/img/solution/anytalkLogoColor.png" alt="anytalk logo" className="w-40 sm:w-52 md:w-96 h-auto object-contain" />
            </div>
          <p className={`text-base sm:text-xl md:text-3xl font-bold text-gray-800 leading-relaxed text-center ${textVisible ? 'text-visible' : 'opacity-0'}`}>
대화를 통해 스스로 학습하는 애니톡과 함께 당신의 비즈니스를 더욱 스마트하게 만들어 보세요!<br></br><br></br>
애니톡은 기업 문서 활용, 음성 대화, 맞춤 정보 제공, 글로벌 소통 등을 지원합니다.
          </p>

        </div>

        {/* 우측 기능 카드 */}
        <div className="w-full md:w-1/2 bg-white px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-20">
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: "다양한 데이터 타입 자동분석",
                description: "PDF, 엑셀, 도메인 기반 웹 수집 등 다양한 데이터를 분석해 답변을 제공합니다.",
                icon: "01"
              },
              {
                title: "글로벌 다국어 지원 가능",
                description: "영어, 일본어, 중국어, 베트남어, 스페인어 등 다국어 지원으로 글로벌 고객과 소통합니다.",
                icon: "02"
              },
              {
                title: "조직 특화 LLM 솔루션 제공",
                description: "업무 규약, 상품 설명 지침 등 조직 필요에 맞춘 최적의 AI 솔루션을 제공합니다.",
                icon: "03"
              },
              {
                title: "맞춤형 서비스 설계",
                description: "그룹웨어, ERP, CRM, MES 등 기업 상황과 목적에 따라 세부 기능 커스텀 개발 지원",
                icon: "04"
              },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-teal-500 ${visibleCards[index] ? 'slide-in-card-visible' : 'opacity-0'}`}
              >
                <div className="flex gap-4 items-start">
                  {/* 숫자 뱃지 */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-lg sm:text-xl font-bold text-white">{item.icon}</span>
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-4">
          <YouTubeEmbed videoId="8HiI3JBlVR0" title="Anytalk Video" />
        </div>
      </div>

      <div className="w-full py-12 sm:py-16 md:py-20 text-gray-900">
        <div className="max-w-6xl mx-auto px-4 space-y-10">
          <div className="md:hidden space-y-5">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-400">Use Case</p>
              <h3 className="text-2xl font-black leading-snug text-gray-900">Anytalk이 활약하는 산업</h3>
            </div>
            <div className="space-y-4">
              {useCaseScenarios.map((scenario, index) => {
                const isOpen = mobileOpenIndex === index
                return (
                  <div key={scenario.label} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                    <button
                      type="button"
                      onClick={() => {
                        setMobileOpenIndex(isOpen ? null : index)
                        setActiveUseCaseIndex(index)
                      }}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <div>
                        <span className="block text-[0.65rem] tracking-[0.5em] uppercase text-gray-400 mb-1">
                          {/* {index + 1 < 10 ? `0${index + 1}` : index + 1} */}case
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-gray-900">{scenario.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-gray-500">{isOpen ? "−" : "+"}</span>
                    </button>
                    <div
                      className={`px-5 pb-5 space-y-4 text-gray-700 transition-all duration-300 ease-out ${
                        isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                      style={{ overflow: "hidden" }}
                    >
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-teal-500 mb-1">Insight</p>
                        <h4 className="text-xl font-extrabold text-gray-900 mb-2">{scenario.headline}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{scenario.description}</p>
                      </div>
                      <div className="flex gap-2 pt-4 mt-4 border-t border-gray-200">
                        <a
                          href="/contact"
                          className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg font-bold text-sm hover:bg-teal-700 transition-colors duration-200 text-center"
                        >
                          문의하기
                        </a>
                        <a
                          href="https://anytalk.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 px-4 py-2 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-bold text-sm hover:bg-teal-50 transition-colors duration-200 text-center"
                        >
                          자세히 보기 →
                        </a>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="hidden md:flex md:flex-row gap-10 md:gap-14">
            <div className="md:w-5/12 flex flex-col gap-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-gray-400">Use Case</p>
              <h3 className="text-2xl sm:text-3xl font-black leading-snug text-gray-900">Anytalk이 활약하는 산업</h3>
              <div className="flex flex-col divide-y divide-gray-200 border-y border-gray-200">
                {useCaseScenarios.map((scenario, index) => {
                  const isActive = index === activeUseCaseIndex
                  return (
                    <button
                      key={scenario.label}
                      type="button"
                      onClick={() => setActiveUseCaseIndex(index)}
                      className={`text-left py-4 transition-colors duration-200 ${
                        isActive ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <span className="block text-[0.65rem] sm:text-xs tracking-[0.5em] uppercase mb-1">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <span className="text-xl sm:text-2xl font-black">{scenario.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="md:w-7/12 bg-white text-gray-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-center items-center text-center">
              <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-teal-500 mb-2">Insight</p>
              <h4 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">{activeUseCase.headline}</h4>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">{activeUseCase.description}</p>
              <div className="flex gap-3 w-full">
                <a
                  href="/contact"
                  className="flex-1 px-6 py-3 bg-teal-600 text-white rounded-lg font-bold text-sm sm:text-base hover:bg-teal-700 transition-colors duration-200"
                >
                  문의하기
                </a>
                <a
                  href="https://anytalk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-white text-teal-600 border-2 border-teal-600 rounded-lg font-bold text-sm sm:text-base hover:bg-teal-50 transition-colors duration-200"
                >
                  자세히 알아보기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-8 sm:py-12 md:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-12 sm:mb-16">Main Service</h2>
        <div className="space-y-0">
          {[
            {
              title: "유연 지식 대화형 AI 성장",
              items: [
                "실시간 유연한 자연어 처리 및 지식 관리 기능",
                "전문가 선택적 지식 학습 및 자사화 기능",
                "자동적 지식 학습 및 구성 기능",
                "지식 검증 및 업데이트 기능",
              ],
              image: "/img/solution/anytalk_example_1.png",
            },
            {
              title: "B2B 연계 AI 플랫폼",
              items: [
                "B2B 시스템 연동 기능",
                "실시간 정보 추출 및 분석 기능",
                "다중화 인터페이스 지원 기능",
                "API/DB 워크 플로우 자동화 기능",
              ],
              image: "/img/solution/anytalk_example_2.png",
            },
            {
              title: "로봇 응답 대화 기능 엔진",
              items: [
                "지능형 프로젝트 인터페이스",
                "다중 언어 표준화 기능",
                "AI 정보 통합 시스템",
                "통합 디바이스 출력양 관리",
              ],
              image: "/img/solution/anytalk_example_3.png",
            },
            {
              title: "키오스크 AI 메뉴 추천",
              items: [
                "다양한 추천 가이드 기능",
                "멀티모달 지원 기능",
                "비대면 결제 및 영수증 관리",
                "시간 유형별로 최적 검색 안내 기능",
              ],
              image: "/img/solution/anytalk_example_4.png",
            },
          ].map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={index}
                className={`w-full min-h-auto md:min-h-[600px] flex flex-col ${isReversed ? "md:flex-row-reverse" : "md:flex-row"} items-stretch`}
              >
                {/* 이미지 영역 */}
                <div className="w-full md:w-1/2 bg-white px-6 sm:px-8 md:px-12 py-6 sm:py-12 md:py-20 flex items-center justify-center min-h-[250px] md:min-h-auto">
                  <div className="w-full h-48 sm:h-64 md:h-[28rem] rounded-2xl overflow-hidden shadow-lg">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* 텍스트 영역 */}
                <div className={`w-full md:w-1/2 bg-white px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-20 flex flex-col justify-center ${isReversed ? "items-end" : ""}`}>
                  <div className={isReversed ? "text-right" : ""}>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 mb-6 sm:mb-8">
                      {item.title}
                    </h3>
                    <ul className={`space-y-3 sm:space-y-4 ${isReversed ? "flex flex-col items-end" : ""}`}>
                      {item.items.map((listItem, i) => (
                        <li key={i} className={`flex items-start gap-3 ${isReversed ? "flex-row-reverse" : ""}`}>
                          <span className="text-teal-600 mr-2 flex-shrink-0 text-lg">✓</span>
                          <span className="text-base sm:text-lg text-gray-700 leading-relaxed">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA 카드 */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 sm:p-12 mx-6 sm:mx-8 md:mx-0 md:rounded-none mb-8 md:mb-0 flex flex-col justify-center items-center text-center text-white space-y-6 md:py-16">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
            애니톡과 함께<br />스마트한 AI 챗봇을<br />시작하세요
          </h3>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-teal-100">
            기업의 업무 지식을 스마트하게 관리하고<br />모든 직원들이 쉽고 빠르게 소통하세요
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
          <a
            href="/contact"
            className="px-6 sm:px-8 py-3 bg-white text-teal-600 rounded-lg font-bold text-sm sm:text-base hover:bg-teal-50 transition-colors duration-200"
          >
            문의하기
          </a>
          <a
            href="https://anytalk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-8 py-3 bg-teal-500 text-white rounded-lg font-bold text-sm sm:text-base hover:bg-teal-400 transition-colors duration-200 border border-teal-400"
          >
            자세히 알아보기 →
          </a>
        </div>
      </div>

      {/* 모바일 전용 - 다른 서비스 링크 */}
      <div className="md:hidden bg-white py-8 sm:py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-6 text-gray-800">새움소프트의 또 다른 솔루션</h3>
          <div className="flex gap-4 items-center justify-center">
            <Link
              to="/solutions/officeon"
              className="flex-1 py-3 px-2 bg-white rounded-lg text-center font-semibold hover:bg-blue-50 transition-colors"
            >
              <div className="h-10 flex items-center justify-center">
                <img src="/img/solution/officeonLogoColor.png" alt="OfficeON" className="h-full object-contain" />
              </div>
            </Link>
            <Link
              to="/solutions/apt123"
              className="flex-1 py-3 px-2 bg-white rounded-lg text-center font-semibold hover:bg-blue-50 transition-colors"
            >
              <div className="h-10 flex items-center justify-center">
                <img src="/img/solution/apt123/apart123Logo.png" alt="아파트123" className="h-full object-contain" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
