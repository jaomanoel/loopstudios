import React from 'react';

import Header from  "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Create from "./Components/Create";
import Footer from './Components/Footer';

function App() {
    return (
        <div className='min-h-[100vh] flex flex-col justify-between m-auto'>
            <Header />
            <Home />
            <About />
            <Create />
            <Footer />
        </div>
    )
}

export default App
