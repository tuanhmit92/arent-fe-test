import React, { useContext, useEffect, useState } from "react";
import "./home.scss"
import HomeTopBlock from "../../components/home-top-block/home-top-block";
import MealHistory from "../../components/meal-history/meal-history";
import { AuthContext } from "../../contexts/auth-context";

const Home = () => {
  const authContext = useContext(AuthContext)
  useEffect(() => {
    authContext.setPage('home')
  }, [])
  return (
    <div className="home">
      <HomeTopBlock />
      <MealHistory />
    </div>
  )
}
export default Home