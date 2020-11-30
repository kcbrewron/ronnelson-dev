import Head from "next/head";
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import { getAllPostsForHome } from "@utils/api";
import Post from "@components/Post";

export default function Home({ preview, allPosts }) {
  const heroPost = allPosts[0];
  const customImage = heroPost.hero.heroImage.url + "?fit=fill&w=1600&h=300";
  return (
    <div>
      <Nav />
      <Head>
        <title>Ronnelson.dev</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          itemProp="description"
          content="My website platform for learning development, building my skills, and challenging myself."
        />
        <meta
          itemProp="image"
          content="https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg?h=250"
        />

        <meta property="og:url" content="https://ronnelson.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ronnelson.dev" />
        <meta
          property="og:description"
          content="My website platform for learning development, building my skills, and challenging myself."
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg?h=250"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ronnelson.dev" />
        <meta
          name="twitter:description"
          content="My website platform for learning development, building my skills, and challenging myself."
        />
        <meta
          name="twitter:image"
          content="https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg?h=250"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Post
        hero={customImage}
        title={heroPost.title}
        date={heroPost.date}
        author={heroPost.author.name}
        content={heroPost.content}
        slug={heroPost.slug}
      ></Post>
      <Footer />
    </div>
  );
}
export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
