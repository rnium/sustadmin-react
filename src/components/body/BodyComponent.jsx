import React, { Component } from 'react'
import {Container, Snackbar, Alert} from '@mui/material'
import Home from './Home'
import CustomTool from './CustomTool'
import EditProfile from './EditProfile'
import {Routes, Route} from 'react-router-dom'

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
          <Routes>
            <Route exact path='/sust/' element={
              <Home searchBarOpen={this.props.searchBarOpen} 
                    studentData={this.props.studentData} 
                    setStudentData={this.props.setStudentData} 
                    closeSearchbar={this.props.closeSearchbar} 
                    handleSnackbarOpen={(msg, severity)=>this.handleSnackbarOpen(msg, severity)} />
              } 
            />
            <Route exact path='/sust/custom/' element={
              <CustomTool handleSnackbarOpen={(msg, severity)=>this.handleSnackbarOpen(msg, severity)} />
            } />
            <Route path='/sust/profile/' element={<EditProfile />} />
          </Routes>
          
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