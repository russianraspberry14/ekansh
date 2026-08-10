import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import './ProMode.css'
import me from './assets/me.JPG'

const experiences = [
  {
    title: "Tech Fellow",
    org: "Fischell Institute for Biomedical Devices, Nebula Fellowship Program",
    duration: "Aug 2026 – Dec 2026",
    description: "Built evaluation pipeline for GPT-5-Nano on scientific plot understanding using tick-based spacing normalization; evaluated structural agreement between predicted and ground-truth plots.",
    skills: ["Python", "GPT-5-Nano", "Evaluation Pipelines", "ML Research", "Data Analysis"]
  },
  {
    title: "Research Assistant",
    org: "UM Institute of Advanced Computer Studies (Dr. Haizhao Yang)",
    duration: "Mar 2025 – Dec 2025",
    description: "Enhanced LLM fine-tuning and benchmarking (Qwen2.5, DeepSeek-VL R1) using PEFT (LoRA), LLaMA-Factory, HuggingFace Transformers, and PyTorch in multi-GPU distributed environments.",
    skills: ["Python", "PyTorch", "LoRA", "PEFT", "HuggingFace", "LLaMA-Factory", "Linux"]
  },
  {
    title: "Technology Assistantship Intern",
    org: "Maryland Institute of Technology in Humanities (Dr. Raff Viglianti)",
    duration: "Aug 2025 – Jan 2026",
    description: "Built Astro-based frontend with CETEIcean library for client-side TEI XML parsing and rendering; implemented TEI Processing Model logic for dynamic build-time transformation.",
    skills: ["JavaScript", "Astro", "TEI XML", "CETEIcean", "Frontend Development"]
  },
  {
    title: "Web Developer and Designer",
    org: "Campus Coders Crew",
    duration: "May 2025 – May 2026",
    description: "Developed production websites from Figma wireframes using React, HTML, CSS, and JavaScript; integrated REST APIs and backend databases (MySQL, PostgreSQL).",
    skills: ["React", "HTML/CSS", "JavaScript", "Figma", "MySQL", "PostgreSQL"]
  },
  {
    title: "Resident Assistant",
    org: "Department of Resident Life, University of Maryland",
    duration: "Aug 2025 – Present",
    description: "Provided peer support, conflict mediation, and crisis response for 49 residents; designed and facilitated community-building programming.",
    skills: ["Leadership", "Crisis Management", "Conflict Resolution", "Community Building"]
  },
  {
    title: "Academic Peer Mentor",
    org: "Office of Undergraduate Research, UMD — FIRE: Bioinspired Robotics",
    duration: "Aug 2024 – Dec 2024",
    description: "Mentored 40 FIRE students through bioinspired robotics research and academic presentation preparation.",
    skills: ["Mentoring", "Teaching", "Workshop Facilitation", "Academic Planning"]
  },
  {
    title: "Community Assistant",
    org: "Department of Resident Life, University of Maryland",
    duration: "Aug 2024 – Aug 2025",
    description: "Managed key distribution, package processing, and service desk operations supporting 706 residents.",
    skills: ["Administrative Support", "Customer Service", "Database Management"]
  },
  {
    title: "VP for Diversity, Equity & Inclusion",
    org: "South Hill Area Council, University of Maryland",
    duration: "Aug 2023 – May 2024",
    description: "Managed diversity programs and initiatives to foster an inclusive campus culture across the South Hill residential community.",
    skills: ["Leadership", "Diversity Programs", "Event Planning", "Community Engagement"]
  }
];

