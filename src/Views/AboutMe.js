import React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { color } from '@mui/system'



const AboutMe =() =>{


    var boxStyle= {
        box:{

display:'flex', 
flexDirection:'column',
margin:'auto', 
justifyContent:'center',
alignItems:'center',
minHeight:'100vh',
backgroundColor:'#042940',
color:'white'
        }
    }


    return(
        <Box sx={boxStyle.box}>
            <main style={{maxWidth:800}}>

            <h1>About Me</h1>
            <p>
            I'm a front-end developer that started my journey learning though a workshop. in an effort to learn more joined a full stack bootcamp. I ended up circling back around to just front end design. I have had an eye for design since highschool and have found ways of designing projects from there. 
            </p>
            </main>
            <footer>
            <Link href='#'>social links</Link>
            <Link href='/' style={{display:'block'}}>Home</Link>
            </footer>
        </Box>
    )
}

export default AboutMe