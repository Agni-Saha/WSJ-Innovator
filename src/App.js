import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import "./App.css"
import Body from './components/Body';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;