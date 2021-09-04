import Image from 'next/image';

export default function Author({ name, image }) {
  return (
    <>
      <div>
        <Image src={image} alt='Ron Nelson' />
      </div>
      <div>{name}</div>
    </>
  );
}
