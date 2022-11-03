import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./articleItem";

const Article = ({articles}: {articles}) => {
    console.log("listA",articles)
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article}/>
      ))}
    </div>
  );
};

export default Article;
