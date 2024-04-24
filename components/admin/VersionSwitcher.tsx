import React, { useState, useEffect } from 'react';

const UrlDropdown: React.FC = () => {
    // Initialize baseURL with a default value that's safe on the server-side
    const [baseURL, setBaseURL] = React.useState<string>('');

    useEffect(() => {
        // Once the component mounts, we're safe to access browser globals
        setBaseURL(window.location.origin);
    }, []);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newBaseURL = event.target.value;
        if (newBaseURL) {
            // Use window.location.pathname to preserve the path
            const newPath = window.location.pathname;
            // Navigate to the new base URL while preserving the path
            const newUrl = newBaseURL + newPath;
            window.location.href = newUrl;
        }
    };

    return (
        <select style={{alignItems: 'center', justifyContent: 'center', fontFamily: "'Font Name', sans-serif",color: 'gray',border: '1px solid gray',borderRadius: '4px', width: '90px' }} onChange={handleChange} value={baseURL}>
            <option value="http://localhost:3000">HTML</option>
            <option value="http://localhost:3001">REACT</option>
        </select>
    );
};

export default UrlDropdown;
