import Head from "next/head";
import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Card from "@components/Card";

export default function Blog({ posts }) {
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
      <div>
        <h3 className="text-charcoal">Most Recent Articles:</h3>
      </div>
      <div className="grid gap-8 md:grid-cols-3 m-10"></div>
      <Footer />
    </div>
  );
}
