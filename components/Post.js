import Hero from "@components/Hero";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import markdownStyles from "./markdown-styles.module.css";

export default function Post({
  date,
  author,
  content,
  description,
  slug,
  hero,
}) {
  const customDate = processDate(date);
  console.log("Content ==> " + content);
  return (
    <div className="md:container max-h-screen overflow-scroll">
      <Hero url={hero} />
      <p className="text-base text-charcoal">
        Written By: {author} on {customDate}
      </p>
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(content.json)}
      </div>
    </div>
  );
}

function processDate(date) {
  console.log(date);
  let newDate =
    date.substring(5, 7) +
    "." +
    date.substring(8, 10) +
    "." +
    date.substring(0, 4);
  return newDate;
}
