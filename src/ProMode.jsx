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
    const top = el.getBoundingClientRect().top + window.scrollY - 68;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="pro-page">
      <header className="pro-header">
        <div className="pro-header-inner">
          <span className="pro-name-logo">ES</span>
          <nav className="pro-nav">
            <a href="#about" onClick={scrollTo('about')}>About</a>
            <a href="#experience" onClick={scrollTo('experience')}>Experience</a>
            <a href="#projects" onClick={scrollTo('projects')}>Projects</a>
            <a href="#contact" onClick={scrollTo('contact')}>Contact</a>
          </nav>
          <div className="pro-header-actions">
            <button className="pro-toggle-btn" onClick={onToggle}>cozy mode</button>
          </div>
        </div>
      </header>

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
          <h2 className="pro-section-heading">Research &amp; Experience</h2>
          <div className="pro-timeline">
            {experiences.map((exp, i) => (
              <div key={i} className="pro-entry">
                <div className="pro-entry-header">
                  <span className="pro-entry-title">{exp.title}</span>
                  <span className="pro-entry-date">{exp.duration}</span>
                </div>
                <p className="pro-entry-org">{exp.org}</p>
                <p className="pro-entry-desc">{exp.description}</p>
                <div className="pro-tags">
                  {exp.skills.map((s, j) => <span key={j} className="pro-tag">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="pro-section">
          <h2 className="pro-section-heading">Projects</h2>
          {projects.map((proj, i) => (
            <div key={i} className="pro-entry">
              <div className="pro-entry-header">
                <span className="pro-entry-title">{proj.title}</span>
                {proj.link && (
                  <a
                    href={proj.link}
                    target={proj.link.startsWith('/') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="pro-entry-link"
                  >↗</a>
                )}
              </div>
              <p className="pro-entry-subtitle">{proj.subtitle}</p>
              <p className="pro-entry-desc">{proj.description}</p>
              <div className="pro-tags">
                {proj.tech.map((t, j) => <span key={j} className="pro-tag">{t}</span>)}
              </div>
            </div>
          ))}
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
          <p className="pro-footer-text">© Ekansh Sahu 2025</p>
        </section>
      </main>
    </div>
  );
}

export default ProMode;
