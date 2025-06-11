import './DialogBox.css'
import gsap from 'gsap'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import me from './assets/me.JPG'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger)

function DialogBox() {
    const dialogRef = useRef();
    const majorRef = useRef();
    const minorRef = useRef();
  
    useEffect(() => {
        const el = dialogRef.current;
        if (!el) return;
      
        // Reset state
        gsap.set(el, { x: '-100vw', scale: 0.5, opacity: 0 });
      
        // Animate in with scrub = true (scroll-controlled)
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
            pin: false,
            markers: false, // set to true to debug
          },
          x: 0,
          scale: 1,
          opacity: 1,
          ease: "elastic.out(1, 0.5)"
        });
      
        // Scramble once when entering
        ScrollTrigger.create({
          trigger: el,
          start: "top 80%",
          once: true,
          onEnter: () => {
            if (majorRef.current && minorRef.current) {
              gsap.to(majorRef.current, {
                duration: 1,
                scrambleText: {
                  text: "Computer Science",
                  chars: "01",
                  revealDelay: 0.1,
                },
                ease: "none"
              });
              gsap.to(minorRef.current, {
                duration: 1,
                delay: 0.5,
                scrambleText: {
                  text: "Robotics and Automation Systems",
                  chars: "01",
                  revealDelay: 0.1,
                },
                ease: "none"
              });
            }
          }
        });
      }, []);

  return (
    <div className="system-box" ref={dialogRef}>
      <div className="system-header">
        <div className="window-controls">
            <span className="window-btn">x</span>
            <span className="window-btn">▢</span>
            <span className="window-btn">-</span>
        </div>
        <div><span className="title">System Message</span></div>
      </div>

      <div className="profile-row">
        <img src={me} alt="Profile" className="profile-img" />
        <div className="profile-info">
          <p>Hi! I am Ekansh, an undergraduate sophomore at the University of Maryland, College Park.</p>
          <p className="gray">Major: <span className="effects" ref={majorRef}></span></p>
          <p className="gray">Minor: <span className="effects" ref={minorRef}></span></p>
        </div>
      </div>

      <div className="description-box">
        <p>
        I love playing around with ML Models, with my work spanning LLM fine-tuning, benchmarking vision-language models, 
        and developing a bio-inspired robot as part of UMD’s FIRE program. I’m driven by curiosity and a love for building things that connect .
        I’m also a creative developer passionate about blending code with design. 
        I build web apps with Node.js, Express, and EJS, and bring ideas to life using JavaScript, React, and Figma. 
        </p>
      </div>
    </div>
  )
}

export default DialogBox