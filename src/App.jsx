// import React from 'react'

// import Banner from "./components/Banner"
// import Freebook from "./components/Freebook"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import Home from "./home/Home"
// import Course from "./components/Course"
import {Route , Routes} from "react-router-dom"
import Courses from "./Courses/Courses"

const App = () => {
  return (<>
    {/* <Navbar/>  
    <Banner/>
    <Freebook/>
    <Footer/> */}
    {/* <Home/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
    </Routes>
    </>
  )
}

export default App