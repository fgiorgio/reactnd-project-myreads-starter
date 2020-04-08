import React from 'react'
import * as BooksAPI from './BooksAPI'
import { BrowserRouter, Route } from "react-router-dom"
import Shelfes from "./Shelfes"
import Search from "./Search"
import './App.css'

class BooksApp extends React.Component {
    state = {
        shelfes: [
            {
                title: 'Want to Read',
                value: 'wantToRead',
            },
            {
                title: 'Currently Reading',
                value: 'currentlyReading',
            },
            {
                title: 'Read',
                value: 'read',
            },
        ],
        books: [],
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => this.setState({ books }));
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" render={()=>(
                        <Shelfes books={ this.state.books } shelfes={ this.state.shelfes } />
                    )}/>
                    <Route path="/search" render={()=>(
                        <Search books={ this.state.books } shelfes={ this.state.shelfes } />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
