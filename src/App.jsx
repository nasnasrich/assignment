import './App.css'
import Nav from './component/Nav'
import HomePage from './Pages/HomePage'
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Nav/>
      <Routes>
          <Route path ="/" element = {<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
