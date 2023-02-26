import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="flex justify-items-between space-x-4">
        <Link href="/about" passHref className="hover:hover:text-bus">
          {" "}
          About Me{" "}
        </Link>
        <Link
          href="https://github.com/kcbrewron"
          className="hover:hover:text-bus"
          passHref
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/kc-ronnelson/"
          className="hover:text-bus"
          passHref
        >
          LinkedIn
        </Link>
        <Link
          href="https://twitter.com/kcbrewron"
          className="hover:text-bus"
          passHref
        >
          Twitter
        </Link>
      </div>
    </>
  );
}
