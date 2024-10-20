import"./main.scss"
import me from "../img/me.jpg"
import ss from "../img/ss.jpg"
import {motion} from "framer-motion"
const Main = () => {
    const textVariants = {
        initial: {
          x: -500,
          opacity: 0,
        },
        animate: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 1,
            staggerChildren: 0.1,
          },
        }
    }
  return (
    <div className="Main">
      <div className="center">

      <motion.div className="content" variants={textVariants} initial="initial" animate="animate">
        <motion.h1 variants={textVariants}>KEHINDE OJO</motion.h1>
        <motion.p  variants={textVariants}  >Web developer and Photographer </motion.p>
        <motion.div className="Links" variants={textVariants}>
            <motion.a className="work"href="#Portfolio"> See my work</motion.a>
            <motion.a className="contact" href="#Contact"> Contact me </motion.a>
        </motion.div>

      </motion.div>
      <div className="me">
        <img   src={ss} alt="image of me " />
      </div>
      </div>
    </div>
  )
}

export default Main
