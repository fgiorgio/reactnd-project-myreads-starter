import React from 'react'
import Book from "./Book"

class BooksList extends React.Component {
    render() {
        return (
            <ol className="books-grid">
                <li>
                    <Book />
                </li>
                <li>
                    <Book />
                </li>
            </ol>
        )
    }
}

export default BooksList
