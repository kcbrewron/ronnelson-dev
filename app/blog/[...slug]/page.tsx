import { fetchLandingPage } from "../../../utils/api";
import LandingPagePost from "../../../components/LandingPage";
import { notFound } from "next/navigation";
//import type { Metadata } from "next";

async function getData(slug: string) {
  const pageContent = await fetchLandingPage(slug["0"]).catch((err) => {
    console.log("Error retrieving content " + err);
  });
  return pageContent;
}

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
