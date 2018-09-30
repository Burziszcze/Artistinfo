import React, { Component } from 'react';
import BgIMG from '../images/background-img.jpg';
import axios from 'axios';

import { Link } from 'react-router-dom';


class Tags extends Component {

  fetchTags = event => {
    let key = process.env.REACT_APP_API_KEY,
      url1 = `http://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${event}&api_key=${key}&format=json&lang=pl`,
      url2 = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${event}%20rock&api_key=${key}&format=json`

    // API call for fetch summary tag info and artists by tag name
    axios
      .all([
        axios.get(url1),
        axios.get(url2)
      ])
      .then(axios.spread((tagSummaryRes, tagArtistsRes) => {
        const summary = tagSummaryRes.data.tag.wiki.summary.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");
        const artists = tagArtistsRes.data.topartists.artist;
        // logs for test
        console.log(summary);
        console.log(artists);
        // setState //
        this.setState({
          artistsByTag: artists,
          tagSummary: summary
        })
      }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(`tag name: ${id}`);
    document.body.style.backgroundImage = `url('${BgIMG}')`;
    this.fetchTags(id);
  }

  render() {
    return (
      <div className="tags-container">
        <div className="col-xs-12">
          <Link
            to="/"
            className="btn btn-lg btn-outline-light"
          >Go Back
          </Link>
          <h1 className="teal">This is tags container</h1>
          <p>im gonna display here info about tag and Top artists by tag!</p>
        </div>
      </div>
    )
  }
}

export default Tags;