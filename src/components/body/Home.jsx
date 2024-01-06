import React from 'react'
import SearchBox from './SearchBox'
import StudentProfile from './StudentProfile'

const Home = (props) => {
    if (props.searchBarOpen) {
        return (
            <SearchBox 
                setStudentData={props.setStudentData} 
                closeSearchbar={props.closeSearchbar} 
                handleSnackbarOpen={(msg, severity) => props.handleSnackbarOpen(msg, severity)} 
            />
        )
    } else {
        return (<StudentProfile studentData={props.studentData} />)
    }
  
}

export default Home