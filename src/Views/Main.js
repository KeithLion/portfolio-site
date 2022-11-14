import React from 'react'
import NavBar from '../components/Nav'
import Box from '@mui/material/Box'


const Main = (props) => {



    return(
        <div>
            <NavBar />
            <Box sx={{backgroundColor: '#9FC131', maxWidth: 600, margin:'auto'}}>
            <h1>Hey, I'm Keith Norton</h1>
            <p>I am a front-end web developer</p>
            </Box>
        </div>
    )
}


export default Main