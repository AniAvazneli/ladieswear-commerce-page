import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Article from "../components/ArticleList";

export default function Home({articles}) {
  console.log("Articles" , articles)
  return (
    <div>
      <Head>
        <title>Ani's World</title>
        <meta name="keywords" content="webdevelopment, programming" />
      </Head>
      <Article articles={articles}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();
  
  return {
    props: {
      articles
    }
  }
};
