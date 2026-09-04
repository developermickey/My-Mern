const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-white"
            >
              City<span className="text-emerald-400">Blog</span>
            </a>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400">
              Discover stories, ideas, and insights from your city.
              Stay informed, inspired, and connected with the community.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-zinc-950"
                aria-label="Twitter"
              >
                X
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-zinc-950"
                aria-label="Instagram"
              >
                ◎
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-zinc-950"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm transition hover:text-emerald-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about-us"
                  className="text-sm transition hover:text-emerald-400"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="/blogs"
                  className="text-sm transition hover:text-emerald-400"
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/contact-us"
                  className="text-sm transition hover:text-emerald-400"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-sm transition hover:text-emerald-400"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/terms"
                  className="text-sm transition hover:text-emerald-400"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="/cookies"
                  className="text-sm transition hover:text-emerald-400"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CityBlog. All rights reserved.
          </p>

          <p>
            Made with <span className="text-emerald-400">♥</span> for the community
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;