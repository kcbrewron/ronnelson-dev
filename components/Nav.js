export default function Nav() {
  return (
    <div className="md:w-screen bg-black border-powder border-b-4">
      <div className="text-2xl text-powder inline-block left-2">
        <a href="/" alt="Home">
          [ ronnelson.dev ]
        </a>
      </div>
      <div className="inline-block text-xl text-electric px-4 absolute right-4">
        <div className="inline-block px-4">
          <a href="/" alt="Home">
            Home
          </a>
        </div>
        <div className="inline-block px-4 justify-end">
          <a href="/about" alt="About Me">
            About
          </a>
        </div>
        <div className="inline-block px-4 justify-end">
          <a href="/blog" alt="blog">
            Blog
          </a>
        </div>
      </div>
    </div>
  );
}
