import React from 'react';

import NoteItem from './Noteitem/noteItem.js';

export default class NoteList extends React.Component {

  render() {
    return (
      <ul id="note-list">
        <NoteItem delete={this.props.delete} notes={this.props.notes} />
      </ul>
    )
  }
}