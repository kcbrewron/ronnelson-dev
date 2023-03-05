import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import markdownStyles from "./markdown-styles.module.css";
import HeroComponent from "./HeroComponent";
/*
interface ArticlePage {
  title: string;
  category: string;
  heroImage?: Hero;
  seo: SeoMetadata;
  content: Content;
}
interface Hero {
  url: string;
  description: string;
  width: number;
  height: number;
  quality: number;
}

interface SeoMetadata {
  title: string;
  keywords: string;
  description: string;
}

interface Content {
  json: any;
  links: any;
}
*/
// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

function renderOptions(links) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  for (const entry of links.entries.block) {
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of links.entries.inline) {
    entryMap.set(entry.sys.id, entry);
  }

  return {
    // other options...

    renderNode: {
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
        if (entry.__typename === "LandingPage") {
          return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (
          <Image
            priority
            className="py-5 mx-auto rounded-lg! "
            src={asset.url}
            width={asset.width}
            height={200}
            alt={asset.title}
            quality={100}
          />
        );
      },
    },
  };
}
/**
 *
 * @param @type Hero
 * @returns
 */
function createHeroAsset(hero) {
  return (
    <Image
      src={hero.url}
      alt={hero.description}
      width={1920}
      height={hero.height}
      quality={75}
    />
  );
}

// Render post.body.json to the DOM using
// documentToReactComponents from "@contentful/rich-text-react-renderer"
/**
 *
 * @param ArticlePage Input API response for any landing page
 * @returns Content layout for a landing page
 */
export default function ArticlePage(ArticlePage) {
  //const heroComponent = HeroComponent(ArticlePage.hero)
  return (
    <div className="space-y-6">
      <div className="relative w-full h-96">
        <Image
          src={ArticlePage.hero.heroImage.url}
          alt={ArticlePage.hero.heroImage.description}
          fill
          quality={100}
          priority
          className="opacity-20  object-fit z-0"
        />
      </div>
      <div className="w-1/8 space-x-2 space-y-6 place-items-end z-10">
        <p className="text-3xl">{ArticlePage.title}</p>
        <p className="text-xl">{ArticlePage.hero.caption}</p>
        <Link className="bg-lapisBlue px-4 py-2 mt-6 drop-shadow-md
              hover:bg-indigoBlue 
              hover:drop-shadow-lg 
              rounded-md text-white" href="/">
          {ArticlePage.hero.cta} Docs
        </Link>
      </div>
    </div>
  );
}
