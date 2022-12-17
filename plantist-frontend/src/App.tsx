import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/home-page/home-page";
import SearchPage from "./page/search-page/search-page";
import ContactPage from "./page/contact-page/contact-page";
import PlantsPage from "./page/plants-page/plants-page";
import Navbar from "./shared/navbar/navbar";
import "./App.css"

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navbar/>}>
                            <Route path="/" index element={<HomePage/>}/>
                            <Route path="/search" element={<SearchPage/>}/>
                            <Route path="/plants" element={<PlantsPage/>}/>
                            <Route path="/contact" element={<ContactPage/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
