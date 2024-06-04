import React, { useState } from 'react';

const Formulaire = () => {
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        age: '',
        mail: '',
        adresse: '',
        titre: '',
        objPro: '',
        titreSection1: '',
        titreSection2: '',
        titreSection3: '',
        nomInst: '',
        adepart: '',
        afin: '',
        descri: ''
    });

    const [errors, setErrors] = useState({
        nom: false,
        prenom: false,
        age: false,
        mail: false
    });

    const validateField = (field, value) => {
        switch (field) {
            case 'nom':
                return /^[A-Z]{1,}$/.test(value);
            case 'prenom':
                return /^[A-Z][a-z]{1,}$/.test(value);
            case 'mail':
                return /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.(com|fr)$/.test(value);
            case 'age':
                return value !== '';
            default:
                return true;
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });

        if (errors[id] !== undefined) {
            setErrors({ ...errors, [id]: !validateField(id, value) });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const newErrors = {};

        for (const field in errors) {
            if (!validateField(field, formData[field])) {
                isValid = false;
                newErrors[field] = true;
            } else {
                newErrors[field] = false;
            }
        }

        setErrors(newErrors);

        if (isValid) {
            // Handle form submission
            console.log('Form submitted:', formData);
        }
    };

    const addElement = (sectionId, inputId) => {
        const inputElement = document.getElementById(inputId);
        if (inputElement && inputElement.value.trim() !== '') {
            const newElement = document.createElement('p');
            newElement.textContent = inputElement.value;
            document.getElementById(sectionId).appendChild(newElement);
            inputElement.value = '';
        }
    };

    return (
        <div className="elementscv">
            <div className="infos_personelles">
                <form id="cvForm" onSubmit={handleSubmit}>
                    <fieldset>
                        <h2 style={{ color: 'lightblue' }}>Section 1 :</h2>
                        <br />
                        <label style={{ color: 'lightblue' }}>Titre de la section 1 :</label>
                        <br />
                        <input type="text" id="titreSection1" value={formData.titreSection1} onChange={handleChange} />
                        <br /><br />
                        <label style={{ color: 'lightblue' }}>Nom <span style={{ color: 'red' }}>*</span> :</label>
                        <br />
                        <input type="text" id="nom" value={formData.nom} onChange={handleChange} />
                        <span className="error" style={{ display: errors.nom ? 'inline' : 'none' }}>Le nom est obligatoire et doit être en majuscule.</span>
                        <br /><br />
                        <label style={{ color: 'lightblue' }}>Prénom <span style={{ color: 'red' }}>*</span> :</label>
                        <br />
                        <input type="text" id="prenom" value={formData.prenom} onChange={handleChange} />
                        <span className="error" style={{ display: errors.prenom ? 'inline' : 'none' }}>Le prénom est obligatoire et doit commencer par une majuscule.</span>
                        <br /><br />
                        <label style={{ color: 'lightblue' }}>Titre :</label>
                        <br />
                        <input type="text" id="titre" value={formData.titre} onChange={handleChange} />
                        <br /><br />
                        <label style={{ color: 'lightblue' }}>Âge <span style={{ color: 'red' }}>*</span> :</label>
                        <br />
                        <select id="age" value={formData.age} onChange={handleChange}>
                            <option value="">Sélectionner</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </select>
                        <span className="error" style={{ display: errors.age ? 'inline' : 'none' }}>L'âge est obligatoire.</span>
                        <br /><br />
                        <label style={{ color: 'lightblue' }}>Mail <span style={{ color: 'red' }}>*</span> :</label>
                        <br />
                        <input type="email" id="mail" value={formData.mail} onChange={handleChange} />
                        <span className="error" style={{ display: errors.mail ? 'inline' : 'none' }}>L'e-mail est obligatoire et doit respecter le format.</span>
                        <br /><br />
                        <label style={{ color: 'lightblue' }}>Adresse :</label>
                        <br />
                        <input type="text" id="adresse" value={formData.adresse} onChange={handleChange} />
                        <br /><br />
                        <input type="submit" value="Envoyer" />
                    </fieldset>
                </form>
            </div>
            <br />

            <div className="cvBody">
                <fieldset>
                    <h2 style={{ color: 'lightblue' }}>Section 2 :</h2>
                    <br />
                    <label style={{ color: 'lightblue' }}>Titre de la section 2 :</label>
                    <br />
                    <input type="text" id="titreSection2" value={formData.titreSection2} onChange={handleChange} />
                    <br /><br />
                    <div id="obj">
                        <h2 style={{ color: 'lightblue' }}>Profil :</h2>
                        <br />
                        <form>
                            <label style={{ color: 'lightblue' }}> Objectif professionel :</label>
                            <br />
                            <input type="text" id="objPro" value={formData.objPro} onChange={handleChange} />
                            <input type="button" value="Ajouter" onClick={() => addElement('obj', 'objPro')} />
                        </form>
                    </div>
                    <br /><br />
                    <div id="comptech">
                        <label style={{ color: 'lightblue' }}>Compétences techniques :</label>
                        <br />
                        <input type="checkbox" id="comp_tech_java" value="JAVA" /> JAVA
                        <br />
                        <input type="checkbox" id="comp_tech_sql" value="SQL" /> SQL
                        <br />
                        <input type="checkbox" id="comp_tech_cloud" value="CLOUD" /> CLOUD
                        <br />
                        <input type="checkbox" id="comp_tech_linux" value="LINUX" /> LINUX
                        <br />
                    </div>
                    <br /><br />
                    <div id="compling">
                        <label style={{ color: 'lightblue' }}>Compétences linguistiques :</label>
                        <br />
                        <input type="text" id="comp_ling" />
                        <input type="button" value="Ajouter" onClick={() => addElement('compling', 'comp_ling')} />
                    </div>
                    <br /><br />
                    <div id="autres">
                        <label style={{ color: 'lightblue' }}>Autres:</label>
                        <br />
                        <input type="text" id="_autres" />
                        <input type="button" value="Ajouter" onClick={() => addElement('autres', '_autres')} />
                    </div>
                    <br /><br />
                    <input type="submit" value="Envoyer" />
                </fieldset>
            </div>
            <br />

            <div className="Etudes">
                <fieldset>
                    <div id="etudes">
                        <h2 style={{ color: 'lightblue' }}>Section 3 :</h2>
                        <br />
                        <label style={{ color: 'lightblue' }}>Titre de la section 3 :</label>
                        <br />
                        <input type="text" id="titreSection3" value={formData.titreSection3} onChange={handleChange} />
                        <br /><br />
                        <form>
                            <label style={{ color: 'lightblue' }}>Nom de l'institution :</label>
                            <br />
                            <input type="text" id="nomInst" value={formData.nomInst} onChange={handleChange} />
                            <input type="button" value="Ajouter" onClick={() => addElement('etudes', 'nomInst')} />
                        </form>
                    </div>
                    <br /><br />
                    <div id="depart">
                        <label style={{ color: 'lightblue' }}> De :</label>
                        <br />
                        <input type="number" value={formData.adepart} id="adepart" onChange={handleChange} />
                        <input type="button" value="Ajouter" onClick={() => addElement('depart', 'adepart')} />
                    </div>
                    <br /><br />
                    <div id="fin">
                        <label style={{ color: 'lightblue' }}> A :</label>
                        <br />
                        <input type="number" value={formData.afin} id="afin" onChange={handleChange} />
                        <input type="button" value="Ajouter" onClick={() => addElement('fin', 'afin')} />
                    </div>
                    <div id='desc'>
                        <br /><br />
                        <label style={{ color: 'lightblue' }}>Description</label>
                        <br />
                        <input type="text" id="descri" value={formData.descri} onChange={handleChange} />
                        <input type="button" value="Ajouter" onClick={() => addElement('desc', 'descri')} />
                    </div>
                    <br /><br />
                    <input type="submit" value="Envoyer" />
                </fieldset>
            </div>
        </div>
    );
};

export default Formulaire;