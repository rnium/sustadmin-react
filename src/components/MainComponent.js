import { Component } from 'react'
import Header from './header/HeaderComponent'
import BodyComponent from './body/BodyComponent'

const data = `{"student":{"registration":"2018338514","name":"Md. Saiful Islam Roni","cgpa":"3.81","dept":"Electrical and Electronic Engineering","session":"2018-19","avatar_url":"/static/results/images/blank-dp.svg","email":"[empty]"},"semester_gradesheets":[{"semester_number":1,"semester_suffix":"st","url":"/student/2018338514/semestergradesheet/1/"},{"semester_number":2,"semester_suffix":"nd","url":"/student/2018338514/semestergradesheet/2/"},{"semester_number":3,"semester_suffix":"rd","url":"/student/2018338514/semestergradesheet/3/"},{"semester_number":4,"semester_suffix":"th","url":"/student/2018338514/semestergradesheet/4/"},{"semester_number":5,"semester_suffix":"th","url":"/student/2018338514/semestergradesheet/5/"},{"semester_number":6,"semester_suffix":"th","url":"/student/2018338514/semestergradesheet/6/"}],"year_gradesheets":[{"year_number":1,"year_suffix":"st","url":"/student/2018338514/gradesheet/1/"},{"year_number":2,"year_suffix":"nd","url":"/student/2018338514/gradesheet/2/"},{"year_number":3,"year_suffix":"rd","url":"/student/2018338514/gradesheet/3/"}],"transcript_url":"/student/2018338514/transcript/","full_document_url":"/"}`
const studentData = JSON.parse(data)
class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: studentData,
      searchBarOpen: false
    }
  }

  setStudentData = payload => {
    this.setState({
      ...this.state,
      studentData: payload,
      searchBarOpen: false
    })
    console.log('studentData state: ',this.state.studentData);
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

  render() {
    return (
      <div>
          <Header searchBarOpen={this.state.searchBarOpen} openSearchbar={this.openSearchbar} />
          <BodyComponent setStudentData={this.setStudentData} studentData={this.state.studentData} searchBarOpen={this.state.searchBarOpen} closeSearchbar={this.closeSearchbar}  />
      </div>
    )
  }
}

export default MainComponent