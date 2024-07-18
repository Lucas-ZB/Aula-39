import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import LanguageSelector from './components/LanguageSelector';
import ThemeSelector from './components/ThemeSelector';

const App = () => {
    return (
        <LanguageProvider>
            <ThemeProvider>
                <div>
                    <h1>My Preferences App</h1>
                    <LanguageSelector />
                    <ThemeSelector />
                </div>
            </ThemeProvider>
        </LanguageProvider>
    );
};

export default App;
