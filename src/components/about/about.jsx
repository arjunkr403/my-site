import './about.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { motion} from "framer-motion";

const About = () => {

const variants={
    initial:{
        color:"#fff",
    },
    animate:{
        color:"#55FF5B",
        transform:{
            scale:1.1,
        },
        transition:{
            easeInOut:'linear',
            duration:2,
            delay:1,
            repeat:Infinity,
            repeatType:'mirror',
        }
    }
}
    return (
        <div className='about'>
            <div className="text">
                <h1 data-aos="fade-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="1000">Hello, I'm <motion.b  variants={variants} initial='initial' animate='animate'>Arjun</motion.b>
                </h1>
                <h2 data-aos="fade-up"
                    data-aos-anchor-placement="top-center" data-aos-duration="1000">
                    A <motion.b variants={variants} initial='initial' animate='animate'>MERN</motion.b> Stack Developer from Delhi, India
                </h2>
                <div className="para" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1000">
                    <p>As a web developer and a lover of computer programming, I am excited to continue growing my skills and knowledge in the tech industry. With a background in the MERN stack and a keen interest in data analysis, I am always striving to stay current on the latest technologies and trends.</p>
                    <br />
                    <p>
                        In addition to my web development skills, I am also a problem solver at heart and enjoy tackling challenging algorithms and data structures. I have experience competing in coding competitions and enjoy participating in online coding challenges. As I continue to develop my skills and knowledge, I am eager to take on new challenges and opportunities in the tech industry.
                    </p>
                    <br />
                    <p>
                        Beyond coding, I enjoy exploring new places in Delhi, trying out different cuisines, and connecting with fellow tech enthusiasts. My goal is to continually improve my skills and contribute to impactful projects that make a difference.</p>
                </div>
            </div>
            <div className='image'>
                <img src="https://media4.giphy.com/media/zhYSVCirREeIZtONCI/giphy.gif?cid=ecf05e476gpggk8v9gjpepzbirah0pjdslc3rxjoltjbvo9y&rid=giphy.gif&ct=s" alt="" />
            </div>
        </div>
    )
}

export default About;

