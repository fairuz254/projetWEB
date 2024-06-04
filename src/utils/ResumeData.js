import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';




export default {
    name: 'Fairuz ABDELLAOUI',
    title:'NETWORK AND TELECOMMUNICATION STUDENT',
    birthday: ' 16 th February 2003',
    email:'selenophile2003@gmail.com',
    address:'Rabat',
    phone :'0611223344',

    socials:{
        facebook:{
            link:'https://www.facebook.com',
            text:'Fayruz',
            icon:<FacebookIcon/>,
        },
        LinkedIn:{
            link:'https://www.LinkedIn.com',
            text:'@Fairuzabdellaoui',
            icon:<LinkedInIcon/>,
        },
        Mail:{
            link:'https://www.gmail.com',
            text:'selenophile2003@gmail.com',
            icon:<MailIcon/>,
        }, 
       
    },
    
    

    about: 'Aspiring Network and Telecom professional with hands-on experience in network configuration, troubleshooting, and telecommunications systems. Currently pursuing a degree in Network and Telecommunications, with a strong foundation in network security, VoIP, and wireless technologies. Eager to apply my technical skills and knowledge to real-world challenges and contribute to innovative solutions in the field.',
    experiences:[
        {
            title:'work 1',
            date:'2023 - 2024',
            description:'One-month internship at LEAR CORPORATION MEKNES in the maintenance team.',
        },
        {
            title:'work 2',
            date:'2023 - 2024',
            description:'developping a network monitoring method for EMI using Centreon',
        }

        
],
        Formation:[
        {
            title:'work 1',
            date:'2022 - present',
            description: 'Engineering cycle studies in Network and Telecom at EMI',
        },
        {
            title:'work 2',
            date:'2020 - 2022',
            description:'Preparatory classes',
        },

      ],

    skills:[
            {
                title:"NETWORK",
                description: [
                    "Cloud",
                    "Switching",
                    "Routing",
                    
                ],
            },
            {
                title:"PROGRAMMING",
                description:["HTML","Java","CSS"],
            },
            {
                title:"DATABASE",
                description: [  "Oracle" ,"MySQL","entreprise Architect"],
            },
        ],
};