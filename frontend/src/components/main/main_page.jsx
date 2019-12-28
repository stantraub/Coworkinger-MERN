import React from 'react';
import './main_page.css'
class MainPage extends React.Component {
    render() {
        return (
          <div>
            <section className="main-section">
              <img src="https://s3.amazonaws.com/fj-employer-blog/employer-blog/wp-content/uploads/2016/12/30043608/The-Benefits-of-Coworking-Spaces-for-Corporations.jpg" className='main-page-background'></img>
              <div className="search-container">
                <h1>Find a workspace near you</h1>
              </div>
            </section>
          </div>
        );
    }
}

export default MainPage;