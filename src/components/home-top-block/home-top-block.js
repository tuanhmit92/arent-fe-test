import React from "react"
import "./home-top-block.scss"
import { format } from "date-fns"
import mainGraph from "@assets/images/main_graph.svg"

const HomeTopBlock = () => {
  // Example if call API
  // const [dataToday, setDataToday] = useState({})

  // const getData = () =>{
  //   const params = {
  //     //params to call API
  //   }
  //   ApiService.getDataToday(params, (error, result)=>{
  //     if (!error){
  //       setDataToday(result.data)
  //       return
  //     }
  //     //when has error
  //   })
  // }

  // useEffect(()=>{
  //   getData()
  // },[])

  const dataToday = {
    date: format(new Date(), "MM/dd"),
    percent: 75
  }

  return (
    <div className="home-top-block">
      <div className="home-top-block__left">
        <div className="home-top-block__left__info">
          <div className={`circle percentage-${dataToday.percent}`}>
            <span><p style={{ fontSize: "18px" }}>{dataToday.date}</p> <p>{dataToday.percent}%</p></span>
            <div className="percentage-bar"></div>
          </div>
        </div>
      </div >
      <div className="home-top-block__right">
        <img src={mainGraph} />
      </div>
    </div >
  )
}
export default HomeTopBlock