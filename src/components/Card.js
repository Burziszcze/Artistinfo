import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',

      // data from api call
      bio: ``,
      // initial data state
      initialArtist: 'Kyuss'
    }
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const artist = this.state.inputValue;
    this.setState({ inputValue: '' });
    this.fetchData(artist);
  }

  fetchData = event => {
    let key = process.env.REACT_APP_API_KEY;
    let url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${event}&lang=pl&api_key=${key}&format=json`;

    // API call
    axios
      .get(url)
      .then(res => {
        const artist = res.data.artist;

        // removing <a> tag from bio response by RegExp
        let bio = artist.bio.summary.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");

        this.setState({
          name: artist.name,
          bio: bio,
          image: artist.image[5]["#text"],
          ontour: artist.ontour,
          similar: artist.similar.artist,
          listeners: artist.stats.listeners,
          playcount: artist.stats.playcount,
          tags: artist.tags.tag,
          url: artist.url,
        })
      })
      .catch(err => {
        this.setState({
          errors: err.data
        });
      });
  }

  componentDidUpdate() {
    document.body.style.backgroundImage = `url('${this.state.image}')`;
  }
  componentDidMount() {
    this.fetchData(this.state.initialArtist);
  }

  render() {

    const { name, bio, image, url, ontour, similar, listeners, playcount, tags } = this.state;

    return (
      <div className="card-container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <SearchBox
              value={this.state.inputValue}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
          </div>
        </div>
        <div className="artist-content row">
          <img
            alt={name}
            src={image}
            className="artist-img col-xs-12 col-sm-12 col-md-5 col-lg-5">
          </img>
          <div className="col-sm-12 col-md-7 col-lg-7">
            <h1>{name}</h1>
            <span className="taglist"></span>
            <h4>listeners: {listeners}</h4>
            <h4>playcount: {playcount}</h4>

            <h3>Biography:</h3>
            <div>{bio}</div>
          </div>
        </div >
      </div >
    )
  }
}


export default Card;