const projects = [
  {
    title: "Assist²",
    subtitle: "RAG-based Q&A System",
    description: "Hybrid retrieval pipeline combining dense embeddings with BM25 keyword search, re-ranked with a cross-encoder for joint query-document relevance before grounded generation. Fixed a semantic mismatch between user queries and formal policy language using LLM-driven query expansion, improving retrieval coverage across a 133-chunk corpus. Evaluated with a RAGAS suite and engineered hallucination controls.",
    tech: ["Python", "LangChain", "MongoDB Atlas", "Gemini 2.5"],
    link: "https://github.com/russianraspberry14/resassist"
  },
  {
    title: "Knowtion",
    subtitle: "Health Tracker Web App",
    description: "Real-time mental health app that analyzes audio and physiological signals to detect stress and emotional shifts using datasets like RAVDESS and WESAD. Full-stack pipeline integrating ML inference to help individuals monitor mood patterns.",
    tech: ["Flask", "React", "Librosa", "XGBoost"],
    link: "https://github.com/russianraspberry14/emoticon"
  },
  {
    title: "TrotMate",
    subtitle: "Road trip planner with dynamic segmentation and hotel/restaurant suggestions",
    description: "Allows users to enter start and end locations, automatically splits trips into daily driving segments, suggests hotels and restaurants via Google Places API, and exports plans as shareable Google Maps links or .kml files.",
    tech: ["Vite-React", "Tailwind CSS", "Google Maps API", "Places API", "Directions API"],
    link: "https://github.com/russianraspberry14/trotter"
  },
  {
    title: "Bioinspired Flight Optimization",
    subtitle: "Bio-inspired wingtip designs for small UAVs",
    description: "Explored aerodynamic advantages of bald eagle-inspired wingtip structures to improve energy efficiency in drones. Combined flexible TPU 3D-printed components with servo-controlled pulley systems to reduce drag and enhance lift in the Chesapeake Bay monitoring context.",
    tech: ["Arduino", "C", "Fusion360", "3D Printing"],
    link: "/bird.pdf"
  },
  {
    title: "Digital Home",
    subtitle: "Retro-inspired CS portfolio website",
    description: "Personal portfolio featuring GSAP animations, a draggable contact modal (Framer Motion), an iPod-style experience browser, project archives, and a real-time guestbook backed by Supabase.",
    tech: ["Vite-React", "GSAP", "Framer Motion", "Supabase"],
    link: "https://github.com/russianraspberry14/ekansh"
  },
  {
    title: "Brewery Finder",
    subtitle: "Location-based brewery search using Open Brewery DB API",
    description: "Web app that helps users locate nearby breweries by querying the Open Brewery DB API and rendering results dynamically on the page.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/russianraspberry14/brewery-finder/tree/main"
  }
];

const HUES = [350, 28, 95, 160, 215, 280];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

