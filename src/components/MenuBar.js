import React from 'react'

const MenuBar = (props) => {
  return (
    <div className="ui four item menu" onClick={props.switchPage}>
    {["profile", "photo", "cocktail", "pokemon"].map(id =>
      <a className={"item " + (props.page === id ? "active" : "")} id={id}>
        <i className={{profile: "user", photo: "photo", cocktail: "cocktail", pokemon: "themeisle"}[id] + " large icon"} id={id}/>
      </a>)}
      </div>
  )

}

export default MenuBar
