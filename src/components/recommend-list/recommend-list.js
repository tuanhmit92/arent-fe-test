import React, { useState } from "react"
import Button from "../@cores/button/button"
import "./recommend-list.scss"
import img1 from "@assets/images/column-1.jpg"
import img2 from "@assets/images/column-2.jpg"
import img3 from "@assets/images/column-3.jpg"
import img4 from "@assets/images/column-4.jpg"
import img5 from "@assets/images/column-5.jpg"
import img6 from "@assets/images/column-6.jpg"
import img7 from "@assets/images/column-7.jpg"
import img8 from "@assets/images/column-8.jpg"

const RecommendList = () => {
  // Can call API to get data like meal history

  const data = [
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img1
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img2
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img3
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img4
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img5
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img6
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img7
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img8
    },
  ]
  const dataMore = [
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img1
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img2
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img3
    },
    {
      date: "2021.05.21 23:25",
      text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
      tag: ["#魚料理", "#和食", "#DHA"],
      image: img4
    }
  ]

  const [dataRecommend, setDataRecommend] = useState(data)

  const loadMore = () => {
    setDataRecommend([...dataRecommend, ...dataMore])
  }

  return (
    <div className="recommend-list">
      <div className="recommend-list__wrapper">
        {dataRecommend.map((item, index) => {
          return (
            <div className="recommend-list__wrapper__item" key={`recommend-list__wrapper__item-${index}`}>
              <div className="recommend-list__wrapper__item__image" style={{ backgroundImage: `url("${item.image}")` }}>
                <p className="recommend-list__wrapper__item__image__date">{item.date}</p>
              </div>
              <p className="recommend-list__wrapper__item__text">{item.text}</p>
              <p className="recommend-list__wrapper__item__tag">
                {item.tag.map((ite, i) => {
                  return (
                    <a className="recommend-list__wrapper__item__tag__item" key={`recommend-list__wrapper__item__tag__item-${i}`}>{ite}</a>
                  )
                })}
              </p>
            </div>
          )
        })}
      </div>
      <div className="recommend-list__btn">
        <Button text="コラムをもっと見る" cta={loadMore} />
      </div>
    </div >
  )
}
export default RecommendList