import React from "react"
import "./footer.scss"

const Footer = () => {
  const listItems = [
    {
      link: "/",
      text: "会員登録"
    },
    {
      link: "/",
      text: "運営会社"
    },
    {
      link: "/",
      text: "利用規約"
    },
    {
      link: "/",
      text: "個人情報の取扱について"
    },
    {
      link: "/",
      text: "特定商取引法に基づく表記"
    },
    {
      link: "/",
      text: "お問い合わせ"
    },
  ]

  return (
    <div className="footer">
      <div className="footer__items">
        {listItems.map((item, index) => {
          return (
            <a className="footer__items__item" key={`footer__items__item-${index}`} href={item.link}>{item.text}</a>
          )
        })}
      </div>
    </div>
  )
}
export default Footer