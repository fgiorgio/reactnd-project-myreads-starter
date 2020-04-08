import React from 'react'
import BooksList from "./BooksList";
import { Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
    state = {
        searchInput: '',
        results: [],
    };

    updateSearch = (query) => {
        this.setState({ searchInput: query.trim() });
        BooksAPI.search(query).then((response) => {
            let books = (!response || response.error)
                ? []
                : response;
            books = books.map( book => {
                const bookInShelf = this.props.books.filter( bookInShelf => book.id===bookInShelf.id );
                return (bookInShelf && bookInShelf.length>0)?bookInShelf[0]:book;
            });
            this.setState({ results: books })
        });
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={ this.state.searchInput }
                            onChange={(e)=>this.updateSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksList books={ this.state.results } shelfes={ this.props.shelfes } />
                </div>
            </div>
        )
    }
}

export default Search
