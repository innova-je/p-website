import React, { createContext, useContext, useState } from 'react';

// Create a Language Context
const LanguageContext = createContext();

// Create a Provider component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('EN');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
