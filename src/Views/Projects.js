import React from 'react'
import NavBar from '../components/Nav'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'


const Projects = (props) => {

    var styling={
        ulStyle:{
            listStyle:'none',
            paddingLeft:0,
        },
        liStyle:{
            textDecoration:'none',
            color:'#042940'
        },
        box:{
            backgroundColor:'#042940',
            width:'100%',
            height:'100vh',
            display:'flex',
            alignItems:'flexStart',
            justifyContent:'center'
        }
    }



    return(
<div>

            <NavBar />
        <Box sx={styling.box}>
            <Paper style={{backgroundColor:'#005C53',width:'50%',height:'50%', marginTop:25}}>
            <h1 style={{color:'#9FC131',margin:10}}>Projects</h1>
            <ul style={styling.ulStyle}>
                <li><Link style={styling.liStyle} href='https://priceless-leavitt-6b998e.netlify.app/' target='_blank'>Weather App</Link></li>
                <li><Link style={styling.liStyle} href='https://cosmic-starburst-be934d.netlify.app/' target='_blank'>Weather App V2</Link></li>
                <li><Link style={styling.liStyle} href='https://starlit-puffpuff-ad7e05.netlify.app/' target='_blank'>Product Preview</Link></li>

            </ul>
            </Paper>
        </Box>
</div>
    )
}

export default Projects