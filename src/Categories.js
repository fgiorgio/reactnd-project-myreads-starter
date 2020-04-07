import React from 'react'
import BooksList from "./BooksList"
import Link from "react-router-dom/Link";

class Categories extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        { this.props.categories.map( category => (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{ category.title }</h2>
                                <div className="bookshelf-books">
                                    <BooksList
                                        categories={ this.props.categories }
                                        books={ this.props.books.filter( book => book.shelf===category.value ) }
                                    />
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Categories
