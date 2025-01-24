import React from "react"
import { Twitter } from "lucide-react"

export function TestimonialCard({
  username,
  handle,
  content,
  isLarge,
  isFocused,
  shouldBlur,
  onFocus,
  onBlur,
}) {
  return (
    <div
      className={`
        bg-[#16181c] rounded-2xl p-6 
        w-[400px] ${isLarge ? "h-[220px]" : "h-[140px]"}
        transform transition-all duration-300
        ${isFocused ? "scale-105 z-10" : "scale-100"}
        ${shouldBlur ? "blur-[3px]" : ""}
        border border-gray-800 overflow-hidden
      `}
      onMouseEnter={onFocus}
      onMouseLeave={onBlur}
    >
      <div className="flex items-start gap-3">
        {/* Avatar removed */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#e7e9ea] font-semibold text-[15px]">{username}</p>
              <p className="text-[#71767b] text-[15px]">{handle}</p>
            </div>
            <Twitter className="w-5 h-5 text-[#71767b]" />
          </div>
          <p className={`text-[#e7e9ea] mt-3 text-[15px] leading-normal ${isLarge ? "line-clamp-5" : "line-clamp-2"}`}>
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
