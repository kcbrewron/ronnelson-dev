import Image from "next/image";
import Link from "next/link";

export default function RecentArticleItem(item) {
  const link = "blog/" + item.category + "/" + item.slug;
  const hero =
    item.__typename === "LandingPage"
      ? {
          url: item.heroImage.url,
          width: item.heroImage.width,
          height: item.heroImage.height,
          quality: 75,
          title: item.heroImage.title,
        }
      : {
          url: item.hero.heroImage.url,
          width: item.hero.heroImage.width,
          height: item.hero.heroImage.height,
          quality: 75,
          title: item.hero.heroImage.title,
        };
  return (
    <div
      key={item.title}
      className="rounded-xl bg-shadow px-4 py-2 my-4 space-y-4
        drop-shadow-md hover:drop-shadow-xl w-full md:w-1/3"
    >
      <div className="relative h-24">
        <Image
          className="rounded-md"
          src={hero.url}
          alt={hero.title}
          fill
          quality={75}
        />
      </div>
      <div>
        {/*wrapper */}
        <div>
          <Link href={link}>
            <span className="text-lapisBlue hover:text-fireEngine text-md text-bold py-6">{item.title}</span>
          </Link>
        </div>

        <div className="flex-1">
          <p className="text-sm pb-4">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
