import Head from 'next/head';
import Footer from '@components/Footer';
import Nav from '@components/Nav';
import { getAllPostsForHome } from '@utils/api';
import Post from '@components/Post';
import Hero from '@components/Hero';
import Script from 'next/script';
export default function Home({ preview, allPosts, recentPosts }) {
  const heroPost = allPosts[0];
  const customImage = heroPost.hero.heroImage.url + '?fit=fill&w=1920&h=300';
  return (
    <div className='bg-cultured'>
      <Head>
        <title>Ronnelson.dev-Homepage</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          itemProp='description'
          content='My website platform for learning development, building my skills, and challenging myself.'
        />
        <meta
          itemProp='image'
          content='https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg?h=250'
        />

        <meta property='og:url' content='https://ronnelson.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ronnelson.dev' />
        <meta
          property='og:description'
          content='My website platform for learning development, building my skills, and challenging myself.'
        />
        <meta
          property='og:image'
          content='https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg?h=250'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Ronnelson.dev' />
        <meta
          name='twitter:description'
          content='My website platform for learning development, building my skills, and challenging myself.'
        />
        <meta
          name='twitter:image'
          content='https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg?h=250'
        />
      </Head>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-7DQP11RHPK' />
      <div className='cols-span-12 text-lg top-0'>
        <Nav />
      </div>
      <div className='grid grid-cols-12 cols-a gap-3 mb-10 place-items-center'>
        <Hero url={customImage} alt={'image'} />
        <div className='w-7/12 shadow-lg place-content-center'>
          <Post
            title={heroPost.title}
            date={heroPost.date}
            author={heroPost.author.name}
            content={heroPost.content}
            slug={heroPost.slug}
          />
        </div>
      </div>
      <div className='cols-span-12 w-full text-lg bottom-0'>
        <Footer />
      </div>
    </div>
  );
}
export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  let recentPosts = [];
  if (allPosts.length >= 4) {
    recentPosts = allPosts.slice(1, 4);
  } else if ((allPosts.length = 3)) {
    recentPosts = allPosts.slice(1, 3);
  } else if ((allPosts.length = 2)) {
    recentPosts = allPosts.slice(1);
  }
  return {
    props: { preview, allPosts, recentPosts },
  };
}
