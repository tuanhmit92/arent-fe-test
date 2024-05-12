import React, { useContext, useState } from "react"
import { AuthContext } from "../../contexts/auth-context"
import "./menu.scss"

const Menu = () => {
  const authContext = useContext(AuthContext)

  const listItems = [
    {
      link: "/record",
      text: "自分の記録"
    },
    {
      link: "",
      text: "体重グラフ"
    },
    {
      link: "",
      text: "目標"
    },
    {
      link: "",
      text: "選択中のコース"
    },
    {
      link: "/recommend",
      text: "コラム一覧"
    },
    {
      link: "",
      text: "設定"
    },
  ]

  return (
    <div className="menu" style={{ display: authContext.openMenu ? 'inline-grid' : 'none' }}>
      {listItems.map((item, index) => {
        return (
          <a className="menu__item" key={`menu__item-${index}`} href={item.link}>{item.text}</a>
        )
      })}
    </div>
  )
}
export default Menu