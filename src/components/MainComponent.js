import { Component } from 'react'
import Header from './header/HeaderComponent'
import BodyComponent from './body/BodyComponent'

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: null,
      searchBarOpen: true
    }
  }

  openSearchbar = () => {
    this.setState({
      ...this.state,
      searchBarOpen: true
    })
  }
  
  closeSearchbar = () => {
    this.setState({
      ...this.state,
      searchBarOpen: false
    })
  }

  render() {
    return (
      <div>
          <Header searchBarOpen={this.state.searchBarOpen} openSearchbar={this.openSearchbar} />
          <BodyComponent studentData={this.state.studentData} searchBarOpen={this.state.searchBarOpen} closeSearchbar={this.closeSearchbar}  />
      </div>
    )
  }
}

export default MainComponent