import React, { Fragment } from 'react'

const Menu = ({toggleMenuHidden}) => {
    return (
      <Fragment>
        <input type="checkbox" className="menu__checkbox" id="menu-toggle" />
        <label
          htmlFor="menu-toggle"
          onClick={toggleMenuHidden}
          className="menu__button"
        >
          <span className="menu"></span>
        </label>
      </Fragment>
    );
}

export default Menu