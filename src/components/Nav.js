import React from 'react'
import Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const NavBar = () => {

    var boxStyle={
        box:{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-evenly',
            padding: 2,
            backgroundColor: '#042940',
        },
        link:{
            textDecoration:'none',
            cursor:'pointer',
            color: 'white'
        },
        resumeButton:{
            border: '1px solid #9FC131',
            color: '#9FC131',
            textDecoration:'none',
            cursor:'pointer',
            padding: 1
        }
    }


    return(
        <main>
            <Box sx={boxStyle.box}>
            <Link href='ProjectsPage' sx={boxStyle.link}>Projects</Link> 
            <Link href='AboutMePage' sx={boxStyle.link}>About Me</Link>
            <Link href='ExperiencePage' sx={boxStyle.link}>Experience</Link>
            <Link href='Resume' sx={boxStyle.resumeButton}>Resume</Link>
            </Box>
        </main>
    )
}

export default NavBar