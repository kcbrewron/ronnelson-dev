export default function Hero({ url, alt, cta, title }) {
  return (
    <div id="heroItem">
      <img src={url} alt={alt} width="1200px" heigh="300px" />
    </div>
  );
}
