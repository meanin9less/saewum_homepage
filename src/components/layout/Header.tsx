"use client"

import { useState } from "react"
import { useLocation, Link } from "react-router-dom"

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
      { name: "컴피니톡", path: "/solutions/josa" },
    ],
  },
  { name: "문의하기", path: "/contact", subMenus: [] },
]

export function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const location = useLocation()

  const getActiveMainMenu = () => {
    return mainMenus.find((menu) => location.pathname.startsWith(menu.path))
  }

  const activeMainMenu = getActiveMainMenu()
  const showSubMenu =
    (hoveredMenu && mainMenus.find((m) => m.name === hoveredMenu)?.subMenus.length) ||
    (activeMainMenu && activeMainMenu.subMenus.length > 0)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      {/* Main Menu */}
      <div className="border-b">
        <div className="w-full px-4">
          <div className="flex items-center h-28 relative">
            {/* Logo - Left */}
            <Link to="/" className="flex items-center absolute left-4">
              <span className="text-5xl font-bold">
                <span className="text-gray-800">Saeum</span>
                <span className="text-blue-500">Soft</span>
              </span>
            </Link>

            {/* Menu - Center */}
            <nav className="flex gap-16 absolute left-1/2 transform -translate-x-1/2">
              {mainMenus.map((menu) => (
                <Link
                  key={menu.name}
                  to={menu.path}
                  className={`text-2xl font-black transition-colors hover:text-blue-600 ${
                    location.pathname.startsWith(menu.path) ? "text-blue-600" : "text-gray-700"
                  }`}
                  onMouseEnter={() => setHoveredMenu(menu.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {menu.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Sub Menu */}
      {showSubMenu && (
        <div
          className="bg-gray-50 border-b"
          onMouseLeave={() => setHoveredMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-8 h-20 items-center justify-center">
              {(hoveredMenu ? mainMenus.find((m) => m.name === hoveredMenu)?.subMenus : activeMainMenu?.subMenus)?.map(
                (subMenu, index) => (
                  <Link
                    key={index}
                    to={subMenu.path}
                    className="text-lg text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {subMenu.name}
                  </Link>
                ),
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
