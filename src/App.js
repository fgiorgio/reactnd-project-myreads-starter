import React from 'react'
import * as BooksAPI from './BooksAPI'
import {BrowserRouter, Route} from 'react-router-dom'
import Shelves from './Shelves'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
    state = {
        shelves: [
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
        BooksAPI.getAll().then((books) => this.setState({books}));
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            book.shelf = shelf;
            if (this.state.books.find((bookWithShelf) => bookWithShelf.id === book.id)) {
                const books = this.state.books.map(bookWithShelf => {
                    if (bookWithShelf.id === book.id) {
                        bookWithShelf.shelf = shelf
                    }
                    return bookWithShelf;
                });
                this.setState({books: books})
            } else {
                this.setState((currentState) => ({books: currentState.books.concat(book)}))
            }
        })
    };

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" render={() => (
                        <Shelves
                            books={this.state.books}
                            shelves={this.state.shelves}
                            onBookUpdate={this.updateBook}
                        />
                    )}/>
                    <Route path="/search" render={() => (
                        <Search
                            books={this.state.books}
                            shelves={this.state.shelves}
                            onBookUpdate={this.updateBook}
                        />
                    )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default BooksApp
