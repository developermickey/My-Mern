const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <a
          href="/"
          className="text-2xl font-bold tracking-tight text-white"
        >
          City<span className="text-emerald-400">Blog</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="/about-us"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            About Us
          </a>

          <a
            href="/blogs"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Blog
          </a>

          <a
            href="/contact-us"
            className="text-sm font-medium text-zinc-300 transition hover:text-white"
          >
            Contact Us
          </a>

          {/* Login */}
          <a
            href="/login"
            className="rounded-full border border-emerald-400 px-5 py-2 text-sm font-semibold text-emerald-400 transition duration-300 hover:bg-emerald-400 hover:text-zinc-950"
          >
            Login
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </header>
  );
};

export default Header;