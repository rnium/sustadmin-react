import { React, useState } from 'react'
import { Button, ToggleButton, ToggleButtonGroup } from '@mui/material'
import axios from 'axios'
import * as BackendUrls from '../../BackendUrls'

const SearchBox = (props) => {
    const [isSearching, setIsSearching] = useState(false)
    const getInfo = () => {
        if (props.searchBoxProps.registration.length === 0) {
            props.handleSnackbarOpen("Please enter registration number", "warning");
            return;
        }
        setIsSearching(true);
        axios.get(BackendUrls.studentDataAPI + props.searchBoxProps.registration + "&dept=" + props.searchBoxProps.dept)
            .then(response => response.data)
            .then(data => {
                props.setStudentData(data);
            })
            .catch(error => {
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
    const handleToggle = (event, newDept) => {
        if (newDept) {
          props.searchBoxPropsChanger('dept', newDept);
        }
      };
    return (
        <div className='searchbox-container'>
            <div className='searchbox'>
                <input 
                    type="text" 
                    placeholder='Registration No.'
                    value={props.searchBoxProps.registration}
                    onKeyDown={handleKeyDown}
                    onChange={event => props.searchBoxPropsChanger('registration', event.target.value)}
                />
                <img src="/static/search.svg" alt="search_icon" className='icon' />
                <Button disabled={isSearching} onClick={getInfo} variant="contained">Search</Button>
            </div>
            <ToggleButtonGroup
                color="secondary"
                value={props.searchBoxProps.dept}
                exclusive
                onChange={handleToggle}
                aria-label="Platform"
                sx={{mt: 1}}
                >
                <ToggleButton value="cse" sx={{width: '60px'}}>CSE</ToggleButton>
                <ToggleButton value="eee" sx={{width: '60px'}}>EEE</ToggleButton>
                <ToggleButton value="ce" sx={{width: '60px'}}>CE</ToggleButton>
            </ToggleButtonGroup>
            <img src='/static/binocular-multipurpose-usecase.png' alt='search' />
        </div>
    )
}

export default SearchBox