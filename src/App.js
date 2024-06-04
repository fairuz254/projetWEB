import React, { useState } from "react";
import './App.css';
import { Button } from '@mui/material'; // Import du composant Button depuis MUI
import Formulaire from './Formulaire/Formulaire';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from "./Components/Header/Header";
import Resume from "./Resume/Resume";
import Footer from "./Components/Footer/Footer";
import Pro from "./Components/Profile/Pro";
function App() {
    const [showForm, setShowForm] = useState(false); // État pour contrôler l'affichage du formulaire

    // Fonction pour basculer l'état entre afficher et masquer le formulaire
    const toggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="App">
            {/* Affichage conditionnel du formulaire */}
            {showForm ? (
                <Formulaire />
            ) : (
                <div>
                    <Container className={'top_60'}>
                        <Grid container spacing ={7}>
                            <Grid item xs={12} sm={12} md={4} lg={3} >
                             <Pro/>
                            </Grid> 
                             <Grid item xs >
                               <div className='Resume_style container_shadow'>
                                 <Resume/>
                              </div>
                               <Footer/>
                             </Grid>
                         </Grid>
                     </Container>
                    <main>
                        {/* Votre contenu principal */}
                        <div className="centered">
                            <Button onClick={toggleForm} variant="contained" color="primary">Afficher le formulaire</Button>
                        </div>
                    </main>
                    <footer>
                        {/* Votre pied de page */}
                    </footer>
                </div>
            )}
        </div>
    );
}

export default App;