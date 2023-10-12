import Image from "next/image";
import fetchData from "../../utils/github";
import "../globals.css";
import Button from "@/components/Button";

const metadata = {
  title: "Journey with Me",
  authors: [{ name: "Ron Nelson", url: "https://github.com/kcbrewron" }],
  keywords:
    "software development, coding, tech, outdoor, camping, family, hobbies, adventures, tech gadgets, campsites, hiking, family camping, outdoor family",
  description:
    "Explore the world of software development, camping, outdoors, and family with this site. Find tips and recommendations on the best tech gadgets for camping, the best campsites for software developers, and the benefits of being an outdoor family",
};

async function getData() {
  const res = await fetchData();
  return res.data.user.avatarUrl;
}
export default async function Home() {
  const user = await getData().catch((err) => {
    console.error(err);
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUNaoBwABogDkC7u/YgAAAABJRU5ErkJggg==";
  });

  return (
    <>
      {/*page title*/}
      <div className="w-full bg-fireEngine mx-auto">
        <div className="text-4xl bold text-center p-10 font-semibold">
          Welcome to my Journey
        </div>
      </div>

      {/* avatar and quote */}
      <div className="flex justify-between max-w-2xl space-x-4 mx-auto bg-shadow drop-shadow-md my-4">
        <div className="py-4 justify-between">
          <Image
            src={user}
            width={600}
            height={200}
            alt="Image of Ron"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUNaoBwABogDkC7u/YgAAAABJRU5ErkJggg=="
            priority
            className="rounded-full"
          />
        </div>
        <div className="text-slate-700 italic text-xl py-4">
          &quot;There are five important things for living a successful and
          fulfilling life: never stop dreaming, never stop believing, never give
          up, never stop trying, and never stop learning.&quot; <br /> - Roy
          Bennet
        </div>
      </div>
      <div id="bio" className="max-w-2xl px-2 space-y-4 mx-auto text-xl pb-4">
        <div>
          Hi there! I&apos;m Ron, application developer and solution architect
          with over 15 years of experience in the financial services sector. I
          live in the midwest and my family includes my wife, two kids, as of
          writing this three dogs.
        </div>
        <div>
          Throughout my career, I&apos;ve worked extensively with a range of
          programming languages and technologies, including Java, Spring Boot,
          Informatica, JavaScript, Node.js, Next.js, React, and Python. I&apos;m
          passionate about using technology to solve real-world problems and
          have a proven track record of delivering high-quality software
          solutions.
        </div>
        <div>
          When I&apos;m not working, I enjoy spending time with my family,
          whether we&apos;re hiking, camping, or just taking a walk in the park.
          We love to get outside and explore our area as well as those great
          parks and areas to explore around the country. Our kids and dogs love
          to get outside with us and take a walk, run free, or just lounge
          around in the sun.
        </div>
        <div>
          In my free time, I also love experimenting with new technologies and
          contributing to open-source projects. I&apos;m always looking for new
          challenges and opportunities to expand my skill set.
        </div>
      </div>
    </>
  );
}
