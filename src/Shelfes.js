import React from 'react'
import BooksList from "./BooksList"
import { Link } from "react-router-dom"

class Shelfes extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        { this.props.shelfes.map( shelf => (
                            <div className="bookshelf" key={ shelf.value }>
                                <h2 className="bookshelf-title">{ shelf.title }</h2>
                                <div className="bookshelf-books">
                                    <BooksList
                                        shelfes={ this.props.shelfes }
                                        books={ this.props.books.filter( book => book.shelf===shelf.value ) }
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

export default Shelfes
