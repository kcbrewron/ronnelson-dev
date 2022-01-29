import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
export default function Nav() {
  return (
    <>
      <Head>
        <title>Ronnelson.dev-Homepage</title>
        <link rel='icon' href='/favicon.ico' />
        <meta charSet='UTF-8' />
        <meta description="Ron Nelson's personal ramblings of softare development, life, family and books." />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          itemProp='description'
          content='My website platform for learning development, building my skills, and challenging myself.'
        />
        <meta
          itemProp='image'
          content='https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg'
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
          content='https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg'
        />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Ronnelson.dev' />
        <meta
          name='twitter:description'
          content='My website platform for learning development, building my skills, and challenging myself.'
        />
        <meta
          name='twitter:image'
          content='https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg'
        />
      </Head>

      <div className='grid grid-cols-12 grid-flow-col-dense grid-rows-1 bg-gradient-to-r from-vividSky to-vividSky pb-1'>
        <div className='sticky top-0 z-40 py-5 bg-black flex-none flex'>
          <div className='cols-span-2 ... text-2xl text-blueJeans pl-4 left-2'>
            [ ronnelson.dev ]
          </div>
          <div className='col-start-8 ... text-xl text-blueJeans px-4 absolute right-4'>
            <Link href='/' className='px-4 rounded-md' alt='Home'>
              <a className='px-4 hover:bg-charcoal hover:text-ghost rounded-md'>
                Home
              </a>
            </Link>
            <Link
              href='/about'
              className='col-start-9 ...  justify-end rounded-md'
              alt='About Me'
            >
              <a className='px-4 hover:bg-charcoal hover:text-ghost rounded-md'>
                About
              </a>
            </Link>
            <Link
              href='/blog'
              className='col-start-10 ... justify-end rounded-md'
              alt='blog'
            >
              <a className='px-4 hover:bg-charcoal hover:text-ghost rounded-md'>
                Blog
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
