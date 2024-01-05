import { React, useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    const [isFoucused, setIsFoucused] = useState('false');
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
            <Button className='ms-3' variant="contained" startIcon={<SearchIcon />} >Search</Button>
        </Box>
    )
}

export default SearchBox