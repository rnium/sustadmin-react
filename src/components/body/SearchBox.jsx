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
            .then(data => {
                props.setStudentData(data);
            })
            .catch(error => props.notify(error.message, "error"))
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          getInfo();
        }
    };
    return (
        <div className='searchbox-container'>
            <div className='searchbox'>
                <input 
                    type="text" 
                    placeholder='Registration No.'
                    value={registration}
                    onKeyDown={handleKeyDown}
                    onChange={event => setRegistration(event.target.value)}
                />
                <Button onClick={getInfo} variant="contained">Search</Button>
            </div>
            <img src='/static/search.svg' alt='search' />
        </div>
    )
}

export default SearchBox