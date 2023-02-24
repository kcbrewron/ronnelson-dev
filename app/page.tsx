import Image from "next/image";
import fetchData from "../utils/github";
import { Suspense } from "react";
import markdownStyles from "./markdown-styles.module.css";

export const metadata = {
  title: "Journey with Me",
  keywords:
    "software development, coding, tech, outdoor, camping, family, hobbies, adventures, tech gadgets, campsites, hiking, family camping, outdoor family",
  description:
    "Explore the world of software development, camping, outdoors, and family with this site. Find tips and recommendations on the best tech gadgets for camping, the best campsites for software developers, and the benefits of being an outdoor family",
};

async function getData() {
  const res = await fetchData();
  console.log(res.data.user);
  return res.data.user.avatarUrl;
}
export default async function Home() {
  const user = await getData().catch((err) => {
    console.error(err);
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUNaoBwABogDkC7u/YgAAAABJRU5ErkJggg==";
  });

  return (
    <>
      <div className="bg-ghost w-full">
        <p className="text-4xl bold text-center p-10 font-semibold">
          Welcome to my Journey
        </p>
      </div>
      <div className="container pt-5">
        <div className="grid grid-cols-9 px-10 mt-16 lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-3">
          <div className="content-center">
            <Suspense
              fallback={
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUNaoBwABogDkC7u/YgAAAABJRU5ErkJggg=="
                  width={200}
                  height={200}
                  alt="placeholder"
                  className="rounded-full content-center"
                />
              }
            ></Suspense>
            <Image
              src={user}
              width={200}
              height={200}
              alt="Image of Ron"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOUUNaoBwABogDkC7u/YgAAAABJRU5ErkJggg=="
              priority
              className="rounded-full content-center"
            />
          </div>

          <div className="p-5 col-span-10 col-start-2 align-middle text-charcoal italic text-xl">
            &quot;There are five important things for living a successful and
            fulfilling life: never stop dreaming, never stop believing, never
            give up, never stop trying, and never stop learning.&quot; - Roy
            Bennet
          </div>
          <div id="bio" className="p-5 row-start-3 col-span-2 text-xl">
            <p className="py-3">
              Hi there! I&apos;m Ron, application developer and solution
              architect with over 15 years of experience in the financial
              services sector. I live in the midwest and my family includes my
              wife, two kids, as of writing this three dogs.
            </p>
            <p className="py-3 text-xl">
              Throughout my career, I&apos;ve worked extensively with a range of
              programming languages and technologies, including Java, Spring
              Boot, Informatica, JavaScript, Node.js, Next.js, React, and
              Python. I&apos;m passionate about using technology to solve
              real-world problems and have a proven track record of delivering
              high-quality software solutions.
            </p>
            <p className="py-3 text-xl">
              When I&apos;m not working, I enjoy spending time with my family,
              whether we&apos;re hiking, camping, or just taking a walk in the
              park. We love to get outside and explore our area as well as those
              great parks and areas to explor around the country. Our kids and
              dogs love to get outside with us and take a walk, run free, or
              just lounge around in the sun.
            </p>
            <p className="py-3 text-xl">
              In my free time, I also love experimenting with new technologies
              and contributing to open-source projects. I&apos;m always looking
              for new challenges and opportunities to expand my skill set.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
