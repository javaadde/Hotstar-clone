import { useState } from 'react'
import MainBody from './components/MainBody'
import TopBody from './components/TopBody'
import MBar from './components/MBar'
import LeftBar from './components/LeftBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LeftBar/>

    <div id='r-part'>

     <TopBody/>
     <MainBody/>
     <MBar/>
     <MBar/>
     <Footer/>
    </div>

    </>
  )
}

export default App
