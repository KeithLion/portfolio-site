import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'



const AboutMe =() =>{



    return(
        <Box sx={{maxWidth: 800,display:'flex', flexDirection:'column',margin:'auto', minHeight:'100vh'}}>
            <Paper sx={{padding:1, marginTop:20}}>

            <h1>About Me</h1>
            <p>
            I'm a front-end developer that started my journey learning though a workshop. in an effort to learn more joined a full stack bootcamp. I ended up circling back around to just front end design. I have had an eye for design since highschool and have found ways of designing projects from there. 
            </p>
            </Paper>
            <footer>
            <Link href='#'>social links</Link>
            </footer>
        </Box>
    )
}

export default AboutMe