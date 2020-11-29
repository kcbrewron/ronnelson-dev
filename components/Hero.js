export default function Hero({ url, alt, cta, title }) {
  return (
    <div className="md:container md:mx-auto overflow-scroll">
      <img src={url} alt={alt} />
    </div>
  );
}
