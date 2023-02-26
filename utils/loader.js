export default function myImageLoader({ src, width, height, quality }) {
    console.log("image source supplied " +src)
    console.log("width " +width + " quality =>" +quality)
    const imgloaderUrl =`${src}?w=${width}&q=${quality}&fm=webp`
    console.log("Image Loader Value "+imgloaderUrl);
  return imgloaderUrl;
}
