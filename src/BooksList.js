import React from 'react'
import Book from "./Book"

class BooksList extends React.Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.books.map(book =>
                    <li key={book.id}>
                        <Book
                            shelves={this.props.shelves}
                            book={book}
                            onBookUpdate={this.props.onBookUpdate}
                        />
                    </li>
                )}
            </ol>
        )
    }
}

export default BooksList
