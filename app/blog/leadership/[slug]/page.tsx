import { getArticleBySlug } from "utils/api";
import ArticleComponent from "@/components/ArticleComponent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

async function getData(route: string) {
  const pageContent = await getArticleBySlug(route).catch((err) => {
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
  const metaData = response.seoMetadata ? response.seoMetadata : {};
  console.log(response.seoMetadata);
  const title = metaData.seoTitle || "";
  const description = metaData.seoDescription || "";
  const keywords = metaData.seoKeywords || "";
  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: "Ron", url: "https://ronnelson.dev" }],
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  //trying to get route for landing pages since the layout and code is the same.
  //generateMetadata(params);
  const res = await getData(params.slug).catch((err: any) => {
    console.error(err);
    return err;
  });
  if (!res) {
    return notFound();
  }
  const elements = ArticleComponent(res);

  return (
    <>
      <div className="top-0">{elements}</div>
    </>
  );
}
