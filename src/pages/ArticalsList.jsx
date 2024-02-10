import articleContent from './article-content.js';

//import conponent
import Articles from '../components/Articles.jsx';

const ArticalsList = () => {
  return (
    <div>
    <h1 className='sm:text-4xl text-2xl font-bold my-6 text-gray-900'>
    This is ArticleList
    </h1>
    <div className="container py-4 mx-auto">
      <div className="flex flex-wrap -m-4">
       <Articles articles={articleContent}/>
      </div>
    </div>
    </div>
  )
}

export default ArticalsList
