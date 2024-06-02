import { Component } from 'react'
import Header from './header/HeaderComponent'
import BodyComponent from './body/BodyComponent'
import Loading from './Loading'
import axios from 'axios'
import * as urls from '../BackendUrls'


class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        hasLoaded: false,
        loadingError: null,
        firstname: "",
        lastname: "",
        email: "",
        avatar_url: ""
      },
      studentData: null,
      searchBarOpen: true
    }
  }

  setStudentData = payload => {
    this.setState({
      ...this.state,
      studentData: payload,
      searchBarOpen: false
    })
  }

  openSearchbar = () => {
    this.setState({
      ...this.state,
      studentData: null,
      searchBarOpen: true
    })
  }

  closeSearchbar = () => {
    this.setState({
      ...this.state,
      searchBarOpen: false
    })
  }

  componentDidMount() {
    if (!this.state.userInfo.hasLoaded) {
      axios.get(urls.userInfoUrl)
        .then(response => (response.data))
        .then(data => {
          this.setState({
            ...this.state,
            userInfo: {
              ...this.state.userInfo,
              hasLoaded: true,
              loadingError: null,
              ...data
            }
          })
        })
        .catch(error => {
          this.setState({
            ...this.state,
            userInfo: {
              ...this.state.userInfo,
              hasLoaded: false,
              loadingError: error.message,
            }
          })
        })
    }
  }

  render() {
    if (this.state.userInfo.hasLoaded) {
      return (
        <div>
          <Header 
            userInfo={this.state.userInfo} 
            searchBarOpen={this.state.searchBarOpen} 
            openSearchbar={this.openSearchbar} 
          />
          <BodyComponent 
            userInfo={this.state.userInfo} 
            setStudentData={this.setStudentData} 
            studentData={this.state.studentData} 
            searchBarOpen={this.state.searchBarOpen} 
            closeSearchbar={this.closeSearchbar} 
          />
        </div>
      )
    } else {
      return <Loading error={this.state.userInfo.loadingError} />;
    }
  }
}

export default MainComponent