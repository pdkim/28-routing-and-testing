import React from 'react';
import uuid from 'uuid/v4';

export default class NoteCreateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      content: '',
    }

    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.onComplete = this.onComplete.bind(this);
  }

  handleTitle(e) {
    let title = e.target.value;
    this.setState({ title })
    console.log('title is ', this.state.title);
  }

  handleContent(e) {
    let id = uuid();
    this.setState({ id });
    let content = e.target.value;
    this.setState({ id, content });
    console.log('content is ', this.state.content)
  }

  onComplete(e) {
    e.preventDefault();
    this.props.add(this.state);
  }

  render() {
    return (
      <form onSubmit={this.onComplete} className="blah">
        <label>
          Title:
          <br />
          <input onChange={this.handleTitle} id="title" type="text" />
        </label>
        <br />
        <label>
          Notes:
          <br />
          <input onChange={this.handleContent} id="content" type="text" />
        </label>
        <br />
        <button type="submit">Submit</button>

      </form>
    );
  }
}