export default function Card({ title, author, date, description }) {
  return (
    <button className="my-10 p-8 shadow-xl text-center rounded bg-powder h-24 min-h-0 md:min-h-full">
      <div className="">Image placeholder</div>
      <div className="text-xl text-charcoal">{title}</div>
      <div className="text-sm text-electric">
        Written By: {author} on {date}
      </div>
      <div className="text-base text-electric">{description}</div>
    </button>
  );
}
