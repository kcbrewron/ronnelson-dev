//import Profile from "./Profile";
import Link from 'next/link';
import { CodeBracketIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  let today = new Date();
  return (
    <div className="w-full bg-indigoBlue mx-auto text-white">
      <div className="px-8 flex justify-between">
        {/* copy right information */}
        <div className="flex">
          <div className="flex space-x-2 py-3 text-md text-white">
            <CodeBracketIcon className="h-6 w-6 mr-1 text-white" />
            Ron Nelson &#169; {today.getFullYear()}
          </div>
        </div>

        {/* profile links */}
        <div className="md:flex items-center space-x-4">
          <Link href="/about" passHref className="hover:hover:text-bus p-2">
            About Me
          </Link>
          <Link
            href="https://github.com/kcbrewron"
            className="hover:hover:text-bus p-2"
            passHref
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/kc-ronnelson/"
            className="hover:text-bus p-2"
            passHref
          >
            LinkedIn
          </Link>
          <Link
            href="https://twitter.com/kcbrewron"
            className="hover:text-bus p-2"
            passHref
          >
            Twitter
          </Link>
        </div>
      </div>
    </div>
  );
}
