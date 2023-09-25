export type NewsArticle = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export type NewsArticleListProps = {
  articles: NewsArticle[];
};

const NewsArticleList: React.FC<NewsArticleListProps> = ({ articles }) => {
  return (
    <>
      <h1>List of articles</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const newsArticles = await fetch("http://localhost:4000/news");
  const data = await newsArticles.json();
  return {
    props: {
      articles: data,
    },
  };
}

export default NewsArticleList;
