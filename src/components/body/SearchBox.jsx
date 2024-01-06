import { React, useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import * as BackendUrls from '../../BackendUrls'

const SearchBox = (props) => {
    const [registration, setRegistration] = useState('')
    const getInfo = () => {
        if (registration.length === 0) {
            props.notify("Please enter registration number", "warning");
            return;
        }
        axios.get(BackendUrls.studentDataAPI + registration)
            .then(response => response.data)
            .then(data => props.notify(data?.student?.name, "info"))
            // .catch(error => props.closeSearchbar())
            .catch(error => props.notify(error.message, "error"))
    }
    return (
        <Box
            display="flex" alignItems="center" justifyContent="center" sx={{ mt: 10 }}
        >
            <TextField
                id="standard-basic"
                sx={{ width: '250px', textAlign: 'center' }}
                label="Registration Number"
                variant="standard"
                size="small"
                onChange={event => setRegistration(event.target.value)}
            />
            <Button onClick={getInfo} className='ms-3' variant="contained" startIcon={<SearchIcon />} >Search</Button>
        </Box>
    )
}

export default SearchBox