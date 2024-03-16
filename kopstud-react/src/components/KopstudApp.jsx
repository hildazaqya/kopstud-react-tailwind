import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Menu from "./Menu";
import Benefit from "./Benefit";

class KopstudApp extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
            <Hero />
            <About />
            <Menu />
            <Benefit />
            </div>
            )
    }
}

export default KopstudApp;