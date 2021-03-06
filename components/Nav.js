export default function Nav() {
  return (
    <div className="bg-gradient-to-r from-vividSky to-blueJeans to-vividSky pb-1">
      <div className="sticky top-0 z-40 w-full max-w-8xl mx-auto py-5 bg-black flex-none flex">
        <div className="text-2xl text-blueJeans inline-block left-2">
          <a href="/" alt="Home">
            [ ronnelson.dev ]
          </a>
        </div>
        <div className="inline-block text-xl text-blueJeans px-4 absolute right-4">
          <a
            href="/"
            className="inline-block px-4 hover:bg-charcoal hover:text-ghost rounded-md"
            alt="Home"
          >
            Home
          </a>
          <a
            href="/about"
            className="inline-block px-4 justify-end hover:bg-charcoal hover:text-ghost rounded-md"
            alt="About Me"
          >
            About
          </a>
          <a
            href="/blog"
            className="inline-block px-4 justify-end hover:bg-charcoal hover:text-ghost rounded-md"
            alt="blog"
          >
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}
