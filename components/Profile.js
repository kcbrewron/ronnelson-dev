import Image from "next/image";
import Link from 'next/link';

export default function Profile() {
  return <>
  <div  className="inline px-5">
    <Link href='/about' passHref className="hover:text-ghost">  About Me </Link></div>
    <div  className="inline px-5">
    <Link href='https://github.com/kcbrewron' className="hover:text-ghost" passHref>
      <Image
        className="inline"
        src='/github.png'
        placeholder='empty'
        width={16}
        height={16}
        quality={100}
        aria-label='github'
        alt='github logo'
      />Github
    </Link></div>
    <div  className="inline px-5">
    <Link
      href='https://www.linkedin.com/in/kc-ronnelson/'
      className='hover:text-ghost'
      passHref>
      <Image
        className="inline"
        placeholder='empty'
        src='/linkedin.png'
        width={16}
        height={16}
        quality={100}
        aria-label='linkedin'
        alt='linkedin logo'
      />LinkedIn
    </Link></div>
    <div className="inline px-5">
    <Link
      href='https://twitter.com/kcbrewron'
      className='hover:text-ghost'
      passHref>
      <Image
        className="inline"
        placeholder='empty'
        src='/twitter.png'
        width={16}
        height={16}
        quality={100}
        aria-label='twitter'
        alt='twitter logo'
      />Twitter
    </Link></div>
  </>;
}
