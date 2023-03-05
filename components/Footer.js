//import Profile from "./Profile";
import Link from "next/link";
import { Square3Stack3DIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Footer() {
  let today = new Date();
  return (
    <div className="w-full border-t-fireEngine border-t-2 mx-auto bg-indigoBlue text-white">
      <div className="flex justify-between">
        {/* copy right information */}
        <div className="flex">
          <div className="flex space-x-2 ml-4 py-3 text-md text-white">
            <Square3Stack3DIcon className="h-6 w-6 text-white" />
            <p>Ron Nelson &#169; {today.getFullYear()}</p>
          </div>
        </div>

        {/* profile navigation */}
        <div className="hidden md:flex mr-4 space-x-4 py-3">
          <Link href="/about" passHref className="hover:text-fireEngine">
            About Me
          </Link>
          <Link
            href="https://github.com/kcbrewron"
            target={"_blank"}
            className="hover:text-fireEngine"
            passHref
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/kc-ronnelson/"
            target={"_blank"}
            className="hover:text-fireEngine"
            passHref
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/kcbrewron"
            target={"_blank"}
            className="hover:text-fireEngine"
            passHref
          >
            Twitter
          </Link>
        </div>
        {/* mobile profile links */}
        <div className="text-right text-white justify-between w-full md:hidden items-center mr-4 space-x-4 py-3">
          <Link href="/about" passHref>
            About
          </Link>
          <Link
            href="https://github.com/kcbrewron"
            target={"_blank"}
            className="h-6 w-6"
            passHref
          >
            <Image src="/github.svg" alt="github icon" quality={100} width={16} height={16} className="inline" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kc-ronnelson/"
            target={"_blank"}
            className="inline h-6 w-6"
            passHref
          >
            <Image src="/linkedin.svg" alt="linkedin icon" quality={100} width={16} height={16} className="inline"/>
          </Link>
          <Link
            href="https://twitter.com/kcbrewron"
            target={"_blank"}
            className="h-6 w-6"
            passHref
          >
            <Image src="/twitter.svg" alt="twitter icon" quality={100} width={16} height={16} className="inline text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
