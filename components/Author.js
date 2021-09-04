import { NextImage } from 'next/image';

export default function Author({ name, image }) {
  return (
    <>
      <div>
        <NextImage src={image} alt='Ron Nelson' />
      </div>
      <div>{name}</div>
    </>
  );
}
