"use client";
import Link from "next/link";
import Head from "next/head";
import { CodeBracketSquareIcon, XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import {useState} from "react";

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
  //declare initial menu state as closed
  const [menuState, setMenuState] = useState(false);
  function openMenu() {
    console.log("showMenu");
    if(menuState ? setMenuState(false) : setMenuState(true));
  }
  return (
    <nav>
      <div className="w-full border-b-indigoBlue border-b-4 mx-auto text-indigoBlue">
        <div className="px-8 flex justify-between">
          {/* logo navigation */}
            <div className="flex">
              <Link href="/" className="flex items-center py-4 hover:text-lapisBlue">
                <CodeBracketSquareIcon className="h-6 w-6 mr-1 text-indigoBlue" />
                <span className="font-bold">ronnelson.dev</span>
              </Link>
            </div>
          <div className="flex space-x-4">
            {/* primary navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                className="block py-4 px-4 hover:text-lapisBlue"
                href="/leadership"
                alt="leadership"
                aria-label="leadership"
              >
                Leadership
              </Link>
              <Link
                className="block py-2 px-4 hover:text-lapisBlue"
                href="/outdoor"
                alt="outdoor"
                aria-label="outdoor"
              >
                Outdoors
              </Link>
              <Link
                className="block py-4 px-4 hover:text-lapisBlue"
                href="/cooking"
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
          <div class="md:hidden flex items-center text-indigoBlue">
              <button className="mobile-menu-button px-2" onClick={openMenu}>
                <Bars3Icon className={!menuState ? "visible h-6 w-6": "hidden"} />
                <XMarkIcon className={menuState ? "visible h-6 w-6": "hidden"} />
              </button>
          </div>

        </div>
      </div>
      {/* mobile */}
      <div class={menuState ? "visible transition duration-500": "hidden"}>
        <Link
                className="block py-4 px-4 hover:text-lapisBlue"
                href="home"
                alt="home"
                aria-label="home"
              >
                Home
              </Link>
              
        <Link
                className="block py-4 px-4 hover:text-lapisBlue"
                href="/leadership"
                alt="leadership"
                aria-label="leadership"
              >
                Leadership
              </Link>
              <Link
                className="block py-2 px-4 hover:text-lapisBlue"
                href="/outdoor"
                alt="outdoor"
                aria-label="outdoor"
              >
                Outdoors
              </Link>
              <Link
                className="block py-4 px-4 hover:text-lapisBlue"
                href="/cooking"
                alt="cooking"
                aria-label="cooking"
              >
                Cooking
              </Link>
      </div>
    </nav>
  );
}
