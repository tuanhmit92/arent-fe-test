import React, { useContext, useEffect, useRef } from "react";
import "./recommend.scss"

import { AuthContext } from "../../contexts/auth-context";
import RecommendList from "../../components/recommend-list/recommend-list";

const Recommend = () => {
  const authContext = useContext(AuthContext)

  const listRecommend = [
    {
      title: "RECOMMENDED COLUMN",
      description: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      description: "ダイエット",
    },
    {
      title: "RECOMMENDED BEAUTY",
      description: "美容",
    },
    {
      title: "RECOMMENDED HEALTH",
      description: "健康",
    },
  ]

  const scrollToView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    authContext.setPage('recommend')
  }, [])

  return (
    <div className="recommend">
      <div className="recommend__select">
        {listRecommend.map((item, index) => {
          return (
            <div className="recommend__select__item" key={`recommend__select__item-${index}`}>
              <div className="recommend__select__item__info">
                <p className="recommend__select__item__info__title">{item.title}</p>
                <p className="recommend__select__item__info__line"></p>
                <p className="recommend__select__item__info__description">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="recommend__list">
        <RecommendList />
      </div>
    </div>
  )
}
export default Recommend