import React, { Component } from 'react';
import BgIMG from '../images/galaxy.jpg';
import axios from 'axios';
import SearchBox from './SearchBox';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      errors: [],
      loading: false,
      // name: '',
      // bio: '',
      // image: '',
      // ontour: 0,
      // similar: '',
      // listeners: null,
      // playcount: null,
      // tags: '',
      // url: '',
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
  backImg = () => {
    return document.body.style.backgroundImage = `url('${this.state.image}')`;
  }
  fetchData = event => {
    let key = process.env.REACT_APP_API_KEY;
    let url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${event}&lang=pl&api_key=${key}&format=json`;
    console.log(url);
    // API call
    axios
      .get(url)
      .then(res => {
        console.log(res.data.artist)
        const artist = res.data.artist;
        this.setState({
          name: artist.name,
          bio: artist.bio.summary,
          image: artist.image[4]["#text"],
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
  }
  componentDidMount() {
    document.body.style.backgroundImage = 'url(' + BgIMG + ')';
    ;
  }
  componentWillMount() {
  }

  render() {

    const { name, bio, image, url, ontour, similar, listeners, playcount, tags } = this.state;

    return (
      <main className="main container">
        {/* <div className="container">
          <div className="row"> */}
        <div className="col-xs-12 col-lg-10 offset-lg-1 search-box">
          <SearchBox
            value={this.state.inputValue}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div className="col-xs-12 col-lg-10 offset-lg-1 artist-card">
          <div className="row">
            <div className="col-xs-12 col-md-4 pull-md-8 col-lg-5 pull-lg-7 text-center artist-img">
              <img src={image} alt={name}
                className="img-fluid"
              />
            </div>
            <div className="col-xs-12 col-md-8 push-md-4 col-lg-7 push-lg-5 artist-content">
              <h1>{name}</h1>
              <h4>listeners: {listeners}</h4>
              <h3>playcount: {playcount}</h3>
              <h3>Biography:</h3>
              <p>{bio}</p>
            </div>
          </div>
        </div>
        {/* </div>
        </div > */}
      </main >
    )
  }
}


export default Main;