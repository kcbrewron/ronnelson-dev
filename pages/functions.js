import Head from 'next/head';
import Footer from '@components/Footer';
import Nav from '@components/Nav';
import Script from 'next/script';

export default function Functions({ helloWorld }) {
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

        <meta property='og:url' content='https://ronnelson.dev' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Ronnelson.dev' />
        <meta
          property='og:description'
          content='My website platform for learning development, building my skills, and challenging myself.'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Ronnelson.dev' />
        <meta
          name='twitter:description'
          content='My website platform for learning development, building my skills, and challenging myself.'
        />
      </Head>
      <Script src='https://www.googletagmanager.com/gtag/js?id=G-7DQP11RHPK' />
      <Nav />
      <body className="py-5 text-center">
        <p>{helloWorld}</p>
      </body>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:8888/.netlify/functions/hello-world')
    .then((response) => response.json()
  );
  console.log(response);
  return { 
    props: { response },
  };
}
