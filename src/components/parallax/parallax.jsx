import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax = ({ type }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });
    const ytext= useTransform(scrollYProgress,[0,1],["0%","300%"]);
    const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    return (
        <motion.div className="parallax" ref={ref}
            style={{
                background:
                    type === "services"
                        ? "linear-gradient(180deg,#002844,#003549)"
                        : "linear-gradient(180deg,#004475,#005693)",

            }}>
            <motion.h1 style={{ y: ytext }}>
                {type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
            <motion.div className="mountain"></motion.div>
            <motion.div className="planets"
                style={{y: ybg,
                    backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"
                        })`,
                }}>
            </motion.div>
            <motion.div className="stars" style={{x:ybg}}></motion.div>

        </motion.div>
    )
}

export default Parallax;
