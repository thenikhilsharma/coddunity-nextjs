import React, { useEffect, useRef, useState } from "react"
import { TestimonialGroup } from "./TestimonialGroup"
import { TestimonialHeader } from "./TestimonialHeader"

const testimonials = [
  {
    username: "JP",
    handle: "@jperelli",
    content:
      "This weekend I made a personal record 🏅 on the less time spent creating an application with social login / permissions, database, cdn, infinite scaling, git push to deploy and for free. Thanks to @coddunity",
  },
  {
    username: "Drew Clemens",
    handle: "@drewclemcr8",
    content:
      "Working on my next app and I want this to be my whole job because I'm just straight out vibing putting it together. @coddunity and chill, if you will",
  },
  {
    username: "Tex",
    handle: "@thatguy_tex",
    content:
      "Working with @coddunity has been one of the best dev experiences I've had lately. Incredibly easy to set up, great documentation, and so many fewer hoops to jump through than the competition. I definitely plan to use it on any and all future projects.",
  },
  {
    username: "CodiferousCoder",
    handle: "@CodiferousCoder",
    content:
      "@coddunity Putting documentation is just a classy move all around. Really enjoying it",
  },
]

export function InfiniteTestimonials() {
  const [isHovered, setIsHovered] = useState(false)
  const [focusedCard, setFocusedCard] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer || isHovered) return

    let animationFrameId
    let scrollPosition = 0
    const totalWidth = scrollContainer.scrollWidth / 2

    const scroll = () => {
      if (!scrollContainer || isHovered) return
      scrollPosition += 0.5

      if (scrollPosition >= totalWidth) {
        scrollPosition -= totalWidth
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [isHovered])

  const testimonialGroups = []
  for (let i = 0; i < testimonials.length; i += 2) {
    testimonialGroups.push({
      topTestimonial: testimonials[i],
      bottomTestimonial: testimonials[i + 1] || testimonials[0],
      isReversed: i % 4 === 2,
    })
  }

  return (
    <div className="w-full bg-black min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <TestimonialHeader />
      <div
        className="relative w-full max-w-[90vw] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          setFocusedCard(null)
        }}
      >
        <div ref={scrollRef} className="flex gap-8 overflow-x-hidden py-20">
          {[...testimonialGroups, ...testimonialGroups, ...testimonialGroups].map((group, index) => (
            <div key={index} className="inline-block shrink-0">
              <TestimonialGroup {...group} focusedCard={focusedCard} onFocusCard={setFocusedCard} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
