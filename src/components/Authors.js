import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeAuthor } from "../actions";

export class Authors extends Component {
  constructor() {
    super()
    this.handleRemove = this.handleRemove.bind(this)
  }

  // handleRemove = (event) => {
  //   debugger
  //   event.preventDefault()
  //   let author = this.props.authors.find(a => a.id === event.target.getAttribute("dataset"))
  //   return this.props.removeAuthor(author)
  // }

  handleRemove(event) {
    event.preventDefault()
    let author = this.props.authors.find(a => a.id === event.target.getAttribute("dataset"))
    return this.props.removeAuthor(author)
  }

  render() {
    let authors = this.props.authors.map(author => <li key={author.id}>{author.authorName}<button dataset={author.id} onClick={this.handleRemove}>X</button></li>);

    return (
      <div>
        <ul>
          {authors}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { authors: state.authors }
}


export default connect(mapStateToProps, {removeAuthor})(Authors);
