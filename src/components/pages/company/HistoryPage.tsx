"use client"

import { PageBanner } from "../../common/PageBanner"
import { TabButton } from "../../common/TabButton"
import { TimelineSection } from "../../common/TimelineSection"
import { useTabState } from "../../../hooks/useTabState"
import { history1, reference } from "../../../data/company/historyData"

export default function HistoryPage() {
  const { activeTab, setActiveTab } = useTabState<"history" | "reference">("history")

  const tabs = [
    { id: "history" as const, label: "History", data: history1 },
    { id: "reference" as const, label: "Reference", data: reference },
  ]

  const currentData = tabs.find((t) => t.id === activeTab)?.data || history1

  return (
    <div className="pt-48 min-h-screen bg-gray-50">
      <PageBanner
        title="연혁"
        description="새움소프트의 발자취를 통해 20년의 역사를 살펴보세요"
        backgroundImage="/img/page_Banner_img/common_background.png"
      />

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* 탭 버튼 */}
        <div className="flex gap-4 mb-12">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>

        {/* 콘텐츠 */}
        <div className="space-y-16">
          {Object.entries(currentData).map(([period, items], index) => (
            <TimelineSection key={index} period={period} items={items as any} />
          ))}
        </div>
      </div>
    </div>
  )
}
