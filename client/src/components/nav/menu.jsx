import React from 'react'

const Menu = ({toggleMenuHidden}) => {
    return (
        <div onClick={toggleMenuHidden}>
            This is the menu
        </div>
    )
}

export default Menu