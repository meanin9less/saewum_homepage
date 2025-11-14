import { useState } from "react"

export function useTabState<T extends string>(defaultTab: T) {
  const [activeTab, setActiveTab] = useState<T>(defaultTab)
  return { activeTab, setActiveTab }
}
