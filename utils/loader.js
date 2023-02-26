export default function myImageLoader({ src, width, height, quality }) {
    const imgloaderUrl =`${src}?w=${width}&q=${quality}&fm=webp`
    return imgloaderUrl;
}
