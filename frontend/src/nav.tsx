import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <>
      <div className="border-bottom">
        <br />
        <div className="row">
          <div className="col-1"></div>
          <div className="col-7">
            <img src="logo-joel-1.png" alt="logo" height="80px" />
          </div>
          <div className="col-1">
            <br />
            <a
              href="/"
              className="text-muted text-decoration-none link-dark align-middle"
            >
              Home
            </a>
          </div>
          <div className="col-1">
            <br />
            <a
              href="/podcast"
              className="text-muted text-decoration-none link-dark align-middle"
            >
              Podcast
            </a>
          </div>
          <div className="col-1">
            <br />
            <a
              href="/movies"
              className="text-muted text-decoration-none link-dark align-middle"
            >
              Collection
            </a>
          </div>
          <div className="col-1"></div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Navigation;
