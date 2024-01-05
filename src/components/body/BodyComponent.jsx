import React from 'react'
import SearchBox from './SearchBox'
import StudentProfile from './StudentProfile'
import {Container} from '@mui/material'

const BodyComponent = () => {
  return (
    <Container>
        {/* <SearchBox /> */}
        <StudentProfile />
    </Container>
  )
}

export default BodyComponent