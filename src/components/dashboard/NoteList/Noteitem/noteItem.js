import React from 'react';

export default class NoteItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.notes.map(note => (
        <li key={note.id} id={note.id}>
          <h4 className="noteItem">{note.title}</h4>
          <button onClick={() => this.props.delete(note.id)}>Completed</button>
          <p>Note: {note.content}</p>
        </li>
      )));
  }
}