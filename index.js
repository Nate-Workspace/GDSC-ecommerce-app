import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import {Cart} from "./pages/Cart/cart"
import {Home} from "./pages/Home/home"
import {Items} from "./pages/Items/items"
import { ItemContextProvider } from "./context/item-context";
import {Footer} from './components/footer'


function App(){
    return(
        <div className="App">
            <ItemContextProvider>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/Items" element={<Items/>}/>
                </Routes>
                <Footer/>
            </Router>
            </ItemContextProvider>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));