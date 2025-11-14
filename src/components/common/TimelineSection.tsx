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
      <h2 className="text-7xl font-bold text-gray-300 mb-12 text-center">{period}</h2>
      <div className="relative border-l-2 border-blue-400 pl-8 space-y-6 w-full max-w-3xl">
        {items.map((itemObj, itemIndex) => (
          <div key={itemIndex} className="relative">
            <div className="absolute -left-10 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
            <p className="text-gray-700">{itemObj.item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
