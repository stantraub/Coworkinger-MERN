import React from 'react';
import { Link } from 'react-router-dom'
import './main_page.css'
class MainPage extends React.Component {
  render() {
    return (
      <section className="main-section">
        <img
          src="https://s3.amazonaws.com/fj-employer-blog/employer-blog/wp-content/uploads/2016/12/30043608/The-Benefits-of-Coworking-Spaces-for-Corporations.jpg"
          className="main-page-background"
        ></img>
        <div className="search-container">
          <h1 className="search-header">Find a workspace near you</h1>
          <Link to={"/spaces"}>
            <button className="search-box">
              All San Francisco Coworking Spaces
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default MainPage;