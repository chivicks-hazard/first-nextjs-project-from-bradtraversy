import articleStyles from '../styles/Article.module.css'
import ArticleCard from './ArticleCard'

const articleList = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article) => {
                return(<ArticleCard article={article} />)
            })}       
        </div>
    )
}

export default articleList