import { useState } from 'react'
import './Ipod.css'

const IPod = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [showExperiences, setShowExperiences] = useState(false);

  const experiences = [
    {
      title: "Tech Fellow",
      company: "Fischell Institute for Biomedical Devices, Nebula Fellowship Program",
      duration: "Aug. 2026 – Dec. 2026",
      description: "Built a rigorous evaluation pipeline for GPT-5-Nano on scientific plot understanding in dynamic systems, using tick-based spacing normalization. Selected and justified set-based similarity metrics to evaluate structural agreement between predicted and ground-truth plots to reveal hidden failure nodes in predictions.",
      skills: ["Python", "GPT-5-Nano", "Evaluation Pipelines", "ML Research", "Data Analysis"]
    },
    {
      title: "Research Assistant",
      company: "UM Institute of Advanced Computer Studies, UMD (Dr. Haizhao Yang)",
      duration: "March 2025 – December 2025",
      description: "Enhanced state-of-the-art LLM fine-tuning and benchmarking (e.g., Qwen2.5, DeepSeek-VL R1) using PEFT methods such as LoRA, leveraging LLaMA-Factory, HuggingFace Transformers, and PyTorch in multi-GPU distributed environments. Developed custom evaluation pipelines and managed virtualized training workflows on Linux servers.",
      skills: ["Python", "PyTorch", "LoRA", "PEFT", "HuggingFace", "LLaMA-Factory", "Linux"]
    },
    {
      title: "Technology Assistantship Intern",
      company: "Maryland Institute of Technology in Humanities (Dr. Raff Viglianti)",
      duration: "Aug. 2025 – Jan. 2026",
      description: "Engineered an Astro-based frontend framework with CETEIcean library for efficient client-side parsing and rendering of TEI XML using vanilla JavaScript. Implemented TEI Processing Model logic for dynamic, build-time transformation and styling of TEI elements via automated XML processing workflows.",
      skills: ["JavaScript", "Astro", "TEI XML", "CETEIcean", "Frontend Development"]
    },
    {
      title: "Web Developer and Designer",
      company: "Campus Coders Crew",
      duration: "May 2025 – May 2026",
      description: "Developed and deployed customer-facing websites from Figma wireframes to production, utilizing HTML, CSS, JavaScript, and React, and integrating API functionalities. Collaborated with team members to design, build, and optimize web products ensuring scalability and intuitive interface while supporting backend integrations with MySQL and Postgres.",
      skills: ["React", "HTML/CSS", "JavaScript", "Figma", "MySQL", "Postgres"]
    },
    {
      title: "Resident Assistant",
      company: "Department of Resident Life, UMD",
      duration: "Aug. 2025 – Present",
      description: "Fostered a safe, inclusive residential community by providing peer support, conflict mediation, and crisis response while upholding university policies. Led community-building initiatives and programs for 49 residents to promote engagement and academic success.",
      skills: ["Leadership", "Crisis Management", "Conflict Resolution", "Community Building", "Communication"]
    },
    {
      title: "Academic Peer Mentor",
      company: "Office of Undergraduate Research, UMD (FIRE: Bioinspired Robotics)",
      duration: "Aug. 2024 – Dec. 2024",
      description: "Mentored classes of 40 FIRE students by facilitating discussions, aiding team projects, addressing questions, and helping in presenting research and papers on bioinspired robotics topics.",
      skills: ["Mentoring", "Teaching", "Academic Planning", "Workshop Facilitation", "Leadership"]
    },
    {
      title: "Community Assistant",
      company: "Department of Resident Life, UMD",
      duration: "Aug. 2024 – Aug. 2025",
      description: "Administered key distribution, package processing, and service desk operations for 706 residents. First point of contact for visitors and residents; issued core key changes and troubleshooted issues in halls.",
      skills: ["Administrative Support", "Customer Service", "Database Management", "Community Outreach"]
    },
    {
      title: "VP for Diversity, Equity & Inclusion",
      company: "South Hill Area Council, University of Maryland",
      duration: "Aug. 2023 – May 2024",
      description: "Managed comprehensive diversity programs and initiatives within the South Hill Council, helping to foster an inclusive campus culture.",
      skills: ["Leadership", "Diversity Programs", "Event Planning", "Community Engagement", "Communication"]
    }
  ];

  const menuItems = experiences.map(e => e.title);

  const handleNext = () => {
    if (showExperiences) {
      setCurrentIndex((currentIndex + 1) % experiences.length);
    } else {
      setSelectedMenu((selectedMenu + 1) % menuItems.length);
    }
  };

  const handlePrev = () => {
    if (showExperiences) {
      setCurrentIndex((currentIndex - 1 + experiences.length) % experiences.length);
    } else {
      setSelectedMenu((selectedMenu - 1 + menuItems.length) % menuItems.length);
    }
  };

  const handleCenter = () => {
    if (!showExperiences) {
      setCurrentIndex(selectedMenu);
      setShowExperiences(true);
      onNavigate?.(selectedMenu);
    }
  };

  const handleMenu = () => {
    if (showExperiences) {
      setShowExperiences(false);
    } else {
      setSelectedMenu(0);
    }
  };

  return (
    <div className="ipod-container">
      <div className="ipod-body horizontal">
        <div className="ipod-screen">
          <div className="screen-header">
            <span className="ipod-logo">My Experiences</span>
            <div className="battery-icon"></div>
          </div>

          <div className="screen-content">
            {!showExperiences ? (
              <div className="menu-list">
                {menuItems.map((item, index) => (
                  <div
                    key={index}
                    className={`menu-item ${index === selectedMenu ? 'selected' : ''}`}
                  >
                    <span>{item}</span>
                    <span className="arrow">{'>'}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="experience-view">
                <div className="experience-content">
                  <div className="exp-title">{experiences[currentIndex].title}</div>
                  <div className="exp-company">{experiences[currentIndex].company}</div>
                  <div className="exp-duration">{experiences[currentIndex].duration}</div>
                  <div className="exp-description">{experiences[currentIndex].description}</div>
                  <div className="exp-skills">
                    <div className="skills-title">Skills:</div>
                    <div className="skills-list">
                      {experiences[currentIndex].skills.join(', ')}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="click-wheel">
          <button className="wheel-btn wheel-menu" onClick={handleMenu}>
            <span>☰</span>
          </button>
          <button className="wheel-btn wheel-forward" onClick={handleNext}>
            <span>▶</span>
          </button>
          <button className="wheel-btn wheel-play" onClick={handleCenter}>
            <span>⏵</span>
          </button>
          <button className="wheel-btn wheel-back" onClick={handlePrev}>
            <span>◀</span>
          </button>
          <div className="center-button" onClick={handleCenter}></div>
        </div>
      </div>
    </div>
  );
};

export default IPod;
