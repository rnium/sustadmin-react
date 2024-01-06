import React, { Component } from 'react'
import SearchBox from './SearchBox'
import StudentProfile from './StudentProfile'
import {Container, Snackbar, Alert} from '@mui/material'

class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentData: null,
      snackbar: {
        open: false,
        message: "",
        severity: "success"
      }
    }
  }

  handleSnackbarOpen = (msg, severity) => {
    this.setState({
      ...this.state,
      snackbar: {
        open: true,
        message: msg,
        severity: severity
      }
    })
  };

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      ...this.state,
      snackbar: {
        ...this.state.snackbar,
        open: false,
      }
    })
  };

  render() {
    return (
      <Container>
          {
          this.props.searchBarOpen ? 
            (<SearchBox setStudentData={this.props.setStudentData} closeSearchbar={this.props.closeSearchbar} notify={(msg, severity)=>this.handleSnackbarOpen(msg, severity)} />)
            : (<StudentProfile studentData={this.props.studentData} />)
          }
          <Snackbar className='shadow' open={this.state.snackbar.open} autoHideDuration={6000} onClose={this.handleSnackbarClose}>
            <Alert onClose={this.handleSnackbarClose} severity={this.state.snackbar.severity} sx={{ width: '100%' }}>
              {this.state.snackbar.message}
            </Alert>
          </Snackbar>
      </Container>
    )
  }

  
}

export default BodyComponent