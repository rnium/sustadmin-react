import { React } from 'react'
import { Button, Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'

const SearchBox = (props) => {
    const getInfo = () => {
        axios.get('http://127.0.0.1:8000/results/api/sust-studentdata/')
            .then(response => response.data)
            .then(data => console.log(data))
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
                
            />
            <Button onClick={getInfo} className='ms-3' variant="contained" startIcon={<SearchIcon />} >Search</Button>
        </Box>
    )
}

export default SearchBox