import React, { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ThemeSelector = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div>
            <label>Choose Theme: </label>
            <select value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
};

export default ThemeSelector;
