import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from "axios"
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from 'hooks/useApplicationData';


const App = () => {

  const { state, photoFavBtnClicked, showModal, closeModal, setAppData, getTopicPhotos } =
    useApplicationData();

  useEffect(() => {
    const topicsApi = "http://localhost:8001/api/topics";
    const photosApi = "http://localhost:8001/api/photos";

    Promise.all([axios.get(topicsApi), axios.get(photosApi)]).then((all) => {
      const [topics, photos] = all;
      setAppData(topics.data, photos.data);
      console.log("the value of the axios code", all)
    }).catch(err => console.log("An unexpected error occured", err))
  }, []);

  return (
    <>
      <div className="App">
        <HomeRoute
          state={state}
          photoFavBtnClicked={photoFavBtnClicked}
          showModal={showModal}
          getTopicPhotos={getTopicPhotos}
        />
        {state.isModalOpen && (
          <PhotoDetailsModal
            showModal={showModal}
            closeModal={closeModal}
            photoDetails={state.modalPhotoDetails}
            photoFavBtnClicked={photoFavBtnClicked}
            favPhotoList={state.favPhotoList}
          />
        )}
      </div>
    </>
  );
};

export default App;
