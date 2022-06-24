import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Layout from './views/layout/Layout'
import Home from './views/home/Home'
import Projects from './views/projects/Projects'

const Direct = () => { 
  
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
      </Routes>
    </Layout>
  </Router>
  )
}

export default Direct