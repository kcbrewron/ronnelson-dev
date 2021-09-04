import Image from 'next/image';
export default function Hero({ url, alt, cta, title }) {
  return (
    <div id='heroItem'>
      <Image src={url} alt={alt} width='100%' heigh='20%' />
    </div>
  );
}
