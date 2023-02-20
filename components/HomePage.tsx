import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";

interface HomePage {
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
  json: Document;
  links: object;
}

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
        if (entry.__typename === "Home") {
          return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return (
          <Image
            className="py-5 mx-auto rounded-lg! "
            src={asset.url}
            width={asset.width}
            height={500}
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
function createHeroAsset(hero: Hero) {
  return (
    <Image
      src={hero.url}
      fill
      alt={hero.description}
      sizes="100vw"
      quality={75}
    />
  );
}

function createHeroCaption(title: string) {
  return (
    <div className="bg-ghost w-full">
      <p className="text-4xl bold text-center p-10 font-semibold">{title}</p>
    </div>
  );
}
// Render post.body.json to the DOM using
// documentToReactComponents from "@contentful/rich-text-react-renderer"
/**
 *
 * @param HomePage Input API response for any landing page
 * @returns Content layout for a landing page
 */
export default function HomePage(HomePage: HomePage) {
  console.log("Landing Page -->" + HomePage.title);
  return (
    <>
      <div className="h-96 relative">{createHeroAsset(HomePage.heroImage)}</div>
      {createHeroCaption(HomePage.title)}
      <div className="container">
        <div className={markdownStyles["markdown"]}>
          {documentToReactComponents(
            HomePage.content.json,
            renderOptions(HomePage.content.links)
          )}
        </div>
      </div>
    </>
  );
}
