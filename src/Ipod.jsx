import { useState } from 'react'
import './Ipod.css'

const IPod = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [showExperiences, setShowExperiences] = useState(false);

  const experiences = [
    {
      title: "Research Assistantship",
      company: "Digital Humanities, University of Maryland",
      duration: "Aug 2025 - Dec 2025",
      description: "Directly contributed to a project’s codebase under the supervision of Dr Raff Viglianti. Also contributed to the technical side of a Digital Humanities research project at the Maryland Institute for Technology in the Humanities (MITH).",
      skills: ["JavaScript", "TypeScript"]
    },
    {
      title: "Research Assistant",
      company: "Dr. Hiazhao Yang",
      duration: "Jan 2025 - Present",
      description: "Working with Dr. Yang to benchmark different models such as DeepSeek-R1 and Qwen2.5 and then using SFT to increase accuracy.",
      skills:['Python', "Keras, TensorFlow"]
    },
    {
      title: "Resident Assistant",
      company: "Residence Hall Association, University of Maryland",
      duration: "Aug 2025 - Aug 2026",
      description: "Provided guidance and support to 60+ residents in Oakland Hall. Organized educational and social programs to build community engagement. Handled crisis situations and conflict resolution while maintaining a safe living environment.",
      skills: ["Leadership", "Crisis Management", "Event Planning", "Communication", "Conflict Resolution", "Community Building"]
    },
    {
      title: "Academic Peer Mentor",
      company: "Office of Undergraduate Research",
      duration: "Aug 2024 - Dec 2024",
      description: "Mentoring classes of 40 FIRE students by facilitating discussions, aiding team projects, addressing questions, and helping in presenting research and papers on the topics of Climate Change.",
      skills: ["Mentoring", "Teaching", "Academic Planning", "Workshop Facilitation", "Student Development", "Leadership"]
    },
    {
      title: "Community Assistant",
      company: "Residence Hall Association",
      duration: "Aug 2024 - Aug 2025",
      description: "Administered key distribution, package processing, and service desk operations, streamlining daily tasks for 706 residents. First point of contact for visitors and residents; issued core key changes and troubleshooted issues in the building.",
      skills: ["Community Outreach", "Volunteer Management", "Administrative Support", "Database Management"]
    }
  ];

  const menuItems = [
    'Research Assistantship',
    'Research Assistant',
    'Resident Assistant',
    'Academic Peer Mentor',
    'Community Assistant'
  ];

  const handleNext = () => {
    if (showExperiences) {
      let nextIndex = currentIndex;
      do {
        nextIndex = (nextIndex + 1) % experiences.length;
      } while (!experiences[nextIndex].title); 
      setCurrentIndex(nextIndex);
      onNavigate?.(nextIndex);
    } else {
      const newIndex = (selectedMenu + 1) % menuItems.length;
      setSelectedMenu(newIndex);
    }
  };

  const handlePrev = () => {
    if (showExperiences) {
      let prevIndex = currentIndex;
      do {
        prevIndex = (prevIndex - 1 + experiences.length) % experiences.length;
      } while (!experiences[prevIndex].title); 
      setCurrentIndex(prevIndex);
      onNavigate?.(prevIndex);
    } else {
      const newIndex = (selectedMenu - 1 + menuItems.length) % menuItems.length;
      setSelectedMenu(newIndex);
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
            <span>MENU</span>
          </button>
          <button className="wheel-btn wheel-forward" onClick={handleNext}>
            <span>▶▶</span>
          </button>
          <button className="wheel-btn wheel-play" onClick={handleCenter}>
            <span>▶❚❚</span>
          </button>
          <button className="wheel-btn wheel-back" onClick={handlePrev}>
            <span>◀◀</span>
          </button>
          <div className="center-button" onClick={handleCenter}></div>
        </div>
      </div>
    </div>
  );
};

export default IPod;