import Image from "next/image";
import Link from 'next/link';
/**
 * hero configuration should include
 * a heroImage{url, title,description, width, height}
 * and cta, showCta, title and caption
 * @param {*} heroConfiguration 
 */

export default function HeroComponent(heroConfiguration){
    console.log("heroConfiguration cta: %s, showCta: %s, title: %s,caption: %s", heroConfiguration.cta,
    heroConfiguration.showCta,
    heroConfiguration.title,
    heroConfiguration.caption);

    console.log("image configuration src:%s, width:%s, height:%s",
        heroConfiguration.heroImage.
        url,heroConfiguration.heroImage.width,
        heroConfiguration.heroImage.height)
return (
    <>
    <div className="w-full mx-auto border-t-bus border-b-bus">
        <div className="static">
            <Image src={heroConfiguration.heroImage.url}
                alt={heroConfiguration.heroImage.description}
                width={heroConfiguration.heroImage.width}
                fill
                quality={100}
                priority
                className="w-full h-72 opacity-50"
                />
            <h1>{heroConfiguration.title}</h1>
            <h4>{heroConfiguration.caption}</h4>
        </div>

        
        <div className="md:flex items-center space-x-2">
            <Link
              className="bg-gradient-to-b from-indigoBlue to-lapisBlue
               py-1 px-2 text-white rounded-sm 
               hover:bg-gradient-to-b from-lapisBlue to-indigoBlue hover:text-white transition duration-300"
              href="/">
              {heroConfiguration.cta}
            </Link>
          </div>
    </div>
    </>
);

}