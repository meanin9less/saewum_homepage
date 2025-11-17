"use client"

import { useState } from "react"
import { useLocation, Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const mainMenus = [
  {
    name: "회사소개",
    path: "/company",
    subMenus: [
      { name: "회사소개", path: "/company" },
      { name: "CEO인사말", path: "/company/ceo" },
      { name: "연혁", path: "/company/history" },
      { name: "프로그램 및 인증", path: "/company/certification" },
      { name: "조직구성", path: "/company/organization" },
      { name: "찾아오시는길", path: "/company/location" },
      { name: "회사소식", path: "/company/news" },
    ],
  },
  {
    name: "혁신",
    path: "/innovation",
    subMenus: [
      { name: "혁신의 시작", path: "/innovation" },
      { name: "나아가는 방향", path: "/innovation/goal" },
      { name: "ICL연구소 이야기", path: "/innovation/icl-story" },
      { name: "기술의 사회기여", path: "/innovation/contribution" },
    ],
  },
  {
    name: "솔루션",
    path: "/solutions",
    subMenus: [
      { name: "애니톡", path: "/solutions" },
      { name: "오피스온", path: "/solutions/officeon" },
      { name: "아파트123", path: "/solutions/apt123" },
    ],
  },
  { name: "문의하기", path: "/contact", subMenus: [] },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const getActiveMainMenu = () => {
    return mainMenus.find((menu) => location.pathname.startsWith(menu.path))
  }

  const activeMainMenu = getActiveMainMenu()

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      {/* Main Menu */}
      <div className="border-b">
        <div className="w-full px-3 md:px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center z-10 flex-shrink-0">
              <span className="text-2xl sm:text-3xl md:text-5xl font-bold leading-none whitespace-nowrap">
                <span className="text-gray-800">Saeum</span>
                <span className="text-blue-500">Soft</span>
              </span>
            </Link>

            {/* Desktop Menu - Hidden on mobile */}
            <nav className="hidden md:flex gap-8 lg:gap-12 xl:gap-16 items-center h-full absolute left-1/2 transform -translate-x-1/2">
              {mainMenus.map((menu) => (
                <div
                  key={menu.name}
                  className="h-full flex items-center relative group"
                >
                  <Link
                    to={menu.path}
                    className={`text-xl lg:text-2xl font-black ${
                      location.pathname.startsWith(menu.path) ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {menu.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden z-10 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 border-b max-h-[calc(100vh-80px)] overflow-y-auto backdrop-blur-sm">
          <nav className="px-3 md:px-4 py-4">
            {mainMenus.map((menu) => (
              <div key={menu.name} className="mb-4">
                <Link
                  to={menu.path}
                  className={`block text-xl font-bold py-2 ${
                    location.pathname.startsWith(menu.path) ? "text-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {menu.name}
                </Link>
                {menu.subMenus.length > 0 && (
                  <div className="ml-4 mt-2 space-y-2">
                    {menu.subMenus.map((subMenu, index) => (
                      <Link
                        key={index}
                        to={subMenu.path}
                        className="block text-base font-medium text-gray-600 py-1 hover:text-blue-600"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subMenu.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sub Menu - Hidden on mobile */}
      {activeMainMenu && activeMainMenu.subMenus.length > 0 && (
        <div className="hidden md:block bg-gray-50/95 border-b backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <div className="flex gap-4 md:gap-6 lg:gap-8 h-14 md:h-16 items-center justify-center flex-wrap">
              {activeMainMenu.subMenus.map((subMenu, index) => (
                <Link
                  key={index}
                  to={subMenu.path}
                  className="text-base md:text-lg font-semibold text-gray-600 hover:text-blue-600"
                >
                  {subMenu.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

    </header>
  )
}
