import React from "react"
import "./button.scss"

const Button = ({ text, cta }) => {
  return (
    <div className="btn-action" onClick={cta}>{text}</div>
  )
}
export default Button