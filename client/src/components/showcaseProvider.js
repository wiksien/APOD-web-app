import React, { useState, useContext } from 'react';

const ShowcaseContext = React.createContext();
const ShowcaseUpdateContext = React.createContext();

export function useShowcase() {
  return useContext(ShowcaseContext);
}

export function useShowcaseUpdateContext() {
  return useContext(ShowcaseUpdateContext);
}

export function ShowcaseProvider({ children }) {
  const [showcase, setShowcase] = useState({ visible: false, dataAPI: [] });

  async function changeDataAPI() {
    let data = await sendAPIRequest();
    setShowcase({ visible: true, dataAPI: data });
  }

  async function sendAPIRequest() {
    const API_KEY = "Ta4hbeAUl9HGxvGkzggO0HhVwLSi1WdSFr1NBul5";
    let response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
    );
    let data = await response.json();
    return data;
  }

  return (
    <ShowcaseContext.Provider value={showcase}>
      <ShowcaseUpdateContext.Provider value={changeDataAPI}>
        {children}
      </ShowcaseUpdateContext.Provider>
    </ShowcaseContext.Provider>
  )
}
