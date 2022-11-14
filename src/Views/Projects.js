import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'


const Projects = (props) => {



    return(

        <Box>
            <Paper>
            <h1>Projects</h1>
            <ul sx={{listStyle:'none'}}>
                <li><Link href='https://priceless-leavitt-6b998e.netlify.app/' target='_blank'>Weather App</Link></li>
                <li><Link href='https://cosmic-starburst-be934d.netlify.app/' target='_blank'>Weather App V2</Link></li>
                <li><Link href='https://starlit-puffpuff-ad7e05.netlify.app/' target='_blank'>Product Preview</Link></li>

            </ul>
            </Paper>
        </Box>
    )
}

export default Projects