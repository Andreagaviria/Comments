import React, { Component } from 'react'

export default class AddComment extends Component {
    constructor(props) {
    super(props);
    this.state = {
        body : ''
    }
}


    handleChange = (e) => this.setState({body: e.target.value})    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addBody(this.state.body);
        this.setState({body:''});
    }
    render () {
        return (
          <form onSubmit={this.handleSubmit}>
              <input type="text" 
              name="body" 
              placeholder="Add Comment"
              onChange={this.handleChange}
              />
              <input type="submit" value="submit"/>
              </form>
        )
    }
}