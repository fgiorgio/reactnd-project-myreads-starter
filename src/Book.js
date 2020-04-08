import React from 'react'

class Book extends React.Component {
    render() {
        let { imageLinks, shelf, title, authors} = this.props.book;
        const image = (typeof imageLinks === 'undefined' || typeof imageLinks.smallThumbnail === 'undefined')
            ? 'none'
            : 'url("'+imageLinks.smallThumbnail+'")';

        return (
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{ width: 128, height: 193, backgroundImage: image }}
                    >
                    </div>
                    <div className="book-shelf-changer">
                        <select defaultValue="none" value={ shelf }>
                            <option value="move" disabled>Move to...</option>
                            { this.props.shelfes.map( shelf => (
                                <option key={ shelf.value } value={ shelf.value } >{ shelf.title }</option>
                            ) ) }
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{ authors && authors.join(', ') }</div>
            </div>
        )
    }
}

export default Book
