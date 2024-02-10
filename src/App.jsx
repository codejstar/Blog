import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home.jsx';
import About from "./pages/About.jsx";
import Article from "./pages/Article.jsx";
import ArticalsList from "./pages/ArticalsList.jsx";
import Navbar from "./components/Navbar.jsx";
import NotFound from "./pages/notFound.jsx";

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <div className="max-w-screen-md mx-auto pt-20">
         <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/about" element={<About/>} />
             <Route path="/Article/:name" element={<Article/>}/>
             <Route path="/AList" element={<ArticalsList/>}/>
             <Route path="*" element={<NotFound/>}/>
         </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
