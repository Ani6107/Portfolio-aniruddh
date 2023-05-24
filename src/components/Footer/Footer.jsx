import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="" style={{width: "100%"}} />
            <div className="f-content">
                <span>Email: adityanscal@gmail.com<br />
                      Phone No: +91-9619910914<br />
                      Location: Mumbai, Maharashtra, IN
                </span>
                <div className="f-icons">
                    <a href="https://www.instagram.com/aniruddh6107/"><Insta color="white" size={"3rem"}  /></a>
                    <a href="https://www.facebook.com/aniruddh.sharma.39545/"><Facebook color="white" size={"3rem"} /></a>
                    <a href="https://github.com/Ani6107"><Github color="white" size={"3rem"} /></a>
                </div>
            </div>
        </div>

    );
};

export default Footer;