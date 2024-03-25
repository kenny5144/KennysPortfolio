import { React, useRef } from "react";
import { motion, useScroll,  useTransform } from "framer-motion";
 
import "./Project.scss";
const Projects = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="projects">
        <div className="content">
          <div className="imageContainer " ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <span className="Links">

            <h5 className="">{item.title}</h5>
            <span >

              <a href={item.links.linktosite}>Link to site</a>
              <a href={item.links.linktocode}>Link to code</a>
            </span>
             </span>
            <p>{item.des}</p>
            <span className="tools">
              <p className="">Tools Used</p>
              <div className="icons">

          
              {Array.isArray(item.tools) ?item.tools.map((tool,index)=>(
              


                  <span id="toolsUsed" key={index}>{tool}</span>
              

              ))
              :""
            } 
         <br />
              {Array.isArray(item.toolName) ?item.toolName.map((tool,index)=>(
               

                    <span  id="textUsed"  key={index}>{tool}</span>
              
              ))
              :""
            } 
              </div>
            </span>
          </motion.div>
        </div>.
      </div>
    </section>
  );
};

export default Projects;
