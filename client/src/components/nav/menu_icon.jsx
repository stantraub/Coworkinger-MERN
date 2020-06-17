import React, { Fragment } from 'react'

const MenuIcon = ({toggleMenuHidden, hidden}) => (
  <Fragment>
    <input 
      type="checkbox" 
      className="menu__checkbox" 
      id="menu-toggle" 
      checked={!hidden}
      />
    <label
      htmlFor="menu-toggle"
      onClick={toggleMenuHidden}
      className="menu__button"
    >
      <span className="menu"></span>
    </label>
  </Fragment>
)

export default MenuIcon