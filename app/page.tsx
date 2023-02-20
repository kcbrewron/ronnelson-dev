import { fetchHome, fetchLandingPage } from "../utils/api";
import HomePage from "../components/HomePage";

export async function generateMetadata({ params }) {
  const response = await getData();
  const landing = response[0] ? response[0] : {};
  return {
    title: landing.seoMetadata.seoTitle,
    description: landing.seoMetadata.seoDescription,
    keywords: landing.seoMetadata.seoKeywords,
  };
}

export async function getData() {
  const res = await fetchHome();
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res;
}

export default async function Home() {
  const res = await getData();
  console.log(res[0].title);
  const elements = HomePage(res[0]);
  return (
    <>
      <div className="top-0">{elements}</div>
    </>
  );
}
