import React from 'react'

class Book extends React.Component {
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: 'url("'+this.props.book.imageLinks.smallThumbnail+'")' }}
                    >
                    </div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            { this.props.shelfes.map( shelf => (
                                <option value={ shelf.value } selected={ shelf.value===this.props.book.shelf }>{ shelf.title }</option>
                            ) ) }
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ this.props.book.title }</div>
                <div className="book-authors">{ this.props.book.authors.join(", ") }</div>
            </div>
        )
    }
}

export default Book
