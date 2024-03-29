import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";
import ImageSxS from "@/components/ImageSxS";
import { Tag } from "contentful";

interface LandingPage {
  title: string;
  tags: Array<Tag>;
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

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

function renderOptions(links: any) {
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
    console.debug("debug code here in the links.entries.block");
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of links.entries.inline) {
    console.debug("debug code here in the links.entries.inline");
    entryMap.set(entry.sys.id, entry);
  }

  return {
    // other options...

    renderNode: {
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node: any, children: any) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

        // render the entries as needed
        if (entry.__typename === "LandingPage") {
          return <a href={`/blog/${entry.slug}`}>{entry.title}</a>;
        }
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: any) => {
        const emEntry = entryMap.get(node.data.target.sys.id);
        console.debug("asset typename: %s", emEntry.__typename);
        if (emEntry.__typename === "ImageCopySxS") {
          console.debug("Trying to render ImageCopySxS");
          return <ImageSxS props={emEntry} />;
        } else {
          console.error(
            "The asset type is something unexpected, " + emEntry.__typename
          );
        }
      },

      [BLOCKS.EMBEDDED_ASSET]: (node: any, next: any) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        //maybe its just an image
        return (
          <Image
            priority
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
function createHeroAsset(hero: any) {
  return (
    <Image
      src={hero.url}
      alt={hero.description}
      width={1920}
      height={370}
      quality={75}
      priority
    />
  );
}

/**
 *
 * @param Tags
 * @returns {String} category
 *
 * TODO process categories
 */
function getCategoryTag(Tags: Array<Tag>) {}

function createHeroCaption(title: string) {
  return <div>{title}</div>;
}
// Render post.body.json to the DOM using
// documentToReactComponents from "@contentful/rich-text-react-renderer"
/**
 *
 * @param LandingPage Input API response for any landing page
 * @returns Content layout for a landing page
 */
export default function LandingPagePost(LandingPage: LandingPage) {
  return (
    <div className="w-full mx-auto">
      <div className="border-b-2 border-b-orange-600">
        {createHeroAsset(LandingPage.heroImage)}
      </div>
      <div className="w-full text-center text-white py-6 text-2xl bg-slate-900 mx-auto">
        {LandingPage.title}
      </div>
      <div className="text-xl my-6">
        <div className={markdownStyles["markdown"]}>
          {documentToReactComponents(
            LandingPage.content.json,
            renderOptions(LandingPage.content.links)
          )}
        </div>
      </div>
    </div>
  );
}
