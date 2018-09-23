import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <span className="section-heading">
        Copyright &copy; {new Date().getFullYear()} <b>ArtistInfo</b>{" "}
        <i id="heart-ico" aria-hidden="true" className="fa fa-heart" /> by{" "}
        <a
          id="author-footer"
          href="https://github.com/Burziszcze"
          rel="noopener noreferrer"
        >
          Paweł Jarosz
      </a>
      </span>
    </footer>
  )
}

export default Footer;
