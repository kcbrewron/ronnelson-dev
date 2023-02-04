import Image from "next/legacy/image";
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
        height={16}
        quality={75}
        priority
      />
    </>
  );
}
