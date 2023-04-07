import React from 'react';
import data from '../MovieData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

// Simple page introducing podcast
class Head extends React.Component {
  render() {
    return (
      <div className="text-center">
        <br />
        <br />
        <br />
        <h1 className="text-info">Baconsale</h1>
        <br />
        <p>
          Joel also has a podcast! You are invited to listen to his podcast,
          <a
            href="https://baconsale.com/"
            className="text-decoration-none text-info"
          >
            {' '}
            "Baconsale"
          </a>
        </p>
      </div>
    );
  }
}

function Podcast() {
  return (
    <div>
      <Head />
    </div>
  );
}

export default Podcast;
