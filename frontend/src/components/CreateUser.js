import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

  state = {
    users: []
  }
  async componentDidMount() {
    const res = await axios.get('http://localhost:4000/api/users')
    this.setState({ users: res.data })
  }

  render() {
    return (
      <div>
        Create User
      </div>
    )
  }
}
