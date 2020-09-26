import React, { useState } from 'react'
import './App.css';
import NoteInp from './Note-inp';
import NoteOut from './Note-out';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  loadActualNotes = () => {
    fetch("http://localhost:7777/notes")
      .then(response => response.json()
      )
      .then(rates => {
        this.setState({ notes: rates });
      });
  }
  addActualNotes = json => {
    fetch("http://localhost:7777/notes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(json)
    })
  }
  removeActualNotes = id => {
    fetch(`http://localhost:7777/notes/${id}`, {
      method: 'DELETE'
    })
  }
  componentDidMount() {
    this.loadActualNotes();
  }
  componentDidUpdate() {
    this.loadActualNotes();
  }
  render() {

    return (
      <div className="App">
        <div className="wrap">
          <h3>Notes</h3>
          <button className="refresh" onClick={() => this.loadActualNotes()}>Refresh</button>
        </div>
        <NoteOut notes={this.state.notes} onRemove={this.removeActualNotes} />
        <NoteInp onAdd={this.addActualNotes} />
      </div>
    );
  }
}

export default App;
