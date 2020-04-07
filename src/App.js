import React from 'react'
import * as BooksAPI from './BooksAPI'
import BrowserRouter from "react-router-dom/BrowserRouter"
import Route from "react-router-dom/Route"
import Categories from "./Categories"
import Search from "./Search"
import './App.css'

class BooksApp extends React.Component {
    state = {
        categories: [
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
                        <Categories books={ this.state.books } categories={ this.state.categories } />
                    )}/>
                    <Route path="/search" render={()=>(
                        <Search books={ this.state.books } />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
