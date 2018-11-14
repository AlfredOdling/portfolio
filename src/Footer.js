import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <a
        className="footerLinks"
        rel="noopener noreferrer"
        target="_blank"
        href="mailto:alfredodling@gmail.com"
        >
        Email
        </a>

        <a
        className="footerLinks"
        rel="noopener noreferrer"
        target="_blank"
        href="https://docs.google.com/document/d/1Eh7a5tDj7Rmgv8bmpqJwQdYhHaRN4LHfSTHKoONAcfQ/edit?usp=sharing"
        >
        CV
        </a>

        <a
        className="footerLinks"
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/AlfredOdling"
        >
        Github
        </a>

        <a
        className="footerLinks"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/alfredodling/"
        >
        LinkedIn
        </a>

        <a
        className="footerLinks"
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.goodreads.com/review/list/63594929-alfred-dling?shelf=%23ALL%23&view=covers"
        >
        Bookshelf
        </a>
      </div>
    )
  }
}
