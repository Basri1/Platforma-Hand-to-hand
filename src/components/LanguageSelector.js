import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation();

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div className="language-selector" style={{ float: 'left' }}>
            <select onChange={changeLanguage}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="es">Español</option>
                {/* Add more languages as needed */}
            </select>
        </div>
    );
}

export default LanguageSelector;
