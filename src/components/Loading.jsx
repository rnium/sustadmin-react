import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Alert, AlertTitle} from '@mui/material'

const Loading = (props) => {
    let style = {
        width: '100%',
        height: '100vh',
        backgroundColor: ""
    }
    return (
        <div style={style}>
            <Box sx={{ display: 'flex', mt: '10%', }}>
                {props.error ? 
                (<Alert severity="error" align='center' sx={{width: '100%'}}>
                    {/* <AlertTitle>Error</AlertTitle> */}
                    {props.error}
                </Alert>)
                    : (<CircularProgress sx={{
                        marginLeft: '48%'
                    }} />) 
                }
            </Box>
        </div>
    )
}

export default Loading