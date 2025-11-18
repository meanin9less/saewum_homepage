import { useEffect, useRef, useState } from 'react'
import { YouTubeEmbed } from '../../common/YouTubeEmbed'
import { Link } from 'react-router-dom'

export default function AnytalkPage() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false])
  const textRef = useRef<HTMLDivElement | null>(null)
  const [textVisible, setTextVisible] = useState(false)

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
              <img src="/img/solution/anytalkLogoColor.png" alt="anytalk logo" className="w-full h-auto object-contain" />
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
        <div className="w-full md:w-1/2 px-6 sm:px-8 py-12 sm:py-16 md:py-20 relative min-h-[500px] md:min-h-auto">
            <img
              src="/img/solution/anytalk_mock_2_edit-cutout.png"
              alt="anytalk mockup"
              className="w-full h-full"
            />

        </div>
      </div>

      <div className="w-full min-h-auto md:min-h-[600px] flex flex-col md:flex-row items-stretch">
        {/* 좌측 텍스트 */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 bg-white px-6 sm:px-8 md:px-12 py-8 sm:py-12 md:py-20 flex flex-col justify-center">
          <p className={`text-base sm:text-xl md:text-3xl font-bold text-gray-800 leading-relaxed ${textVisible ? 'text-visible' : 'opacity-0'}`}>
            애니톡은 복잡하고 비합리적인 AI 서비스를<br />
            혁신하기 위해 출발했습니다.
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

      {/* 모바일 전용 - 다른 서비스 링크 */}
      <div className="md:hidden bg-white py-8 sm:py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <h3 className="text-lg sm:text-xl font-bold text-center mb-6 text-gray-800">다른 서비스가 궁금하다면?</h3>
          <div className="space-y-3">
            <Link
              to="/solutions/officeon"
              className="block w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
            >
              OfficeON 보기
            </Link>
            <Link
              to="/solutions/apt123"
              className="block w-full py-3 px-4 bg-blue-600 text-white rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors"
            >
              아파트123 보기
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-teal-50 py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 text-center">
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4 sm:mb-6">
            기업의 업무 지식을 스마트하게 관리하고 모든 직원들이 쉽고 빠르게 필요한 정보를 바탕으로 소통할 수 있게 만드는 AI 챗봇입니다.
          </p>
          <a
            href="https://anytalk.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-semibold text-sm sm:text-base"
          >
            자세히 알아보기 →
          </a>
        </div>
      </div>
    </div>
  )
}
