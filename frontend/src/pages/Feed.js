import React, { Component } from 'react';

import './Feed.css';

import more from '../assets/more.svg';
import like from '../assets/like.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

class Feed extends Component {
  render () {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Rodrigo Petry</span>
              <span className="place">Porto Alegre</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/52824661_2093520984060749_1131466971181212685_n.jpg" />

          <footer>
            <div className="actions">
              <img src={like} />
              <img src={comment} />
              <img src={send} />
            </div>

            <strong>54 curtidas</strong>

            <p>
              Uma foto muito legal com a minha namorada!
              <span>#girlfriend #love</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div className="user-info">
              <span>Rodrigo Petry</span>
              <span className="place">Porto Alegre</span>
            </div>

            <img src={more} alt="Mais" />
          </header>

          <img src="http://localhost:3333/files/52824661_2093520984060749_1131466971181212685_n.jpg" />

          <footer>
            <div className="actions">
              <img src={like} />
              <img src={comment} />
              <img src={send} />
            </div>

            <strong>87 curtidas</strong>

            <p>
              Uma foto muito legal com a minha namorada!
              <span>#girlfriend #love</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;