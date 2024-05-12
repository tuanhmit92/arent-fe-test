import React, { useEffect, useState } from "react"
import "./meal-history.scss"
import { format } from "date-fns"
import iconKnife from "@assets/images/icons/icon_knife.svg"
import iconCup from "@assets/images/icons/icon_cup.svg"
import morning1 from "@assets/images/m01.jpg"
import morning2 from "@assets/images/m02.jpg"
import morning3 from "@assets/images/m03.jpg"
import lunch1 from "@assets/images/l01.jpg"
import lunch2 from "@assets/images/l02.jpg"
import lunch3 from "@assets/images/l03.jpg"
import dinner1 from "@assets/images/d01.jpg"
import dinner2 from "@assets/images/d02.jpg"
import snack1 from "@assets/images/s01.jpg"
import Button from "../@cores/button/button"

const MealHistory = () => {
  // Example if call API
  // const [mealHistory, setMealHistory] = useState({})

  // const getData = () =>{
  //   const params = {
  //     //params to call API
  //   }
  //   ApiService.getmealHistory(params, (error, result)=>{
  //     if (!error){
  //       setMealHistory(result.data)
  //       return
  //     }
  //     //when has error
  //   })
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  const dataMeal = [
    {
      date: "05.21", // maybe type timestamp and I can use date-fns to cover to string
      history: [
        {
          time: "morning",
          text: "Morning",
          image: morning1,
        },
        {
          time: "lunch",
          text: "Lunch",
          image: lunch1,
        },
        {
          time: "dinner",
          text: "Dinner",
          image: dinner1,
        },
        {
          time: "snack",
          text: "Snack",
          image: snack1,
        }
      ]
    },
    {
      date: "05.20", // maybe type timestamp and I can use date-fns to cover to string
      history: [
        {
          time: "morning",
          text: "Morning",
          image: morning2,
        },
        {
          time: "lunch",
          text: "Lunch",
          image: lunch2,
        },
        {
          time: "dinner",
          text: "Dinner",
          image: dinner2,
        },
        {
          time: "snack",
          text: "Snack",
          image: snack1,
        }
      ]
    }
  ]
  const dataMore = [
    {
      date: "05.19", // maybe type timestamp and I can use date-fns to cover to string
      history: [
        {
          time: "morning",
          text: "Morning",
          image: morning1,
        },
        {
          time: "lunch",
          text: "Lunch",
          image: lunch1,
        },
        {
          time: "dinner",
          text: "Dinner",
          image: dinner1,
        },
        {
          time: "snack",
          text: "Snack",
          image: snack1,
        }
      ]
    }
  ]

  const [currentSelect, setCurrentSelect] = useState("all") // all, morning, lunch, dinner, snack
  const [mealHistory, setMealHistory] = useState(dataMeal)

  const listItems = [
    {
      id: "morning",
      text: "Morning",
      icon: iconKnife
    },
    {
      id: "lunch",
      text: "Lunch",
      icon: iconKnife
    },
    {
      id: "dinner",
      text: "Dinner",
      icon: iconKnife
    },
    {
      id: "snack",
      text: "Snack",
      icon: iconCup
    },
  ]



  const selectMeal = (type) => {
    if (type == currentSelect) {
      setCurrentSelect("all")
    } else {
      setCurrentSelect(type)
    }
  }

  const loadMore = () => {
    setMealHistory([...mealHistory, ...dataMore])
  }

  return (
    <div className="meal-history">
      <div className="meal-history__select-type">
        {listItems.map((item, index) => {
          return (
            <div className="meal-history__select-type__item" key={`meal-history__select-type__item-${index}`} onClick={() => { selectMeal(item.id) }}>
              <div className="meal-history__select-type__item__inner">
                <img src={item.icon} />
                <p>{item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="meal-history__history">
        <div className="meal-history__history__list-images">
          {currentSelect === "all" ? (
            mealHistory.map((item, index) => {
              return (
                <div className="meal-history__history__list-images__items" key={`meal-history__history__list-images__items-${index}`}>
                  {item.history.map((ite, i) => {
                    return (
                      <div className="meal-history__history__list-images__items__item" style={{ backgroundImage: `url("${ite.image}")` }} key={`meal-history__history__list-images__items__item-${i}`}>
                        <p>{item.date}.{ite.text}</p>
                      </div>
                    )
                  })}
                </div>
              )
            })
          ) : (
            <div className="meal-history__history__list-images__list">
              {mealHistory.map((item, index) => {
                return item.history.map((ite, i) => {
                  if (ite.time == currentSelect)
                    return (
                      <div className="meal-history__history__list-images__items__item" style={{ backgroundImage: `url("${ite.image}")` }} key={`meal-history__history__list-images__items__item-${i}`}>
                        <p>{item.date}.{ite.text}</p>
                      </div>

                    )
                })
              })}
            </div>
          )}
        </div>
        <div className="meal-history__history__btn">
          <Button text="記録をもっと見る" cta={loadMore} />
        </div>
      </div>
    </div>
  )
}
export default MealHistory