import React, { Component } from 'react';
import BgIMG from '../images/background-img.jpg';
import axios from 'axios';

import { Link } from 'react-router-dom';


class Tags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistsByTag: [],
      tagSummary: ''
    }
  }

  fetchTags = event => {
    let key = process.env.REACT_APP_API_KEY,
      url1 = `https://ws.audioscrobbler.com/2.0/?method=tag.getinfo&tag=${event}&api_key=${key}&format=json&lang=pl`,
      url2 = `https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${event}&api_key=${key}&format=json`

    // API call for fetch summary tag info and artists by tag name
    axios
      .all([
        axios.get(url1),
        axios.get(url2)
      ])
      .then(axios.spread((tagSummaryRes, tagArtistsRes) => {
        const summary = tagSummaryRes.data.tag.wiki.summary.replace(/<a\b[^>]*>(.*?)<\/a>/i, "");
        const artists = tagArtistsRes.data.topartists.artist;
        // setState //
        this.setState({
          artistsByTag: artists,
          tagSummary: summary
        })
      }))
      .catch(err => console.log(err));
  }

  componentDidMount() {
    document.body.style.backgroundImage = `url('${BgIMG}')`;
    const { id } = this.props.match.params;
    this.fetchTags(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { tagSummary, artistsByTag } = this.state;

    return (
      <div className="tags-container">
        <Link
          to={process.env.PUBLIC_URL + '/'}
          className="btn btn-lg btn-outline-light"
        >Go Back
          </Link>
        <div className="col-lg-12">
          <div className="tag-card container">
            <h1 className="teal text-center">{id}</h1>
            <h5>{tagSummary}</h5>
            <h4 className="tag-card-header amber">Artists by this tag:
            </h4>
            <div className="card-group center clearpadd">
              {artistsByTag.map((item, index) =>
              <Link
              to={`${process.env.PUBLIC_URL}${'/'}${item.name}`}
              className="card-item-anchor"
              >
                <div
                  className="card-item">
                  <img
                    className="img-fluid"
                    src={item.image[4]['#text']}
                    alt={item.name}
                    ></img>
                  <h5 className="card-title" key={index}>{item.name}</h5>
                </div>

                    </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Tags;