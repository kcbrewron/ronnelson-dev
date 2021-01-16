export default function Nav() {
  return (
    <nav className="sticky top-0 lg:z-50 w-full max-w-8xl mx-auto bg-black flex-none flex border-cadet border-b-4">
      <div className="text-2xl text-cadet inline-block left-2">
        <a href="/" alt="Home">
          [ ronnelson.dev ]
        </a>
      </div>
      <div className="inline-block text-xl text-cadet px-4 absolute right-4">
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
    </nav>
  );
}
