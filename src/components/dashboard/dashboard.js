import React from 'react';

import NoteCreateForm from './NoteCreateForm/noteCreateForm.js';
import NoteList from './NoteList/noteList.js';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }


  addNote(data) {
    let newNote = {
      id: data.id,
      title: data.title,
      content: data.content,
      editing: false,
      completed: false,
    };
    let array = this.state.notes.slice();
    array.push(newNote);
    this.setState({notes: array});
  };

  removeNote(note) {
    let array = this.state.notes.slice();

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === note) {
        array.splice(i, 1);
      }
    }

    this.setState({notes: array});
  }

  render() {
    return (
      <React.Fragment>
        <h2>Task List</h2>
        <NoteCreateForm add={this.addNote} notes={this.state.notes} />
        <NoteList notes={this.state.notes} delete={this.removeNote} />
      </React.Fragment>
    )
  }
}

