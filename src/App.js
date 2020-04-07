import React from 'react'
// import * as BooksAPI from './BooksAPI'
import BrowserRouter from "react-router-dom/BrowserRouter"
import Route from "react-router-dom/Route"
import Categories from "./Categories"
import Search from "./Search"
import './App.css'

class BooksApp extends React.Component {
    state = {};

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" render={()=>(
                        <Categories/>
                    )}/>
                    <Route path="/search" render={()=>(
                        <Search/>
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
