import { useParams } from "react-router-dom";
import articleContent from "./article-content.js"

//components
import Articles from "../components/Articles.jsx";

//pages
import NotFound from "./notFound.jsx";


const Article = () => {
  const {name} = useParams();
  console.log(name);
  const article = articleContent.find((article)=> article.name === name);
  // console.log(article.title);

  // if(!article) return <h1>Article does not exists.</h1>;
  if(!article) return <NotFound/>;

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
     {article.title}
    </h1>
    {
      article.content.map((paragraph,index)=> (
        <p className="mx-auto leading-relaxed text-base mb-4" key={index}>{paragraph}</p>
      ))
    }
    <h1 className="sm:text-2xl text-xl font-bold my-4 text-gray-900">Other Articles </h1>
    <div className="flex flex-wrap -m-4">
      <Articles articles={otherArticles}/>
    </div>
    </> 
  )
}

export default Article