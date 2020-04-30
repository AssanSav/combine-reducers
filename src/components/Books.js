import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeBook} from "../actions"

class Books extends Component {
  constructor() {
    super()
    this.handleRemove = this.handleRemove.bind(this)
  }

  handleRemove(event) {
    let book = this.props.books.find(b => b.id === event.target.getAttribute("dataset"))
    return this.props.removeBook(book)
  }

  render() {
    let books = this.props.books.map(book => <li key={book.id}>{book.title} by {book.authorName}<button dataset={book.id} onClick={this.handleRemove}>X</button></li>);
    return (
      <div>
        <ul>
          {books}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { books: state.books }
}

export default connect(mapStateToProps, { removeBook})(Books);
