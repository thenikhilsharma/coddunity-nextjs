import React from "react"

export function TestimonialHeader() {
  return (
    <div className="text-center mb-8 relative">
      <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 -z-10"></div>
      <h2 className="text-6xl font-extrabold text-white mb-4 tracking-tight"> 
        Join the Community
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Discover what our community has to say about their Coddunity experience.
      </p>
    </div>
  )
}
