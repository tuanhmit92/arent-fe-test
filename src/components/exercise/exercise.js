import React from "react"
import "./exercise.scss"

const Exercise = () => {
  // Can call API to get data like meal history

  const data = {
    date: "2021.05.21",
    list: [
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      {
        title: "家事全般（立位・軽い）",
        time: "10 min",
        energy: 26
      },
      // ... 
    ]
  }

  return (
    <div className="exercise">
      <div className="exercise__wrapper">
        <div className="exercise__wrapper__top">
          <p className="exercise__wrapper__top__title">MY EXERCISE</p>
          <p className="exercise__wrapper__top__date">{data.date}</p>
        </div>
        <div className="exercise__wrapper__inner">
          <ul className="exercise__wrapper__inner__ul">
            {data.list.map((item, index) => {
              if (index % 2 == 0) {
                return (
                  <li className="exercise__wrapper__inner__ul__li" key={`exercise__wrapper__inner__ul__li-${index}`}>
                    <div className="exercise__wrapper__inner__ul__li__top">
                      <p className="exercise__wrapper__inner__ul__li__top__title"><span>●</span> {item.title}</p>
                      <p className="exercise__wrapper__inner__ul__li__top__time">{item.time}</p>
                    </div>
                    <p className="exercise__wrapper__inner__ul__li__energy">{item.energy} kcal</p>
                  </li>
                )
              }
            })}
          </ul>
          <ul className="exercise__wrapper__inner__ul">
            {data.list.map((item, index) => {
              if (index % 2 == 1) {
                return (
                  <li className="exercise__wrapper__inner__ul__li" key={`exercise__wrapper__inner__ul__li-${index}`}>
                    <div className="exercise__wrapper__inner__ul__li__top">
                      <p className="exercise__wrapper__inner__ul__li__top__title"><span>●</span> {item.title}</p>
                      <p className="exercise__wrapper__inner__ul__li__top__time">{item.time}</p>
                    </div>
                    <p className="exercise__wrapper__inner__ul__li__energy">{item.energy} kcal</p>
                  </li>
                )
              }
            })}
          </ul>
        </div>
      </div>
    </div >
  )
}
export default Exercise