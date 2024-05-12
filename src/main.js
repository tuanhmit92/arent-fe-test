import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthProvider from "./contexts/auth-context"
import Home from "./pages/home/home"
import "@assets/styles/styles.scss"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Menu from "./components/menu/menu"
import iconScroll from "./assets/images/icons/icon_scroll.svg"
import Record from "./pages/record/record"
import Recommend from "./pages/recommend/recommend"

const App = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 200) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <AuthProvider>
      <Menu />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" name="home" element={<Home />} />
          <Route path="/record" name="Record" element={<Record />} />
          <Route path="/recommend" name="Record" element={<Recommend />} />
        </Routes>
      </BrowserRouter>
      <div className="icon-scroll" style={{ display: visible ? 'inline' : 'none' }} onClick={scrollToTop}>
        <img src={iconScroll} />
      </div>
      <Footer />
    </AuthProvider>
  )
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)