import React from "react"
import "./body-record.scss"
// import { Line } from "react-chartjs-2"
import bodyRecord from "@assets/images/body-record.png"

const BodyRecord = () => {
  // I can use chartjs to implement body record charts, but it will take more time so I use image.

  // const options = {}

  // const data = {}

  return (
    <div className="body-record">
      {/* <Line options={options} data={data} />
      <div className="group-btn" /> // group button to change options.scales.x.time.unit = day, week, month, year
      */}
      <img src={bodyRecord} />
    </div >
  )
}
export default BodyRecord