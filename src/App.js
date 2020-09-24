import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment";
import AddComment from './components/AddComment';

class App extends Component {
  /*state = {
    comments: [
      {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body:
          "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      },
      {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body:
          "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      },
      {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body:
          "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
      },
    ],
  }*/

  constructor(props){
    super(props)
    this.state = { comments: [] }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=5')
    .then(response => response.json())
    .then(result => this.setState({comments: result}))
    .then(json => console.log('componentDidMount', json))
  }


  delComment = (id) => {
    console.log('id', id)
    fetch('https://jsonplaceholder.typicode.com/comments/' +id,{
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(result => this.setState ({ 
      comments: [...this.state.comments.filter(
        item => item.id !== id)]
      }))
  }
    

  addBody=(body) => {
    console.log('lulo', body);
    
    const newComment = {
      email:"andrea@andrea.com",
      body:body
   }

    fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    body:JSON.stringify({newComment}),
    headers: {
      "content-type":"application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json))
     this.setState({
     comments:[...this.state.comments,newComment]
     })
  }

  render() {
    console.log("taco", this.delComment);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Comments
          </p>
        </header>
        <AddComment addBody={this.addBody}/>
        <Comment comments={this.state.comments} delComment={this.delComment}/>
      </div>
    );
  }
}


export default App;
