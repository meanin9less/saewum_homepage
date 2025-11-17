interface TimelineItem {
  item: string
}

interface TimelineSectionProps {
  period: string
  items: TimelineItem[]
}

export function TimelineSection({ period, items }: TimelineSectionProps) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-4xl md:text-7xl font-bold text-gray-300 mb-6 md:mb-12 text-center">{period}</h2>
      <div className="relative border-l-2 border-blue-400 pl-6 md:pl-8 space-y-4 md:space-y-6 w-full max-w-3xl">
        {items.map((itemObj, itemIndex) => (
          <div key={itemIndex} className="relative">
            <div className="absolute -left-9 md:-left-10 w-3 md:w-4 h-3 md:h-4 bg-blue-600 rounded-full border-2 md:border-4 border-white"></div>
            <p className="text-xs md:text-base text-gray-700">{itemObj.item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
