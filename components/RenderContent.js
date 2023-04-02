import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";
import Image from "next/image";
import markdownStyles from "./markdown-styles.module.css";
import ImageSxS from "@/components/ImageSxS";
import CodeComponent from "@/components/CodeComponent";

// Create a bespoke renderOptions object to target BLOCKS.EMBEDDED_ENTRY (linked block entries e.g. code blocks)
// INLINES.EMBEDDED_ENTRY (linked inline entries e.g. a reference to another blog post)
// and BLOCKS.EMBEDDED_ASSET (linked assets e.g. images)

function renderOptions(content) {
  // create an asset map
  const assetMap = new Map();
  const textMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of content.links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }
  // create an entry map
  const entryMap = new Map();
  // loop through the block linked entries and add them to the map
  for (const entry of content.links.entries.block) {
    console.debug("debug code here in the links.entries.block");
    entryMap.set(entry.sys.id, entry);
  }

  // loop through the inline linked entries and add them to the map
  for (const entry of content.links.entries.inline) {
    console.debug("debug code here in the links.entries.inline");
    entryMap.set(entry.sys.id, entry);
  }

  // // grab all the content components
  // for(const entry of content.json.content){
  //   //console.log("Trying to find the path of the code marks %s",JSON.stringify(entry.content[0]));
  //   //console.log("Locate the Marks object %s",JSON.stringify(entry.content[0],null,2));
  //   if((entry.content[0]?.marks[0]?.type)==='code'){
  //       console.log('found a code element: %s', JSON.stringify(entry.content[0]?.value,null,2));
  //       return <CodeComponent props={entry.content[0]?.value}/>
  //   }
  //   //console.log(entry.content)
  // }

  return {
    // other options...

    renderNode: {
      // other options...
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data.target.sys.id);

      },
      
      [MARKS.CODE]: (node,children)=>{
        // find the entry in the entryMap by ID
        const entry = entryMap.get(node.data);
            console.log(entry);
                if (entry.marks[0].type === 'code'){
            console.log('found a code element');
            return <CodeComponent props={entry}/>
        }
      },

      [BLOCKS.EMBEDDED_ENTRY]: (node,children) => {
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

      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
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
export default function RenderContent(content) {
  return (
    <>

      <div className="text-xl">
        <div className={markdownStyles["markdown"]}>
          {documentToReactComponents(
            content.json,
            renderOptions(content)
          )}
        </div>
      </div>
    </>
  );
}
