import React from 'react'

const MenuBar = ({active, handleClick}) => {

  return (
    <div className="ui four item menu">
      <a onClick={handleClick} className={active === "profile" ? "item active" : "item"} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={handleClick} className={active === "photo" ? "item active" : "item"} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={handleClick} className={active === "cocktail" ? "item active" : "item"} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={handleClick} className={active === "pokemon" ? "item active" : "item"} id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
