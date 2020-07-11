import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            NotesApp
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <link className="nav-link" to="/">Notes</link>
              </li>
              <li className="nav-item">
                <link className="nav-link" to="/create">Create Note</link>
              </li>
              <li className="nav-item">
                <link className="nav-link" to="/user">Create User</link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
