import { useEffect } from 'react'
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

function ProMode({ onToggle }) {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => { document.documentElement.style.scrollBehavior = ''; };
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="pro-page">
      <nav className="nav-pill" aria-label="Primary">
        <span className="wordmark">ES</span>
        <ul className="nav-pill__links">
          <li><a href="#about" onClick={scrollTo('about')}>About</a></li>
          <li><a href="#experience" onClick={scrollTo('experience')}>Experience</a></li>
          <li><a href="#projects" onClick={scrollTo('projects')}>Projects</a></li>
          <li><a href="#contact" onClick={scrollTo('contact')}>Contact</a></li>
        </ul>
        <button className="nav-pill__cta" onClick={onToggle}>Cozy mode</button>
      </nav>

      <main className="pro-main">
        <section id="about" className="pro-about">
          <div className="pro-about-inner">
            <img src={me} alt="Ekansh Sahu" className="pro-photo" />
            <div className="pro-bio">
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
            </div>
          </div>
          <div className="pro-tagline">
            <p>I fine-tune and evaluate language models — working with Qwen, DeepSeek, and vision-language architectures using LoRA and PEFT across distributed GPU environments. In parallel, I study bio-inspired flight mechanics, engineering bald eagle wingtip structures that reduce drag in small UAVs.</p>
            <p>When I'm not in the lab, I build digital interfaces that treat the browser as a creative medium — from animated portfolios to full-stack applications, backed by APIs, cloud databases, and a stubborn obsession with detail.</p>
          </div>
        </section>

        <section id="experience" className="pro-section">
          <h2 className="pro-section-heading">Research &amp; experience</h2>
          <dl className="entry-list">
            {experiences.map((exp, i) => (
              <div key={i} className="entry">
                <dt className="entry__term">
                  <span className="entry__role">{exp.title}</span>
                  <span className="entry__date">{exp.duration}</span>
                </dt>
                <dd className="entry__org">{exp.org}</dd>
                <dd className="entry__desc">{exp.description}</dd>
                <dd className="entry__stack">{exp.skills.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="projects" className="pro-section">
          <h2 className="pro-section-heading">Projects</h2>
          <dl className="entry-list">
            {projects.map((proj, i) => (
              <div key={i} className="entry">
                <dt className="entry__term">
                  <span className="entry__role">{proj.title}</span>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target={proj.link.startsWith('/') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="entry__link"
                    >View →</a>
                  )}
                </dt>
                <dd className="entry__org">{proj.subtitle}</dd>
                <dd className="entry__desc">{proj.description}</dd>
                <dd className="entry__stack">{proj.tech.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="contact" className="pro-section pro-contact-section">
          <h2 className="pro-section-heading">Contact</h2>
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
        </section>

        <footer className="pro-footer">
          <p className="pro-footer-text">© Ekansh Sahu 2025</p>
        </footer>
      </main>
    </div>
  );
}

export default ProMode;
