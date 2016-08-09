import React, { Component } from 'react';
import './article.css';

class Article extends Component {
  render() {
    return (
      <div className="article">
          <h3>About React</h3>
          <p>The internet has changed drastically very quickly, both as we interact and access this technology. Instead of using the internet as a glorified encyclopedia or business directory, we now regularly interact with people in real time. Content needs to change rapidly, as the user is constantly making actions that require instant updates.</p>
          <p>React seems like it will speed up the process of building multiple apps or referring to certain functions used over and over, because of the ability to break things into components.</p>
      </div>
    );
  }
}

export default Article;
