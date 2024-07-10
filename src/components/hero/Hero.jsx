import "./hero.scss";
import {motion} from "framer-motion";
const textvariants={
    initial:{
        x:-500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollbtn:{
        y:10,
        opacity:0,
        transition:{
            duration:2,
            repeat:Infinity,
        }
    }
};
const slidevariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-200%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};

const Hero = () => {

    const handleScroll = (event) => {
        event.preventDefault();
        document.querySelector('#Contact').scrollIntoView({
          behavior: 'smooth'
        });
      };

    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="text" variants={textvariants} initial="initial" animate="animate">
                    <motion.h2 variants={textvariants}>ARJUN KUMAR SHARMA</motion.h2>
                    <motion.h1 variants={textvariants}>MERN Stack Developer</motion.h1>
                    <motion.div className="btn" variants={textvariants}>
                        <motion.button variants={textvariants}>Download CV</motion.button>
                        <motion.button variants={textvariants} onClick={handleScroll}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img animate="scrollbtn" variants={textvariants} src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <div className="profile">
            </div>
            <motion.div className="slide" variants={slidevariants} initial="initial" animate="animate">
                Lets Develope Websites
            </motion.div>
        </div>
    )
}

export default Hero;
