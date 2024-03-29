import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
                {
                 item.links.map((links ,index)=>{
                  return(

                      <span>
                        
                      <p >{links.linktosite}</p>
                      <p >{links.linktocode}</p>
                      <p >{links.linkttolinkedin}</p>
                  
              </span>
                  )
                    })
                }
            </span>
            <p>{item.des}</p>
            <span className="tools">
              <p className="">Tools Used</p>
              <div className="icons">
                <div id="iconsUsed">
                  {Array.isArray(item.tools)
                    ? item.tools.map((tool, index) => (
                        <span  key={index}>
                          {tool}
                        </span>
                      ))
                    : ""}
                </div>
                <br />
                <div id="textUsed">
                  {Array.isArray(item.toolName)
                    ? item.toolName.map((tool, index) => (
                        <span  key={index}>
                          {tool}
                        </span>
                      ))
                    : ""}
                </div>
              </div>
            </span>
          </motion.div>
        </div>
        .
      </div>
    </section>
  );
};

export default Projects;
