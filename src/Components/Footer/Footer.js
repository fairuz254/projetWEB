import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import ResumeData from '../../utils/ResumeData'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='Footer_left'>
        <Typography className="footer_name">{ResumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className='footer_copyright'>
          Edited by Fairuz
        </Typography>
      </div>
    </div>
  )
}

export default Footer