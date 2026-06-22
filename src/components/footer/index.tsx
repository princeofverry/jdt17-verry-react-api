const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0c] text-zinc-500 py-12 px-6 border-t border-zinc-900 text-xs select-none box-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-zinc-300 font-semibold text-sm">
            <span className="text-brand-rose">★</span>
            <span>Verry Kurniawan</span>
          </div>
          <p className="text-zinc-600 text-center md:text-left text-[11px]">
            Developer biasa | Vibe coding tipis-tipis | semoga ga slop
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex flex-wrap justify-center gap-5 text-zinc-400 font-medium">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-rose transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-rose transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="/cv-page"
              className="hover:text-brand-rose transition-colors duration-200"
            >
              Curriculum Vitae
            </a>
            <a
              href="/movie-page"
              className="hover:text-brand-rose transition-colors duration-200"
            >
              Movies
            </a>
          </div>
          <p className="text-zinc-600 text-[10px]">
            © {new Date().getFullYear()} Verry Kurniawan. Handcrafted with
            React, Tailwind CSS, and AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
