import React from "react"

function Button({ children, className, ...props }) {
  return (
    <button className={`px-4 py-2 rounded-full transition-all duration-300 ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button

