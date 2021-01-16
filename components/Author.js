export default function Author({ name, image }) {
  return (
    <>
      <div>
        <img src={image} alt="Ron Nelson" />
      </div>
      <div>{name}</div>
    </>
  );
}
