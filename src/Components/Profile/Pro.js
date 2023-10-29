import { Typography } from '@mui/material';
import React from 'react';
import './Pro.css'
import CustomTimeline, { CustomTimelineSeparator } from '../Timeline/Timeline'

import ResumeData from '../../utils/ResumeData';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { TimelineItem,TimelineContent } from '@mui/lab';


const CustomTimelineItem = ({title,text,link})=>{
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text" >
            <span>{title}:</span>{" "}
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography >  
        ) : (
          <Typography className="timelineItem_text">
            <span>{title}:</span> {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const Pro = () => {
  return (
    <div className="profile container_shadow ">
        <div className="profile_name">
          <Typography className="name">{ResumeData.name}</Typography>
          <Typography className="title">{ResumeData.title}</Typography>
        </div>

        <figure className="profile_image">
          <img src={require("../../Assets/images/img2.jpg")} alt='photoprofil' />
        </figure>   


        <div className="profile_information">
            <CustomTimeline icon={<PersonOutlineIcon/>}>
              <CustomTimelineItem title ='Name' text ={ResumeData.name}/>
              <CustomTimelineItem title ='Title' text ={ResumeData.title}/>
              <CustomTimelineItem title ='Birthday' text ={ResumeData.birthday}/>

              {Object.keys(ResumeData.socials).map((key)=>(
                <CustomTimelineItem title={key}text={ResumeData.socials[key].text} link={ResumeData.socials[key].link} />
              ))}
            </CustomTimeline>
            <br/>
        </div>
    </div>
  );
};

export default Pro;