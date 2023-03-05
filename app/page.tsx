import Image from "next/image";
import { fetchHome } from "@/utils/api";
import { notFound } from "next/navigation";
import RecentArticles from "@/components/RecentArticles";
import HomePage from "@/components/LandingPage";

export const metadata = {
  title: "Journey with Me",
  keywords:
    "software development, coding, tech, outdoor, camping, family, hobbies, adventures, tech gadgets, campsites, hiking, family camping, outdoor family",
  description:
    "Explore the world of software development, camping, outdoors, and family with this site. Find tips and recommendations on the best tech gadgets for camping, the best campsites for software developers, and the benefits of being an outdoor family",
};
/**
 * Return all of the home page
 * @returns Home Page content
 */
async function getData() {
  const res = await fetchHome().catch((err) => {
    console.error("Ohhs snapp I'm broken %s", err);
  });

  return res;
}
export default async function Page() {
  const home = await getData();
  if (!home) {
    return notFound();
  }
  const content = HomePage(home);
  const recentArticles = RecentArticles(home.recentArticlesCollection.items);

  return (
    <>
      <div className="top-0">{content}</div>
      {recentArticles}
    </>
  );
}
