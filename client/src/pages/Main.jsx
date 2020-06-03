import React from 'react';
import { Link } from 'react-router-dom'

const MainPage = () => (
  <section className="main flex-col">
    <div className="search">
      <div className="search__header">Find a workspace near you, for free</div>
      <Link to={"/spaces"}>
        <button className="search__box">
          All San Francisco Coworking Spaces
        </button>
      </Link>
    </div>
  </section>
)

export default MainPage;