import { React, useState } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import * as BackendUrls from '../../BackendUrls'

const SearchBox = (props) => {
    const [registration, setRegistration] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const getInfo = () => {
        if (registration.length === 0) {
            props.handleSnackbarOpen("Please enter registration number", "warning");
            return;
        }
        setIsSearching(true);
        axios.get(BackendUrls.studentDataAPI + registration)
            .then(response => response.data)
            .then(data => {
                props.setStudentData(data);
            })
            .catch(error => {
                console.log(error);
                try {
                    props.handleSnackbarOpen("("+error.response.status+") "+error.response.statusText, "error");
                } catch (err) {
                    props.handleSnackbarOpen("Error Occurred!", "error");
                }
            })
            .finally(() => {
                setIsSearching(false);
            })
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
                <img src="/static/search.svg" alt="search_icon" className='icon' />
                <Button disabled={isSearching} onClick={getInfo} variant="contained">Search</Button>
            </div>
            <img src='/static/binocular-multipurpose-usecase.png' alt='search' />
        </div>
    )
}

export default SearchBox