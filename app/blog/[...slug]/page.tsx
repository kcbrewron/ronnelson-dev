import { fetchLandingPage } from "../../../utils/api";
import LandingPagePost from "../../../components/LandingPage";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

async function getData(slug: string) {
  console.log("Fetch landing page data for %s", slug);
  const pageContent = await fetchLandingPage(slug["0"]).catch((err) => {
    console.error("Error retrieving content " + err);
  });
  return pageContent;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const response = await getData(params.slug);
  const metaData = response?.seoMetadata ? response.seoMetadata : {};
  const title = metaData.seoTitle || "";
  const description = metaData.seoDescription || "";
  const keywords = metaData.seoKeywords || "";
  return {
    title: title,
    description: description,
    keywords: keywords,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  //trying to get route for landing pages since the layout and code is the same.
  //generateMetadata(params);
  const res = await getData(params.slug);
  if (!res) {
    return notFound();
  }
  //console.log(res.contentfulMetadata.tags[0].id);
  const elements = LandingPagePost(res);

  return (
    <>
      <div className="top-0">{elements}</div>
    </>
  );
}