function ArrowIcon() {
  return (
    <svg className="pro-arrow-icon" width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.25M11.5 2.5V9.75" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Aurora({ reduce }) {
  const blobs = [
    { hue: HUES[0], size: 560, style: { top: '-12%', left: '0%' }, range: 42, duration: 24 },
    { hue: HUES[3], size: 640, style: { top: '10%', right: '-14%' }, range: 50, duration: 30 },
    { hue: HUES[5], size: 500, style: { top: '56%', left: '-10%' }, range: 44, duration: 26 },
    { hue: HUES[1], size: 440, style: { bottom: '-14%', right: '4%' }, range: 34, duration: 21 },
  ];

  return (
    <div className="pro-aurora" aria-hidden="true">
      {blobs.map((b, i) => (
        <motion.span
          key={i}
          className="pro-aurora__blob"
          style={{ '--hue': b.hue, width: b.size, height: b.size, ...b.style }}
          animate={reduce ? undefined : {
            x: [0, b.range, -b.range * 0.6, 0],
            y: [0, -b.range * 0.65, b.range * 0.5, 0],
          }}
          transition={reduce ? undefined : {
            duration: b.duration,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

function ProMode({ onToggle }) {
  const reduce = useReducedMotion();
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.6'],
  });
  const railFill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = ''; };
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 104;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="pro-page">
      <Aurora reduce={reduce} />

      <motion.nav
        className="nav-pill"
        aria-label="Primary"
        initial={reduce ? false : { x: '-50%', y: -24, opacity: 0 }}
        animate={{ x: '-50%', y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="wordmark">ES</span>
        <ul className="nav-pill__links">
          <li><a href="#about" onClick={scrollTo('about')}>About</a></li>
          <li><a href="#experience" onClick={scrollTo('experience')}>Experience</a></li>
          <li><a href="#projects" onClick={scrollTo('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={scrollTo('contact')}>Contact</a></li>
        </ul>
        <button className="nav-pill__cta" onClick={onToggle}>Cozy mode</button>
      </motion.nav>

      <main className="pro-main">
        <section id="about" className="pro-about">
          <motion.div
            className="pro-about-inner"
            initial={reduce ? false : 'hidden'}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
          >
            <motion.div className="pro-photo-ring" variants={fadeUp}>
              <img src={me} alt="Ekansh Sahu" className="pro-photo" />
            </motion.div>
            <motion.div className="pro-bio" variants={fadeUp}>
              <h1 className="pro-fullname">Ekansh Sahu</h1>
              <p className="pro-title-line">B.S. Computer Science &nbsp;·&nbsp; Minor: Robotics and Automation Systems</p>
              <p className="pro-institution">University of Maryland, College Park</p>
              <p className="pro-credentials">GPA: 3.86 &nbsp;·&nbsp; Dean's List &nbsp;·&nbsp; AWS Cloud Practitioner Certified</p>
              <div className="pro-links">
                <a href="mailto:sahuekansh11@gmail.com">Email</a>
                <a href="https://github.com/russianraspberry14" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/ekansh-sahu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="/EntireResume.pdf" target="_blank" rel="noopener noreferrer">CV</a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="pro-tagline"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <p>I fine-tune and evaluate language models — working with Qwen, DeepSeek, and vision-language architectures using LoRA and PEFT across distributed GPU environments. In parallel, I study bio-inspired flight mechanics, engineering bald eagle wingtip structures that reduce drag in small UAVs.</p>
            <p>When I'm not in the lab, I build digital interfaces that treat the browser as a creative medium — from animated portfolios to full-stack applications, backed by APIs, cloud databases, and a stubborn obsession with detail.</p>
          </motion.div>
        </section>

        <section id="experience" className="pro-section pro-section--timeline">
          <h2 className="pro-section-heading">Research &amp; experience</h2>
          <div className="pro-timeline" ref={timelineRef}>
            <div className="pro-timeline__rail" />
            <motion.div className="pro-timeline__rail-fill" style={{ scaleY: reduce ? 1 : railFill }} />
            <ol className="pro-timeline__list">
              {experiences.map((exp, i) => (
                <motion.li
                  key={i}
                  className="pro-timeline-item"
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: Math.min(i, 4) * 0.06 }}
                >
                  <span className="pro-timeline-dot" />
                  <div className="pro-timeline-card">
                    <div className="pro-timeline-card__head">
                      <h3 className="pro-timeline-card__role">{exp.title}</h3>
                      <span className="pro-timeline-card__date">{exp.duration}</span>
                    </div>
                    <p className="pro-timeline-card__org">{exp.org}</p>
                    <p className="pro-timeline-card__desc">{exp.description}</p>
                    <ul className="pro-timeline-card__skills">
                      {exp.skills.map((s, j) => <li key={j}>{s}</li>)}
                    </ul>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        <section id="projects" className="pro-section pro-section--grid">
          <h2 className="pro-section-heading">Projects</h2>
          <motion.div
            className="pro-project-grid"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          >
            {projects.map((proj, i) => {
              const hue = HUES[i % HUES.length];
              const hue2 = HUES[(i + 1) % HUES.length];
              return (
                <motion.article
                  key={proj.title}
                  className="pro-project-card"
                  style={{ '--hue': hue, '--hue-2': hue2 }}
                  variants={{
                    hidden: reduce ? {} : { opacity: 0, y: 22, scale: 0.97 },
                    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                >
                  <div className="pro-project-card__bar" />
                  <div className="pro-project-card__body">
                    <h3 className="pro-project-card__title">{proj.title}</h3>
                    <p className="pro-project-card__subtitle">{proj.subtitle}</p>
                    <p className="pro-project-card__desc">{proj.description}</p>
                    <ul className="pro-project-card__tech">
                      {proj.tech.map((t, j) => <li key={j}>{t}</li>)}
                    </ul>
                    {proj.link && (
                      <a
                        href={proj.link}
                        target={proj.link.startsWith('/') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="pro-project-card__link"
                      >
                        View project <ArrowIcon />
                      </a>
                    )}
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </section>

        <section id="contact" className="pro-section pro-contact-section">
          <h2 className="pro-section-heading">Contact</h2>
          <motion.div
            className="pro-contact-card"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="pro-contact-text">
              I'm always open to research conversations, collaboration, and new opportunities.
            </p>
            <p className="pro-contact-email">
              <a href="mailto:sahuekansh11@gmail.com">sahuekansh11@gmail.com</a>
            </p>
            <div className="pro-contact-links">
              <a href="https://github.com/russianraspberry14" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/ekansh-sahu" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="/EntireResume.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </div>
          </motion.div>
        </section>

        <footer className="pro-footer">
          <p className="pro-footer-text">© Ekansh Sahu 2025</p>
        </footer>
      </main>
    </div>
  );
}

export default ProMode;
