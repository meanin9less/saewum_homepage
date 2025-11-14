import { Link } from "react-router-dom"

export function Footer() {
  return (
    <div className="bg-cyan-500 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Section - Company Info */}
          <div className="md:col-span-5">
            <div className="text-3xl font-bold mb-6">
              <span className="text-white">Saeum</span>
              <span className="text-white">Soft</span>
            </div>
            <div className="space-y-1 text-sm">
              <p>(주)새움소프트</p>
              <p>경기도 안양시 만안구 안양천서로 93, 새움빌딩</p>
              <p>대표이사 _ 최병진</p>
              <p>사업자 등록번호 _ 138-8125116</p>
              <p>E-mail _ sales@saeumsoft.com</p>
              <p>Tel _ 031-429-4216</p>
            </div>
          </div>

          {/* Right Section - Navigation */}
          <div className="md:col-span-7 grid grid-cols-4 gap-6">
            <div>
              <h3 className="font-bold mb-4">회사소개</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/company" className="hover:underline">
                    회사소개
                  </Link>
                </li>
                <li>
                  <Link to="/company/ceo" className="hover:underline">
                    CEO인사말
                  </Link>
                </li>
                <li>
                  <Link to="/company/history" className="hover:underline">
                    연혁
                  </Link>
                </li>
                <li>
                  <Link to="/company/certification" className="hover:underline">
                    프로그램 및 인증
                  </Link>
                </li>
                <li>
                  <Link to="/company/organization" className="hover:underline">
                    조직구성
                  </Link>
                </li>
                <li>
                  <Link to="/company/location" className="hover:underline">
                    찾아오시는길
                  </Link>
                </li>
                <li>
                  <Link to="/company/news" className="hover:underline">
                    회사소식
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">혁신</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/innovation" className="hover:underline">
                    혁신의 시작
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/icl-story" className="hover:underline">
                    ICL연구소 이야기
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/direction" className="hover:underline">
                    나아가는 방향
                  </Link>
                </li>
                <li>
                  <Link to="/innovation/contribution" className="hover:underline">
                    기술의 사회기여
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">솔루션</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/solutions/anytalk" className="hover:underline">
                    애니톡
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/officeon" className="hover:underline">
                    오피스온
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/apt123" className="hover:underline">
                    아파트123
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/josa" className="hover:underline">
                    컴피니톡
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">고객지원</h3>
              <ul className="space-y-2 text-sm mb-4">
                <li>
                  <Link to="/contact" className="hover:underline">
                    문의하기
                  </Link>
                </li>
              </ul>

              <select className="w-full bg-white/20 border border-white/30 rounded px-3 py-2 text-sm mb-4">
                <option>FAMILY SITE</option>
              </select>

              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center hover:bg-blue-800 transition-colors"
                >
                  <span className="text-white text-lg">f</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center hover:bg-yellow-500 transition-colors"
                >
                  <span className="text-gray-800 text-lg font-bold">💬</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
