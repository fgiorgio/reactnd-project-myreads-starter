import React from 'react'
import Book from "./Book"

class BooksList extends React.Component {
    render() {
        return (
            <ol className="books-grid">
                { this.props.books.map( book =>
                    <li>
                        <Book
                            shelfes={ this.props.shelfes }
                            book={ book }
                        />
                    </li>
                ) }
            </ol>
        )
    }
}

export default BooksList
