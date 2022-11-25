import React from 'react'
import NavBar from '../components/Nav'
import Box from '@mui/material/Box'


const Main = (props) => {

    var styling={
        mainText:{
                color:'#9FC131',
    }
    }

    return(
        <div>
            <Box sx={{height: '100vh', margin:'auto',backgroundColor:'#042940'}}>
            <NavBar />
            <h1 style={styling.mainText}>Hey, I'm Keith Norton</h1>
            <p style={styling.mainText}>I am a front-end web developer</p>
            </Box>
        </div>
    )
}


export default Main