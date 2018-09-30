import React, { Component } from 'react';
import BgIMG from '../images/background-img.jpg';
import { Link } from 'react-router-dom';

class Tags extends Component {

  componentDidMount() {
    document.body.style.backgroundImage = `url('${BgIMG}')`;
    
  }

  render() {
    let data = this.props.data

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
          <p>{data}</p>
        </div>
      </div>
    )
  }
}

export default Tags;