import React from 'react'
import Navbar from './Compounents/Navbar/Navbar'
import './App.css'
import Section1 from './Compounents/Section 1/Section1'
import Section2 from './Compounents/Section 2/Section2'
import Section3 from './Compounents/Section 3/Section3'
import Section4 from './Compounents/Section 4/Section4'
import Section5 from './Section 5/Section5'
const App = () => {
  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
     <Section5 />
    </>
  )
}

export default App