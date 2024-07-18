import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

const LanguageSelector = () => {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div>
            <label>Choose Language: </label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="pt">Portuguese</option>
                <option value="fr">French</option>


            </select>
        </div>
    );
};

export default LanguageSelector;
