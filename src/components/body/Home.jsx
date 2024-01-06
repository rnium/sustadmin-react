import React from 'react'
import SearchBox from './SearchV2'
import StudentProfile from './StudentProfile'

const Home = (props) => {
    if (props.searchBarOpen) {
        return (<StudentProfile studentData={props.studentData} />)
    } else {
        return (
            <SearchBox 
                setStudentData={props.setStudentData} 
                closeSearchbar={props.closeSearchbar} 
                notify={(msg, severity) => props.handleSnackbarOpen(msg, severity)} 
            />
        )
    }
  
}

export default Home