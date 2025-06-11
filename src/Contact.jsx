import './contact.css'
import { motion } from 'framer-motion'
function Contact({onClose, containerRef}) {
    return(
        <motion.div
            className="box"
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            dragMomentum={false}
            dragTransition={{ power: 0.2, timeConstant: 200 }}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
        >
            
                <div className='header'>
                    <button className="close-btn" onClick={onClose}>✕</button>
                    <p>Reach out to me!</p>
                </div>
                <div className='contact'>
                    <div className='emailLink'>
                        <a href="mailto:sahuekansh11@gmail.com">
                            <button>e-mail</button>
                        </a>
                    </div>
                    <div className='socials'>
                        <a href="https://www.linkedin.com/in/ekansh-sahu" target="_blank" rel="noopener noreferrer">
                            <img className='LinkedIn' src='/linkedin.png' alt="LinkedIn" />
                        </a>
                        
                        <a href="https://www.instagram.com/ekanshhhhhh_/" target="_blank" rel="noopener noreferrer">
                        <img className='Instagram' src='/instagram.png' alt="Instagram" />
                        </a>
                        <a href="https://github.com/russianraspberry14" target="_blank" rel="noopener noreferrer">
                            <img className='Github' src='/github.png' alt="GitHub" />
                        </a>
                    </div>
                </div>
            </motion.div>
    );
}
export default Contact