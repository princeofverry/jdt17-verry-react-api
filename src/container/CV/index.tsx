interface AwardItem {
  title: string;
  project?: string;
  org?: string;
  competition?: string;
  year: string;
  description?: string;
}

interface ProjectItem {
  title: string;
  stack: string[];
  description: string;
}

const CVPage = () => {
  const technologies = {
    frontend: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
    backend: ["Golang", "Gin", "GORM", "REST API", "JWT"],
    database: ["PostgreSQL", "MySQL", "Firebase"],
    ai: ["Python", "TensorFlow", "YOLO", "OpenCV", "Hailo-8L"],
    iot: ["Arduino", "Raspberry Pi", "Edge AI"],
  };

  const experiences = [
    {
      company: "Aterkia Diponegoro",
      role: "Machine Learning Engineer & Web Developer",
      type: "Part-time & Projects",
    },
    {
      company: "Diskominfo Kota Semarang",
      role: "Fullstack Developer",
      type: "Internship & Developer Roles",
    },
    {
      company: "Bangkit Academy",
      role: "Machine Learning Path",
      type: "Google, GoTo, Traveloka Initiative",
    },
    {
      company: "Diponegoro University",
      role: "Teaching Assistant",
      type: "Academic Support",
    },
  ];

  const awards: AwardItem[] = [
    {
      title: "3rd UI/UX Competition",
      project: "Nourish+",
      year: "2023",
      description:
        "Developed a health application addressing maternal and child mortality and stunting.",
    },
    {
      title: "Top 5 Web Design Techomfest",
      project: "Sinau",
      year: "2024",
      description: "Designed a clean and modern web platform for learning.",
    },
    {
      title: "Awardee of PPK Ormawa Funding",
      project: "Digital Waste Bank Initiative",
      org: "BEM FT UNDIP",
      year: "2024",
      description:
        "Proposed and received funding for a digital platform supporting waste management in local communities.",
    },
    {
      title: "Top 16 Indonesian Ship Contest (KKI)",
      year: "2024",
      description:
        "Developed monitoring systems and datasets supporting autonomous ship operations.",
    },
    {
      title: "1st Place Fun Race KKI",
      year: "2025",
      description:
        "Engineered high-performance controls and path-planning algorithms.",
    },
    {
      title: "Honorable Mention 2 (Juara Harapan 2)",
      competition: "Autonomous Surface Vehicle KKI",
      year: "2025",
      description:
        "Designed robust vision-based navigation systems for autonomous vessels.",
    },
  ];

  const projects: ProjectItem[] = [
    {
      title: "Dopamind+",
      stack: ["Android", "Kotlin", "Firebase", "TensorFlow Lite"],
      description:
        "Mental health application developed during Bangkit Academy capstone project that tracks moods through daily journals and provides insights.",
    },
    {
      title: "Codelingo",
      stack: ["Next.js", "React", "TypeScript", "TailwindCSS", "Vercel"],
      description:
        "Coding platform for elementary school students that teaches programming through games and interactive challenges.",
    },
    {
      title: "The Ace",
      stack: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
      description:
        "Competition registration platform for Computer Engineering UNDIP.",
    },
    {
      title: "Ship Monitoring System",
      stack: ["React", "Leaflet", "Firebase RTDB", "WebSocket"],
      description:
        "Real-time autonomous ship monitoring dashboard displaying speed, direction, angle, and mission status.",
    },
    {
      title: "KKI 2025 Computer Vision",
      stack: ["Python", "OpenCV", "YOLO"],
      description:
        "Computer vision algorithm development for Indonesian Ship Contest 2025.",
    },
    {
      title: "Fire Detection Drone Capstone",
      stack: ["YOLOv8", "Python", "Raspberry Pi 5", "Hailo-8L", "ONNX"],
      description:
        "Real-time fire and smoke detection system using drone imagery and edge AI inference.",
    },
    {
      title: "Backend E-Commerce with Golang",
      stack: ["Go", "Gin", "GORM", "MySQL", "JWT"],
      description:
        "E-commerce backend featuring authentication, CRUD operations, cart, checkout, order management, payment integration, and WebSocket updates.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0c0c0e] grid-bg text-zinc-300 px-4 sm:px-6 lg:px-8 py-16 flex flex-col text-left box-border select-none overflow-hidden relative">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-rose/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[100] h-[100] rounded-full bg-brand-rose/5 blur-[140px] pointer-events-none" />

      <div className="max-w-3xl mx-auto w-full flex flex-col gap-12 box-border relative z-10">
        {/* HERO SECTION */}
        <section className="flex flex-row justify-between text-left box-border">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight m-0 mb-2">
            <span className="text-red-800">Verry</span> Kurniawan
          </h1>
          {/* <p className="text-base sm:text-lg text-zinc-200 font-semibold m-0 mb-4 leading-normal">
            Full-Stack Developer building IoT platforms and AI-powered Computer Vision applications.
          </p>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed m-0 mb-6 font-medium max-w-2xl">
            I craft pixel-perfect interfaces and build intelligent systems that bridge the physical and digital worlds.
          </p> */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded text-xs md:text-sm transition-colors border-0 cursor-pointer"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("connect")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-xs md:text-sm transition-colors border-0 cursor-pointer"
            >
              Contact Me
            </button>
          </div>
        </section>

        {/* PROFESSIONAL SUMMARY / BIO */}
        <section className="flex flex-col text-left box-border">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-2 mb-4">
            Professional Summary
          </h2>
          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed m-0 font-medium">
            I have a broad background in software engineering, gained through
            part-time roles as a developer, independent learning initiatives,
            and hands-on experience during internships. I combine frontend
            craftsmanship with database management, machine learning models, and
            IoT deployment.
          </p>
        </section>

        {/* TECHNOLOGIES */}
        <section className="flex flex-col text-left box-border">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-2 mb-4">
            Technologies & Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left box-border">
            <div>
              <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.frontend.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-900 border hover:scale-105 duration-200 border-zinc-800 text-zinc-300 px-2.5 py-1 rounded text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.backend.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-900 hover:scale-105 duration-200 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">
                Database
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.database.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-900 hover:scale-105 duration-200 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">
                AI / Machine Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.ai.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-900 hover:scale-105 duration-200 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-2">
                IoT / Embedded
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.iot.map((s, idx) => (
                  <span
                    key={idx}
                    className="bg-zinc-900 hover:scale-105 duration-200 border border-zinc-800 text-zinc-300 px-2.5 py-1 rounded text-xs font-semibold"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="flex flex-col text-left box-border">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-2 mb-4">
            Experience
          </h2>
          <div className="flex flex-col gap-6 text-left box-border">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-1 border-l border-zinc-800 pl-4 box-border"
              >
                <h3 className="text-sm md:text-base font-bold text-white m-0">
                  {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-semibold">
                  <span>{exp.role}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-zinc-500 font-medium">{exp.type}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section className="flex flex-col text-left box-border">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-2 mb-4">
            Publications
          </h2>
          <div className="border-l border-zinc-800 pl-4 flex flex-col gap-1 box-border text-left">
            <h3 className="text-sm font-bold text-white m-0">
              UAV-Based Surveillance for Fire Detection Using YOLOv4-Tiny on
              Raspberry Pi 4
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-semibold">
              <span>IEEE Xplore</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-500 font-medium">2025</span>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section className="flex flex-col text-left box-border">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-2 mb-4">
            Awards & Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left box-border">
            {awards.map((aw, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 border border-zinc-800/60 hover:scale-105 duration-200 rounded-md p-4 flex flex-col gap-1 box-border"
              >
                <div className="flex justify-between items-baseline gap-2">
                  <h3 className="text-xs md:text-sm font-bold text-white m-0">
                    {aw.title}
                  </h3>
                  <span className="text-[10px] text-zinc-500 font-bold">
                    {aw.year}
                  </span>
                </div>
                {aw.project && (
                  <p className="text-[11px] text-zinc-400 font-semibold m-0">
                    Proyek: {aw.project} {aw.org && `(${aw.org})`}{" "}
                    {aw.competition && `[${aw.competition}]`}
                  </p>
                )}
                {aw.description && (
                  <p className="text-zinc-500 text-xs leading-relaxed m-0 mt-1 font-medium">
                    {aw.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="flex flex-col text-left box-border">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-2 mb-4">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 gap-6 text-left box-border">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/30 border border-zinc-800/80 rounded-md p-5 flex flex-col gap-2 box-border hover:border-zinc-700 transition-colors"
              >
                <div className="flex flex-wrap justify-between items-baseline gap-2">
                  <h3 className="text-sm font-bold text-white m-0">
                    {proj.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((st, sidx) => (
                      <span
                        key={sidx}
                        className="text-[9px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded font-bold uppercase"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed m-0 font-medium">
                  {proj.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LET'S CONNECT / CONTACT */}
        <section
          id="connect"
          className="flex flex-col text-left border-t border-zinc-850 pt-10 box-border"
        >
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-800 pb-2 mb-4">
            Let's Connect
          </h2>
          <p className="text-zinc-300 text-xs md:text-sm leading-relaxed m-0 mb-6 font-medium">
            I'm always interested in opportunities related to Software
            Engineering, Fullstack Development, Artificial Intelligence, Machine
            Learning, Computer Vision, and IoT systems.
          </p>
          <div className="flex flex-wrap justify-center my-8 items-center gap-4 text-xs md:text-sm font-semibold text-zinc-400">
            <a
              href="https://id.linkedin.com/in/verry-kurniawan"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white px-4 py-2 rounded transition-colors text-center cursor-pointer no-underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/princeofverry"
              target="_blank"
              rel="noreferrer"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white px-4 py-2 rounded transition-colors text-center cursor-pointer no-underline"
            >
              GitHub
            </a>
            <a
              href="https://verry-kurniawan.vercel.app/"
              className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white px-4 py-2 rounded transition-colors text-center cursor-pointer no-underline"
            >
              Portfolio Page
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CVPage;
