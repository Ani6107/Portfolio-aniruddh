import React, { useContext } from  "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {
        duration: 1,
        type: "spring"
    };

    return (
        <div className="services" id="services">
            <div className="awesome">
                <span style={{ color: darkMode ? "white": " ", fontSize: 44}}>My</span>
                <span>Skills</span>
                <a href={ Resume } download>
                    <button className="button s-button">Resume</button>
                </a>
                <div className="blur s-blur1" style={{ background: "ABF1FF94" }}></div>
            </div>
            <div className="cards">
                <motion.div
                   initial={{ left: "25rem" }}
                   whileInView={{ left: "23rem" }}
                   transition={ transition }
                   >
                    <Card
                       emoji={ Glasses }
                       heading={"Technical"}
                       detail={"Python, HTML, CSS, React.js, Node.Js, MySQL, TypeScript"}
                       />
                       </motion.div>
                       <motion.div
                   initial={{ top: "19rem", left: "55rem" }}
                   whileInView={{ left: "34rem" }}
                   transition={ transition }
                   >
                    <Card
                       emoji={ HeartEmoji }
                       heading={"Design"}
                       detail={"FIgma, Adobe xd, Photoshop, Video Editing"}
                       />
                       </motion.div>

                        <motion.div
                           initial={{ top: "19rem", left: "25rem" }}
                           whileInView={{ left: "12rem" }}
                           transition={ transition }
                            >
                                <Card
                                  emoji={Humble}
                                  heading={"Soft Skills"}
                                  detail={
                                    "Communication, Team Player, Problem Solving, Time Management"
                                  }
                                  color="rgba(252, 166, 31, 0.45)"
                                  />
                                  </motion.div>
                                  <div
                                    className="blur s-blur2"
                                    style={{ background: "var(--purple)"}}
                                    ></div>
                           
            </div>
        </div>
    );
};

export default Services;