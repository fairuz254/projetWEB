import React from 'react'
import './Header.css'
import { Grid } from '@mui/material'
import ResumeData from '../../utils/ResumeData'
import { Typography } from '@mui/material'

const Header = () => {
  return (
    <Grid container className="head_style">
      {ResumeData.socials.map((element)=>(
        <Grid item xs={12} sm={6} md={4}>
          <Typography>
            {element.title}
          </Typography>
        </Grid>
        ))}
    </Grid>
  )
}

export default Header