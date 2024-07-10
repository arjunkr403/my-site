import Links from "./links/links";
import {delay, motion} from "framer-motion";
import "./side.scss";
import Toggle from "./toggle/toggle";
import { useState } from "react";

const variants ={
open:{
  clipPath:"circle(1200px at 50px 50px)",
  transition:{
    type:"spring",
    stiffness:20,
  },
},
close:{
  clipPath: "circle(30px at 49px 48px)",
  transition:{
    delay:0.1,
    type:"spring",
    stiffness:400,
    damping:40,
  },
},
};
const Sidebar = () => {
  const [open,setopen]= useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open":"close"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <Toggle setOpen={setopen}/>
    </motion.div>
  )
}
export default Sidebar;
