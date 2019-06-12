import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

class New extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: '',
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { image, author, place, description, hashtags } = this.state;
    const data = new FormData();
    data.append('image', image);
    data.append('author', author);
    data.append('place', place);
    data.append('description', description);
    data.append('hashtags', hashtags);
    try {
      await api.post('posts', data);
      this.props.history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  handleImageChange = event => {
    this.setState({ image: event.target.files[0] });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form id="new-post" onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input
          type="text"
          name="author"
          placeholder="Author"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Hashtags"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default New;
