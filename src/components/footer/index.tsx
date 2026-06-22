const Footer = () => {
  return (
    <footer className="w-full bg-[#141414] text-zinc-500 py-8 px-4 md:px-8 border-t border-zinc-900 text-xs text-center select-none box-border">
      <div className="max-w-4xl mx-auto flex flex-col gap-4">
        <div className="flex flex-wrap justify-center gap-6 text-zinc-500 font-medium">
          <a href="#" className="hover:underline hover:text-zinc-300 transition-colors">FAQ</a>
          <a href="#" className="hover:underline hover:text-zinc-300 transition-colors">Help Center</a>
          <a href="#" className="hover:underline hover:text-zinc-300 transition-colors">Terms of Use</a>
          <a href="#" className="hover:underline hover:text-zinc-300 transition-colors">Privacy Policy</a>
        </div>
        <p className="text-zinc-600">© {new Date().getFullYear()} Netflix Clone. Part of Bootcamp JDT React Training.</p>
      </div>
    </footer>
  );
};

export default Footer;