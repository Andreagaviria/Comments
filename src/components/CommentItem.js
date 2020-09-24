import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class CommentItem extends Component {
getStyle = () => {
  return {
    background:"#f4f4f4",
    padding:"10px",
    borderBottom:"1px #ccc dotted"
  }
}

  render() {
    const {id, body} = this.props.comment;
    return (
      <div style = { this.getStyle() }>
        <p>
           {body}
        </p>
        <button onClick={this.props.delComment.bind(this, id)}>X</button>
      </div>
    )
  }
}

CommentItem.propTypes = {
   comment:PropTypes.object.isRequired
}
