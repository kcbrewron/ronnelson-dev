import Image from 'next/image';
export default function Hero({ url, alt, cta, title }) {
  const myLoader = ({ src, width, height, quality }) => {
    return `${src}?w=${width || 1920}&h=${height || 300}&quality=${quality||75}`;
  };
  return (
    <div id='heroItem'>
      <Image loader={myLoader} src={url} alt={alt} width='100%' heigh='20%' />
    </div>
  );
}
