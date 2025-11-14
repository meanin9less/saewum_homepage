interface TabButtonProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-bold text-lg rounded-lg transition-colors ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  )
}
