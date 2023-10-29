import React from 'react'
import { Grid, Typography } from '@mui/material'
import ResumeData from '../utils/ResumeData'
import './Resume.css';
import CustomTimeline from '../Components/Timeline/Timeline';
import { CustomTimelineSeparator } from '../Components/Timeline/Timeline';
import Paper from '@mui/material/Paper';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { TimelineContent, TimelineDot, TimelineItem } from '@mui/lab';

const Resume = () => {
  return (
    <div>
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <h2 className='section_title_text'>About me</h2> 
        </Grid>
        <Grid item xs={12}>
          <Typography variant ="body2" className='aboutme_text'>{ResumeData.about}</Typography>
        </Grid>
      </Grid>
      

        <Grid item xs={12}>
          <Grid Container className="Resume_timeline">
            {/* Working History*/}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Experiences" icon={<WorkIcon/>}>
                {ResumeData.experiences.map((experience) => (
                 <TimelineItem className='timeline_content'>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className='timeline_title'>{experience.title}</Typography>
                    <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                    <Typography variant='body2'className='timeline_description'>{experience.description}</Typography>
                  </TimelineContent>
                </TimelineItem>

              ))}
              </CustomTimeline>
            </Grid>


            {/* Education*/}
            <Grid item sm={12} md={6}>
              <CustomTimeline title="Formation" icon={<SchoolIcon/>}>
                {ResumeData.Formation.map((formation) => (
                 <TimelineItem className='timeline_content'>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className='timeline_title'>{formation.title}</Typography>
                    <Typography variant='caption' className='timeline_date'>{formation.date}</Typography>
                    <Typography variant='body2'className='timeline_description'>{formation.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
        

        <Grid item className='section_title mb_30'>
          <span></span>
          <h6 className='section_title_text'>Skills</h6> 
        </Grid>
      <Grid container
      spacing={3}
      justify="space-between"
       className="section graybg pb_45 p_50">
        {ResumeData.skills.map((skill) =>(
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={0} className="skill">
              <Typography variant='h6' className="skills_title">
                {skill.title}
                {skill.description.map((element) =>(
                <Typography variant="body2" className='skill_description'>
                  <TimelineDot variant={'outlined'} className='timeline_dot'/>
                  {element}
                </Typography>
              ))}
              </Typography>
            </Paper>
          </Grid>
        ))}
       </Grid>


    </div>
  );
};

export default Resume