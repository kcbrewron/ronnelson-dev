"use client";
import Link from "next/link";
import Head from "next/head";
import {
  Square3Stack3DIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const head = function () {
  return (
    <Head>
      <title>Ronnelson.dev-Homepage</title>
      <link rel="icon" href="/favicon.ico" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        itemProp="description"
        content="My website platform for learning development, building my skills, and challenging myself."
      />
      <meta
        itemProp="image"
        content="https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg"
      />

      <meta property="og:url" content="https://ronnelson.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Ronnelson.dev" />
      <meta
        property="og:description"
        content="My website platform for learning development, building my skills, and challenging myself."
      />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg"
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Ronnelson.dev" />
      <meta
        name="twitter:description"
        content="My website platform for learning development, building my skills, and challenging myself."
      />
      <meta
        name="twitter:image"
        content="https://images.ctfassets.net/2tyl7ps8aucz/kMkX26GTOrfMLDfty6iMS/420f8da8e7414e49d58f330c068d8d8c/ronnelson.jpg"
      />
    </Head>
  );
};

export default function Nav() {
  const [menuState, setMenuState] = useState(false);
  function openMenu() {
    if (menuState ? setMenuState(false) : setMenuState(true));
  }
  return (
    <nav>
      <div className="w-full border-b-indigoBlue border-b-4 mx-auto">
        <div className="flex justify-between ml-4">
          {/* logo navigation */}
          <div className="flex py-4  text-indigoBlue hover:text-fireEngine">
            <Link href="/" className="flex items-center ">
              <Square3Stack3DIcon className="h-6 w-6 mr-1" />
              <span className="font-bold">ronnelson.dev</span>
            </Link>
          </div>
          <div className="flex w-full mx-auto pl-4 py-4">
            {/* primary navigation */}
            <div className="hidden md:flex space-x-4">
              <Link
                className="block hover:text-fireEngine"
                href="/"
                alt="home"
                aria-label="home"
              >
                Home
              </Link>
              <Link
                className="block hover:text-fireEngine"
                href="/blog/leadership"
                alt="leadership"
                aria-label="leadership"
              >
                Leadership
              </Link>
              <Link
                className="block hover:text-fireEngine"
                href="/blog/outdoor"
                alt="outdoor"
                aria-label="outdoor"
              >
                Outdoors
              </Link>
              <Link
                className="block hover:text-fireEngine"
                href="/blog/cooking"
                alt="cooking"
                aria-label="cooking"
              >
                Cooking
              </Link>
            </div>
          </div>

          {/* secondary navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              className="hidden py-1 px-2 bg-indigoBlue text-white rounded-md hover:bg-lapisBlue hover:text-white transition duration-300"
              href="signup"
              alt="signup"
              aria-label="sign up"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile responsive menu here */}
          <div className="flex md:hidden p-4 justify-between text-right text-indigoBlue">
            <button
              className="mobile-menu-button"
              aria-label="menu"
              onClick={openMenu}
            >
              <Bars3Icon
                className={!menuState ? "visible h-6 w-6 hover:text-fireEngine" : "hidden"}
              />
              <XMarkIcon className={menuState ? "visible h-6 w-6" : "hidden"} />
            </button>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div
        className={
          menuState
            ? "visible justify-between text-right transition duration-700"
            : "hidden"
        }
      >
        <Link
          className="block py-4 px-4 hover:text-fireEngine "
          href="/"
          alt="home"
          aria-label="home"
          onClick={openMenu}
        >
          Home
        </Link>
        <Link
          className="block hover:text-fireEngine  py-4 px-4"
          href="/blog/leadership"
          alt="leadership"
          aria-label="leadership"
          onClick={openMenu}
        >
          Leadership
        </Link>
        <Link
          className="block py-4 px-4 hover:text-fireEngine  "
          href="/blog/outdoor"
          alt="outdoor"
          aria-label="outdoor"
          onClick={openMenu}
        >
          Outdoors
        </Link>
        <Link
          className="block hover:text-fireEngine  py-4 px-4 "
          href="/blog/cooking"
          alt="cooking"
          aria-label="cooking"
          onClick={openMenu}
        >
          Cooking
        </Link>
      </div>
    </nav>
  );
}
