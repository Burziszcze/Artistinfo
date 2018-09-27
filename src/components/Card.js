import React, { Component } from 'react';
import axios from 'axios';
import SearchBox from './SearchBox';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // handleChange
      inputValue: '',
      // data from api call
      bio: ``,
      tags: [],
      similar: [],
      // initial data state
      initialArtist: 'Boris Brejcha',
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
        let
          bio = artist.bio.summary.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");

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

    // im gonna destruct you!
    const { name, bio, image, url, ontour, similar, listeners, playcount, tags } = this.state;
    return (
      <div className="card-container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6">
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
            <div className="artist-name">
              <h1 className="artist-name">
                <a
                  className="teal"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}>{name}
                </a></h1>
            </div>
            <div className="tag-list d-flex flex-wrap">
              <h4 className="tag-item">
                {tags.map((item, index, url) =>
                  <a
                    className="p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                    key={index}>{item.name}
                  </a>)}
              </h4>
            </div>
            <div className="counter d-flex flex-wrap mr-2">
              <h5>listeners: <b className="p-2 amber">{listeners}</b></h5>
              <h5>playcount: <b className="p-2 amber">{playcount}</b></h5>
            </div>
            <div className="bio my-5">
              <h4>About {name}...</h4>
              <p className="gray">{bio}</p>
            </div>
            <div className="similar-artists">
              <h5 className="similar-item">Podobni wykonawcy:
            {similar.map((item, index, url) =>
                  <a
                    className="p-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={item.url}
                    key={index}>{item.name}
                  </a>)}
              </h5>
            </div>

          </div>
        </div >
      </div >
    )
  }
}


export default Card;