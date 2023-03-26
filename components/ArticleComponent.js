import HeroComponent from "./HeroComponent";
import RenderContent from "./RenderContent";
// Render post.body.json to the DOM using
// documentToReactComponents from "@contentful/rich-text-react-renderer"
/**
 *
 * @param ArticlePage Input API response for any landing page
 * @returns Content layout for a landing page
 */
export default function ArticlePage(ArticlePage) {
  const heroComponent = HeroComponent(ArticlePage.hero)
  const content = RenderContent(ArticlePage.content)
  return (
    <div>
      {heroComponent}
      {content}
    </div>
   );
}
