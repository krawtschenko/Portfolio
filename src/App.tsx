import React from 'react';
import './App.css';
import {Home} from "./components/content/Home";
import {Routes, Route} from "react-router-dom";
import {Content} from "./components/content/Content";
import {About} from "./components/content/About";
import {Skills} from "./components/content/Skills";
import {Portfolio} from "./components/content/Portfolio";
import {Contact} from "./components/content/Contact";

function App() {
    return (
            <Content>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </Content>
    );
}

export default App;
