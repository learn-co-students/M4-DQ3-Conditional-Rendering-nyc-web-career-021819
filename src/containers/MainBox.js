import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    active: ''
  }

  handleClick = (e) => {
    this.setState({
      active: e.target.id
    })
  }

  // detailsToDisplay = () => {
  //   if(this.state.active === 'profile'){
  //     return <Profile />
  //   } else if (this.state.active === 'photo'){
  //     return <Photos />
  //   } else if (this.state.active === 'cocktail'){
  //     return <Cocktails />
  //   } else if (this.state.active === 'pokemon'){
  //     return <Pokemon />
  //   } else {
  //     return null
  //   }
  // }

  render() {

    let details;
    switch (this.state.active){
      case "profile":
        details  = <Profile />
        break;
      case "photo":
        details  = <Photos />
        break;
      case "cocktail":
        details  = <Cocktails />
        break;
      case "pokemon":
        details  = <Pokemon />
        break;
      default:
        details = null
        break;
    }

    return (
      <div>
        <MenuBar handleClick={this.handleClick} active={this.state.active}/>
        {details}
      </div>
    )
  }

}

export default MainBox
