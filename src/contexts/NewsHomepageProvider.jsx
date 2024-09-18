/* eslint-disable react/prop-types */
import useScreenSize from '../hooks/useScreenSize'
import { useContext, useEffect, useState } from "react"
import { createContext } from 'react';



const NewsHomepageContext = createContext();

function NewsHomepageProvider({ children }) {
    const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize()

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <NewsHomepageContext.Provider
      value={{
        isMobile
      }}
    >
      {children}
    </NewsHomepageContext.Provider>
  );
}

function useHomepage() {
  const context = useContext(NewsHomepageContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { NewsHomepageProvider, useHomepage };