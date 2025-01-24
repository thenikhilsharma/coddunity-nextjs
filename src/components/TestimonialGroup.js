import React from "react"
import { TestimonialCard } from "./TestimonialCard"

export function TestimonialGroup({ topTestimonial, bottomTestimonial, isReversed, focusedCard, onFocusCard }) {
  return (
    <div className="flex flex-col gap-4 h-[380px] w-[400px] transition-transform duration-300 ease-in-out">
      <div className={isReversed ? "order-2" : "order-1"}>
        <TestimonialCard
          {...topTestimonial}
          isLarge={!isReversed}
          isFocused={focusedCard === "top"}
          shouldBlur={focusedCard !== null && focusedCard !== "top"}
          onFocus={() => onFocusCard("top")}
          onBlur={() => onFocusCard(null)}
        />
      </div>
      <div className={isReversed ? "order-1" : "order-2"}>
        <TestimonialCard
          {...bottomTestimonial}
          isLarge={isReversed}
          isFocused={focusedCard === "bottom"}
          shouldBlur={focusedCard !== null && focusedCard !== "bottom"}
          onFocus={() => onFocusCard("bottom")}
          onBlur={() => onFocusCard(null)}
        />
      </div>
    </div>
  )
}

