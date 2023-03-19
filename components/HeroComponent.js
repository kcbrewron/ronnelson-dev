import Image from "next/image";
import Link from "next/link";
/**
 * hero configuration should include
 * a heroImage{url, title,description, width, height}
 * and cta, showCta, title and caption
 * @param {*} heroConfiguration
 */

export default function HeroComponent(heroConfiguration) {
  /*
        console.log("heroConfiguration cta: %s, showCta: %s, title: %s,caption: %s", heroConfiguration.cta,
        heroConfiguration.showCta,
        heroConfiguration.title,
        heroConfiguration.caption);
    
        console.log("image configuration src:%s, width:%s, height:%s",
        heroConfiguration.heroImage.
        url,heroConfiguration.heroImage.width,
        heroConfiguration.heroImage.height)
    */

  return (
    <>
      <div className="w-full top-0 relative h-96 flex flex-col">
        <div className="w-full h-full relative mx-auto">
          <Image
            src={heroConfiguration.heroImage.url}
            alt={heroConfiguration.heroImage.description}
            fill
            quality={100}
            priority
          />
          
        </div>
        <div className="w-full bg-fireEngine mx-auto space-y-4 border-t-indigoBlue border-b-indigoBlue border-t-2">
        <div className="text-4xl bold text-center text-shadow font-semibold">
          {heroConfiguration.title}
        </div>
        <div className="text-xl bold text-center text-white">
          {heroConfiguration.caption}
        </div>
      </div>
      </div>
    </>
  );
}
