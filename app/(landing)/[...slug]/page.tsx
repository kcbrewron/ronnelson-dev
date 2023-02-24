import { fetchLandingPage } from "../../../utils/api";
import LandingPagePost from "../../../components/LandingPage";
import { notFound } from "next/navigation";
/*
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  //console.log("Get Metadata for " + params.slug);
  const response = await getData(params.slug);
  const landing = response[0] ? response[0] : {};
  return {
    title: landing.seoMetadata.seoTitle,
    description: landing.seoMetadata.seoDescription,
    keywords: landing.seoMetadata.seoKeywords,
  };
}*/

async function getData(route: string) {
  console.log("Requesting for route " + route);
  const pageContent = await fetchLandingPage(route).catch((err) => {
    console.log("Error retrieving content " + err);
  });
  //console.log("Logging out the page content objects " + pageContent.);
  return pageContent;
}

export default async function Page({ params }: { params: { slug: string } }) {
  //trying to get route for landing pages since the layout and code is the same.
  console.log("The slug sent for the page " + params.slug);
  const res = await getData(params.slug);
  if (!res) {
    return notFound();
  }
  const elements = LandingPagePost(res);

  return <div className="top-0">{elements}</div>;
}
