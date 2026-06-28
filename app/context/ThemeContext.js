"use client";
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState({
    primaryColor: '#6366f1',
    borderRadius: '12px',
    darkMode: false,
  });

  const updateTheme = (key, value) => setTheme(prev => ({ ...prev, [key]: value }));

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <div style={{ 
        '--primary': theme.primaryColor, 
        '--radius': theme.borderRadius,
        backgroundColor: theme.darkMode ? '#0f172a' : '#f8fafc',
        color: theme.darkMode ? '#f8fafc' : '#0f172a',
      }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
export const useTheme = () => useContext(ThemeContext);
