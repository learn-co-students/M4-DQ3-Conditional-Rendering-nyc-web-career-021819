import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {


  state = {
    page: "photo"
  }

  switchPage = (event) => {
    this.setState({page: event.target.id})
  }

  renderPage = () => {
    switch (this.state.page) {
      case "photo":
        return <Photos/>
      case "profile":
        return <Profile/>
      case "cocktail":
        return <Cocktails/>
      case "pokemon":
        return <Pokemon/>
    }
  }

  render() {
    const detailsToDisplay = <div>Hi, I'm a div!</div>
    return (
      <div>
        <MenuBar switchPage={this.switchPage} page={this.state.page}/>
        {this.renderPage()}
      </div>
    )
  }
}
export default MainBox