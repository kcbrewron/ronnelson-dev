import Image from 'next/image';
export default function Hero({ url, alt, cta, title }) {
  const myLoader = ({ src, width, height }) => {
    return `${src}?fit=fill&f=center`;
  };
  return (
    <>
      <Image
        loader={myLoader}
        src={url}
        alt={alt}
        width={1720}
        quality={75}
        layout='fill'
        priority
      />
    </>
  );
}
