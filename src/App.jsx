// import React from 'react'

// import Banner from "./components/Banner"
// import Freebook from "./components/Freebook"
// import Navbar from "./components/Navbar"
// import Footer from "./components/Footer"
import Home from "./home/Home"
// import Course from "./components/Course"
import {Route , Routes} from "react-router-dom"
import Courses from "./Courses/Courses"
import Signup from "./components/Signup";

const App = () => {
  return (<>
    {/* <Navbar/>  
    <Banner/>
    <Freebook/>
    <Footer/> */}
    {/* <Home/> */}
    <Routes className="dark:bg-slate-900 dark:text-white">
      <Route path='/' element={<Home/>}/>
      <Route path="/course" element={<Courses/>}/>
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App