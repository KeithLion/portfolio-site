import React from 'react'
import Box  from '@mui/material/Box'
import Link from '@mui/material/Link'



const NavBar = () => {



    var boxStyle={
        box:{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-evenly',
            padding: 1,
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


    const onClick =()=>{
        fetch('cs-resume(1).pdf').then(response=> response.blob().then(blob =>{
            const fileURL = window.URL.createObjectURL(blob);

            let alink= document.createElement('a')
            alink.href = fileURL
            alink.download = 'cs-resume(1).pdf'
            alink.click()
        }))
    }

    return(
        <main>
            <Box sx={boxStyle.box}>
            <Link href='/Projects' sx={boxStyle.link}>Projects</Link> 
            <Link href='/AboutMe' sx={boxStyle.link}>About Me</Link>
            <Link href='/ExperiencePage' sx={boxStyle.link}>Experience</Link>
            <button onClick={onClick} sx={boxStyle.resumeButton}>Resume</button>
            </Box>
        </main>
    )
}

export default NavBar