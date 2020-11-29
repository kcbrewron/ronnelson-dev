import Head from "next/head";
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Author from "@components/Author";
import { fetchAsset, fetchEntry } from "@utils/contentfulPosts";

export default function About() {
  let image =
    "https://images.ctfassets.net/2tyl7ps8aucz/1PKYllkrwzPlwoXKa0zd7U/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg?fm=jpg&fl=progressive&w=1200&h=400";
  let name = "Ron Nelson";
  return (
    <div>
      <Nav />
      <Head>
        <title>Ronnelson.dev</title>
        <meta
          name="description"
          content="My website platform for learning development, building my skills, and challenging myself."
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          itemprop="description"
          content="My website platform for learning development, building my skills, and challenging myself."
        />
        <meta
          itemprop="image"
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

      <main>
        <Author name={name} image={image} />
      </main>

      <Footer />
    </div>
  );
}
