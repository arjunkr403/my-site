
import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p data-aos="fade-down"
     data-aos-duration="800">
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title" data-aos="fade-up"
     data-aos-duration="800">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title" data-aos="fade-up"
     data-aos-duration="800">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "#003459" }}
          data-aos="flip-right" data-aos-delay="850">
          <h2>React.js based front-end development</h2>
          <p>
          can create dynamic and responsive user interfaces using React.js.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "#003459" }}
        data-aos="flip-right" data-aos-delay="950">
          <h2>Database management</h2>
          <p>
          As the MERN stack includes MongoDB, a developer can handle database management, queries and data modeling.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "#003459"}}
        data-aos="flip-right" data-aos-delay="1050">
          <h2>Integration with third-party services</h2>
          <p>
          can integrate the web application with various third-party services such as payment gateway, social media, and more.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{background: "lightgray", color: "#003459"}}
        data-aos="flip-right" data-aos-delay="1150">
          <h2>Deployment and hosting</h2>
          <p>
          A MERN stack developer can deploy the web application to various hosting platforms such as Heroku, AWS, and more.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
