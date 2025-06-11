import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'
import './App.css'
import sun from './assets/sun.svg'
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
gsap.registerPlugin(ScrambleTextPlugin)
gsap.registerPlugin(MorphSVGPlugin)


function App() {
  const [showEcat, setShowEcat] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showJournal, setShowJournal] = useState(false);
  const containerRef = useRef();

   
  useEffect(() => {
    const box = document.querySelector('.system-box');
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        box.classList.add('revealed');
      }
      });
      observer.observe(box);
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
    gsap.to(scrambleRef.current, {
      duration: 1,
      scrambleText: {
        text: "Ekansh's",
        chars: "01",
        revealDelay: 0.1,
      },
      ease: "none"
    });
  }, []);


  return (
    <div ref = {containerRef} className='wholePage'>
      <nav className='navbar'>
        <img src = {sun} alt = "An image of the sun"/>
        <div>
        <button onClick={() => window.open('/Resume.pdf', '_blank')}>résumé</button>
        <button onClick={() => setShowContact(true)}>contact me</button>
        </div>
      </nav>

      <div className = "myName">
        <p>You have reached</p>
        <h1 ref = {scrambleRef}></h1>
        <p>Digital Home!</p>
      </div>
      {showContact && <Contact onClose={() => setShowContact(false)} containerRef={containerRef}/>}
      {showJournal && <Journal onClose={() => setShowJournal(false)} />}
      <div className = "CnJ">
        <div className = "journal">
          <div>
            <img src = {journal} alt = "an image of the journal" onClick={() => setShowJournal(true)}/>
          </div>
          <div className = "popup">
            <img className = "atext" src = {atext} alt = "an image of the text"/>
            <img className = "arrow" src = {arrow} alt = "an image of the arrow"/>
          </div>
        </div>
        <div className = "cat">
          <img src = {showEcat?ecat:scat} onClick={handleClick} alt = "cat"></img>
          {showHearts && (
            <img
              src={`${hearts}?${new Date().getTime()}`}
              className="hearts"
              alt="hearts"
            />
          )}
          <img src = {clouds} className="clouds" alt = "clouds"></img>
        </div>
      </div>
      <DialogBox />

      <Ipod />

      <Projects />

      <div className='footer'>
        <img src = {grass} width = '100%'className='grass'/>
        <p>© ekanshsahu 2025</p>
      </div>
    </div>
  )
}

export default App
