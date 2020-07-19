import React, { Component } from 'react'
import axios from 'axios'

export default class CreateNote extends Component {

  state = {
    users: [],
    userSelected: ''
  }

  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/users')
    this.setState({ users: res.data.map(user => user.username) })
  }

  onSubmit = (e) => {
    e.preventDefault()
  }

  onInputChange = e => {
    this.setState({
      userSelected: e.target.value
    })
  }

  render() {
    return (
      <div className="col-md-6 offset-md-3">
        <div className="card card-body">
          <h4>Create a Note</h4>
          <form onSubmit={this.onSubmit}>
            {/* SELECT THE USER */}
            <div className="form-group">
              <select
                className="form-control"
                value={this.state.userSelected}
                name="userSelected"
                onChange={this.onInputChange}
                required
              >
                {
                  this.state.users.map(user => (
                    <option key={user} value={user}>
                      {user}
                    </option>
                  ))
                }
              </select>
            </div>
            {/* Note Title */}
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Title"
                onChange={this.onInputChange}
                name="title"
                value={this.state.title}
                required
              />
            </div>
            {/* Note Content */}
            <div className="form-group">
              <textarea
                type="text"
                className="form-group"
                placeholder="Content"
                name="content"
                onChange={this.onInputChange}
                value={this.state.content}
                required
              >
              </textarea>
            </div>
            {/* Note Date */}
            <div className="form-group">

            </div>
            <button className="btn btn-primary">
              Save
              <i className="material-icons">
                assignment
              </i>
            </button>
          </form>
        </div>
      </div>
    )
  }
}
