import { fetchLandingPage } from "../../../utils/api";
import LandingPagePost from "../../../components/LandingPage";
import { notFound } from "next/navigation";

async function getData(route: string) {
  console.log("Requesting for route " + route);
  const pageContent = await fetchLandingPage(route).catch((err) => {
    console.log("Error retrieving content " + err);
  });
  return pageContent;
}
// export async function generateMetadata(params: {
//   slug: string;
// }): Promise<Metadata> {
//   console.log("Get metadata for " + params);
//   const response = await getData(params.slug);
//   const landing = response.seoMetadata ? response.seoMetadata : {};
//   console.log("Keys inside the seoMetadata object %s", Object.keys(landing));
//   const title = landing.seoTitle || "";
//   const description = landing.seoDescription || "";
//   const keywords = landing.seoKeywords || "";
//   return {
//     title: title,
//     description: description,
//     keywords: keywords,
//   };
// }

export default async function Page({ params }: { params: { slug: string } }) {
  //trying to get route for landing pages since the layout and code is the same.
  //generateMetadata(params);
  const res = await getData(params.slug);
  if (!res) {
    return notFound();
  }
  const elements = LandingPagePost(res);

  return (
    <>
      <div className="top-0">{elements}</div>
    </>
  );
}
