import RecentArticleItem from "./RecentArticleItem";
import Link from "next/link";
export default function RecentArticles(items) {
  const recentArticles = items.map((article) => RecentArticleItem(article));

  return (
    <div className="block md:flex md:flex-row mx-auto justify-between w-3/4 md:w-2/3 pb-10">
      <div className="flex flex-col md:flex md:flex-row md:space-x-6">{recentArticles}</div>
    </div>
  );
}
