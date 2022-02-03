import React, { useEffect } from 'react';
import "./App.css"
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Loading from "./components/Loading"
import gsap from "gsap"

function App() {
    useEffect(() => {
        let tl = gsap.timeline({
            ease: "power2.out"
        })

        tl
            .to(".wipe", {
                y: "-100vh",
                duration: 0.8,
                delay: 3
            })
            .to(".loading svg", {
                css: {
                    fill: "white"
                },
                duration: 0.4,
                delay: -0.6
            })
            .to(".wipe", {
                y: "-200vh",
                duration: 0.8,
                delay: 2
            })
            .to(".loading", {
                display: "none",
                opacity: 0,
                duration: 0.8
            })
            .to(".App_Container", {
                display: "block",
                duration: 0.8,
                delay: -0.8,
                ease: "expo.out"
            })
    }, [])
    return (
        <div className='App'>
            <Loading />
            <div className="App_Container">
                <Navbar />
                <Body />
                <Footer />
            </div>
        </div>
    );
}

export default App;