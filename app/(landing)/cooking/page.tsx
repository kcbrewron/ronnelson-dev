import { fetchLandingPage } from "../../../utils/api";
import LandingPagePost from "../../../components/LandingPage"; //might return to later
import type { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const response = await getData("Cooking");
  const landing = response[0] ? response[0] : {};
  return {
    title: landing.seoMetadata.seoTitle,
    description: landing.seoMetadata.seoDescription,
    keywords: landing.seoMetadata.seoKeywords,
  };
}

async function getData(route: string) {
  const res = await fetchLandingPage(route);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res;
}

export default async function Page({ params }) {
  console.log(params);
  const res = await getData("Cooking");
  const elements = LandingPagePost(res[0]);

  return (
    <>
      <div className="top-0">{elements}</div>
    </>
  );
}
