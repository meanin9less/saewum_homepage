interface PageBannerProps {
  title: string
  description: string
  backgroundImage?: string
}

const bannerImages: Record<string, string> = {
  company: "/page_Banner_img/common_background.png",
  ceo: "/page_Banner_img/common_background.png",
  history: "/page_Banner_img/common_background.png",
  certification: "/page_Banner_img/common_background.png",
  organization: "/page_Banner_img/common_background.png",
  location: "/page_Banner_img/common_background.png",
  news: "/page_Banner_img/common_background.png",
  innovation: "/page_Banner_img/common_background_inno.png",
  icl: "/page_Banner_img/common_background_inno.png",
  contribution: "/page_Banner_img/common_background_inno.png",
  anytalk: "/page_Banner_img/common_background_solution.png",
  officeon: "/page_Banner_img/common_background_solution.png",
  apt123: "/page_Banner_img/common_background_solution.png",
  josa: "/page_Banner_img/common_background_solution.png",
  contact: "/page_Banner_img/common_background_contact.png",
}

export function PageBanner({
  title,
  description,
  backgroundImage,
}: PageBannerProps) {
  // backgroundImage로 직접 이미지가 전달되면 사용, 아니면 빈 배경
  const bgImage = backgroundImage || ""
  const bgStyle = bgImage
    ? {
        backgroundImage: `url("${bgImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {}

  return (
    <div
      className="relative h-64 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center"
      style={bgStyle}
    >
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  )
}

export { bannerImages }