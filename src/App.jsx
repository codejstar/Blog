import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx';

function App() {

  return (
    <>
    <Router>
      <div className="max-w-screen-md mx-auto pt-20">
         <Routes>
             <Route path="/" element={<Home/>}/>
         </Routes>
      </div>
    </Router>
    </>
  )
}

export default App