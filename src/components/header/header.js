import React, { useContext, useState } from "react"
import "./header.scss"
import logo from "@assets/images/icons/logo.svg"
import iconMemo from "@assets/images/icons/icon_memo.svg"
import iconChallenge from "@assets/images/icons/icon_challenge.svg"
import iconInfo from "@assets/images/icons/icon_info.svg"
import iconMenu from "@assets/images/icons/icon_menu.svg"
import iconClose from "@assets/images/icons/icon_close.svg"
import { AuthContext } from "../../contexts/auth-context"

const Header = () => {
  const authContext = useContext(AuthContext)

  const listItems = [
    {
      link: "/record",
      id: 'record',
      text: "自分の記録",
      icon: iconMemo,
      badge: 0
    },
    {
      link: "/",
      text: "チャレンジ",
      icon: iconChallenge,
      badge: 0
    },
    {
      link: "/",
      text: "お知らせ",
      icon: iconInfo,
      badge: 1
    },
  ]

  const toggleMenu = () => {
    authContext.setOpenMenu(!authContext.openMenu)
  }

  return (
    <div className="header">
      <div className="header__logo" onClick={() => { window.location.href = "/" }}>
        <img src={logo} />
      </div>
      <div className="header__items">
        {listItems.map((item, index) => {
          return (
            <a className={`header__items__item ${authContext.page == item.id ? "active" : ""}`} key={`header__items__item-${index}`} href={item.link}>
              <div className="header__items__item__icon">
                <img src={item.icon} />
                {item.badge > 0 &&
                  <p className="header__items__item__icon__badge">{item.badge}</p>
                }
              </div>
              <p className="header__items__item__text">{item.text}</p>
            </a>
          )
        })}
        <div className="header__items__item" key={`header__items__item-${listItems.length}`} onClick={toggleMenu}>
          <img src={authContext.openMenu ? iconClose : iconMenu} />
        </div>
      </div>
    </div>
  )
}
export default Header