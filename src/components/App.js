import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      description: '',
      posts: []
    }
  }

  _newTitle = e => {
    e.preventDefault()
    this.setState({ title: e.target.value })
  }

  _newDescription = e => {
    e.preventDefault()
    this.setState({ description: e.target.value })
  }

  _submit = e => {
    e.preventDefault()

    const newPost = {
      title: this.state.title,
      description: this.state.description
    }

    const posts = this.state.posts
    posts.push(newPost)
    e.target.reset()

    this.setState({
      title: this.state.title,
      description: this.state.description
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this._submit}>
          <div>
            <label name="Title">To Do Item</label>
            <input onChange={this._newTitle} type="text" name="title" />
          </div>
          <div>
            <label name="Description">Description</label>
            <textarea onChange={this._newDescription} />
          </div>
          <div>
            <button type="submit">Let's Go!</button>
          </div>
        </form>
        <hr />
        {this.state.posts.map(post => {
          return (
            <div>
              <p>
                {post.title}
              </p>
              <p>
                {post.description}
              </p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
