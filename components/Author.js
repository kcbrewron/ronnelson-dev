import Image from 'next/image';


const myLoader = ({ src, width, height, quality }) => {
  return `${src}?w=${width || 1920}&h=${height || 300}`;
};
export default function Author({ name, image }) {
  return (
    <>
      <div>
        <Image loader={myLoader} src={image} alt='Ron Nelson' />
      </div>
      <div>{name}</div>
    </>
  );
}
