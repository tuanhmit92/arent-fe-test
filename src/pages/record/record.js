import React, { useContext, useEffect, useRef } from "react";
import "./record.scss"

import { AuthContext } from "../../contexts/auth-context";
import imgRecord from "@assets/images/MyRecommend-1.jpg"
import imgExercise from "@assets/images/MyRecommend-2.jpg"
import imgDiary from "@assets/images/MyRecommend-3.jpg"
import BodyRecord from "../../components/body-record/body-record";
import Exercise from "../../components/exercise/exercise";
import Diary from "../../components/diary/diary";

const Record = () => {
  const authContext = useContext(AuthContext)
  const bodyRecordRef = useRef(null)
  const exerciseRef = useRef(null)
  const diaryRef = useRef(null)

  const dataRecommend = [
    {
      ref: bodyRecordRef,
      title: "BODY RECORD",
      description: "自分のカラダの記録",
      image: imgRecord
    },
    {
      ref: exerciseRef,
      title: "MY EXERCISE",
      description: "自分の運動の記録",
      image: imgExercise
    },
    {
      ref: diaryRef,
      title: "MY DIARY",
      description: "自分の日記",
      image: imgDiary
    },
  ]

  const scrollToView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    authContext.setPage('record')
  }, [])

  return (
    <div className="record">
      <div className="record__recommend">
        {dataRecommend.map((item, index) => {
          return (
            <div className="record__recommend__item" key={`record__recommend__item-${index}`} onClick={() => { scrollToView(item.ref) }}>
              <div className="record__recommend__item__inner" style={{ backgroundImage: `url("${item.image}")` }}>
                <div className="record__recommend__item__inner__overlay"></div>
              </div>
              <div className="record__recommend__item__info">
                <p className="record__recommend__item__info__title">{item.title}</p>
                <p className="record__recommend__item__info__description">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="record__body-record" ref={bodyRecordRef}>
        <BodyRecord />
      </div>
      <div className="record__exercise" ref={exerciseRef}>
        <Exercise />
      </div>
      <div className="record__diary" ref={diaryRef}>
        <Diary />
      </div>
    </div>
  )
}
export default Record