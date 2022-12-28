import Image from 'next/image';
import Link from 'next/link';


const myLoader = ({ src, width,quality }) => {
  return `${src}?w=${width}&q=${quality}`;
};
export default function Profile() {
  return (
    <>
      <Link href='https://github.com/kcbrewron' className='space-x-1.0'>
        <a className='space-x-2.5 hover:text-ghost'>
          <Image
            loader={myLoader}
            src='/github.png'
            placeholder='empty'
            width={16}
            height={16}
            quality={100}
            ßaria-label='github'
            alt='github logo'
          />
          Github
        </a>
      </Link>
      <Link href='https://www.linkedin.com/in/kc-ronnelson/'>
        <a className='px-4 hover:text-ghost'>
          <Image
            loader={myLoader}
            className='space-x-0.5'
            placeholder='empty'
            src='/linkedin.png'
            width={16}
            height={16}
            quality={100}
            aria-label='linkedin'
            alt='linkedin logo'
          />
          LinkedIn
        </a>
      </Link>
      <Link href='https://twitter.com/kcbrewron'>
        <a className='space-x-0.5 hover:text-ghost'>
          <Image
            loader={myLoader}
            placeholder='empty'
            src='/twitter.png'
            width={16}
            height={16}
            quality={100}
            aria-label='twitter'
            alt='twitter logo'
          />
          Twitter
        </a>
      </Link>
    </>
  );
}
