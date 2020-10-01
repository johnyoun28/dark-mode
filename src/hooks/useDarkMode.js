import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const useDarkMode = (value) => {
  const [darkMode, useDarkMode] = useLocalStorage(value);

  return [darkMode, useDarkMode];
};

export default useDarkMode;
