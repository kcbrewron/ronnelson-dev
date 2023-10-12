import Image from "next/image";
import Link from "next/link";
/**
 * hero configuration should include
 * a heroImage{url, title,description, width, height}
 * and cta, showCta, title and caption
 * @param {*} heroConfiguration
 */

export default function HeroComponent(heroConfiguration) {

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
      </div>
    </>
  );
}
