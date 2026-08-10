import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import './App.css'
import sun from './assets/sun.svg'
import moon from './assets/moon.svg'
import journal from './assets/journal.svg'
import arrow from './assets/arrow.svg'
import atext from './assets/a-text.svg'
import scat from './assets/scat.svg'
import ecat from './assets/ecat.svg'
import hearts from './assets/hearts.gif'
import clouds from './assets/clouds.gif'
import DialogBox from './DialogBox.jsx'
import Contact from './Contact.jsx'
import grass from './assets/grass.svg'
import Journal from './journal.jsx'
import Ipod from './Ipod.jsx'
import Projects from './Projects.jsx'
import ProMode from './ProMode.jsx'

gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(MorphSVGPlugin)


function App() {
  const [showEcat, setShowEcat] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isPro, setIsPro] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDark]);


  useEffect(() => {
    gsap.set(['.navbar', '.myName', '.CnJ'], { opacity: 0, y: 20 });
    gsap.to(['.navbar', '.myName', '.CnJ'], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.1,
    });
  }, []);

  const handleClick = () => {
    setShowEcat(true);
    setShowHearts(true);

    setTimeout(() =>{
      setShowEcat(false);
      setShowHearts(false);
    }, 2500);
  }


  const scrambleRef = useRef()
  useEffect(() => {
    if (isPro || !scrambleRef.current) return;
    gsap.to(scrambleRef.current, {
      duration: 1,
      delay: 0.35,
      scrambleText: {
        text: "Ekansh's",
        chars: "01",
        revealDelay: 0.1,
      },
      ease: "none"
    });
  }, [isPro]);


  if (isPro) {
    return <ProMode onToggle={() => setIsPro(false)} />;
  }

  return (
    <div ref={containerRef} className="wholePage">
      <nav className='navbar'>
        <img
          src={isDark ? moon : sun}
          alt={isDark ? 'moon' : 'sun'}
          onClick={() => setIsDark(d => !d)}
          className={isDark ? 'moon-img' : ''}
          style={{ cursor: 'pointer' }}
        />
        <div>
          <button onClick={() => setIsPro(p => !p)}>pro mode</button>
          <button onClick={() => window.open('/EntireResume.pdf', '_blank')}>résumé</button>
          <button onClick={() => setShowContact(true)}>contact me</button>
        </div>
      </nav>

      <div className="myName">
        <p>You have reached</p>
        <h1 ref={scrambleRef}></h1>
        <p>Digital Home!</p>
      </div>
      {showContact && <Contact onClose={() => setShowContact(false)} containerRef={containerRef}/>}
      {showJournal && <Journal onClose={() => setShowJournal(false)} containerRef={containerRef} />}
      <div className="CnJ">
        <div className="journal">
          <div>
            <img src={journal} alt="an image of the journal" onClick={() => setShowJournal(true)}/>
          </div>
          <div className="popup">
            <img className="atext" src={atext} alt="an image of the text"/>
            <img className="arrow" src={arrow} alt="an image of the arrow"/>
          </div>
        </div>
        <div className="cat">
          <img src={showEcat ? ecat : scat} onClick={handleClick} alt="cat" className="cat-img"></img>
          {showHearts && (
            <img
              src={`${hearts}?${new Date().getTime()}`}
              className="hearts"
              alt="hearts"
            />
          )}
          <img src={clouds} className="clouds" alt="clouds"></img>
        </div>
      </div>
      <DialogBox />
      <Ipod />

      <Projects />

      <div className='footer'>
        <img src={grass} width='100%' className='grass'/>
        <p>© ekanshsahu 2025</p>
      </div>
    </div>
  )
}

export default App
