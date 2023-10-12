import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="flex justify-items-between space-x-4">
        <Link href="/about" passHref className="hover:text-orange-600">
          About Me
        </Link>
        <Link
          href="https://github.com/kcbrewron"
          className="hover:text-orange-600"
          passHref
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/kc-ronnelson/"
          className="hover:text-orange-600"
          passHref
        >
          LinkedIn
        </Link>
        <Link
          href="https://twitter.com/kcbrewron"
          className="hover:text-orange-600"
          passHref
        >
          Twitter
        </Link>
      </div>
    </>
  );
}
