import articleStyles from "../styles/Article.module.css";

const Article = ({articles}: {articles}) => {
    console.log("listA",articles)
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
};

export default Article;
