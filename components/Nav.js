import Link from 'next/link';

export default function Nav() {
  return (
    <div className='bg-gradient-to-r from-vividSky to-blueJeans to-vividSky pb-1'>
      <div className='sticky top-0 z-40 w-full max-w-8xl mx-auto py-5 bg-black flex-none flex'>
        <div className='text-2xl text-blueJeans inline-block left-2'>
          <Link href='/' alt='Home'>
            [ ronnelson.dev ]
          </Link>
        </div>
        <div className='inline-block text-xl text-blueJeans px-4 absolute right-4'>
          <Link
            href='/'
            className='inline-block px-4 hover:bg-charcoal hover:text-ghost rounded-md'
            alt='Home'
          >
            <a>Home</a>
          </Link>
          <Link
            href='/about'
            className='inline-block px-4 justify-end hover:bg-charcoal hover:text-ghost rounded-md'
            alt='About Me'
          >
            <a>About</a>
          </Link>
          <Link
            href='/blog'
            className='inline-block px-4 justify-end hover:bg-charcoal hover:text-ghost rounded-md'
            alt='blog'
          >
            <a>Blog</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
