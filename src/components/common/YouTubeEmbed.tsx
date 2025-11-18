interface YouTubeEmbedProps {
  videoId: string
  title?: string
  className?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube Video", className = "" }: YouTubeEmbedProps) {
  return (
    <div className={`w-full rounded-lg overflow-hidden shadow-lg ${className}`}>
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  )
}