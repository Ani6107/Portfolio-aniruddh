import Navbar from "../src/components/Navbar/Navbar"; 
import Intro from "../src/components/Intro/Intro";
import Services from "../src/components/Services/Services";
import "./App.css"
import Experience from "../src/components/Experience/Experience"
import Works from "../src/components/Works/Works";
import Portfolio from "../src/components/Portfolio/Portfolio"
import Testimonial from "../src/components/Testimonials/Testimonial";
import Contact from "../src/components/Contact/Contact";
import Footer from "../src/components/Footer/Footer"
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div 
            className="App"
            style={{
                background: darkMode? "black": "",
                color: darkMode ? "white": "",
            }}
            >
                <Navbar />
                <Intro />
                <Services />
                <Experience />
                <Works />
                <Contact />
                <Footer />
            </div>
    );
};

export default App;
