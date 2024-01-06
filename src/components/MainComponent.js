import { Component } from 'react'
import Header from './header/HeaderComponent'
import BodyComponent from './body/BodyComponent'

class MainComponent extends Component {
  // componentDidMount() {
  //   console.log("mouned");
  // }
  render() {
    return (
      <div>
          <Header />
          <BodyComponent />
      </div>
    )
  }
}

export default MainComponent