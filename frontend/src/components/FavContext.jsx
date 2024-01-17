import React, { createContext, useContext, useState } from 'react';

export const FavContext = createContext();

export const useFavContext = () => {
  return useContext(FavContext);
};

export const FavProvider = ({ children }) => {
  const [favPhotos, setFavPhotos] = useState([]);

  const toggleFav = (photoId) => {
    if (favPhotos.includes(photoId)) {
      setFavPhotos(favPhotos.filter(id => id !== photoId));
    } else {
      setFavPhotos([...favPhotos, photoId]);
    }
  };

  return (
    <FavContext.Provider value={{ favPhotos, toggleFav }}>
      {children}
    </FavContext.Provider>
  );
};