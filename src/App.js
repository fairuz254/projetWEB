import React from "react";
import './App.css';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from "./Components/Header/Header";
import Resume from "./Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Pro from "./Components/Profile/Pro";
function App(){
    return(
        <Container className={'top_60'}>
             <Grid container spacing ={7}>
                <Grid item xs={12} sm={12} md={4} lg={3} >
                    <Pro/>
                </Grid> 
                <Grid item xs >
                    {/*<Header/>*/}
                    <div className='Resume_style container_shadow'>
                        <Resume/>
                    </div>
                    <Footer/>
                </Grid>
             </Grid>
        </Container>
    );
}

export default App;