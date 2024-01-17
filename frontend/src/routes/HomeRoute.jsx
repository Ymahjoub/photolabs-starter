import React from "react";

import "styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
  const {
    state,
    photoFavBtnClicked,
    showModal,
    getTopicPhotos
  } = props;

  return (
    <>
      <div className="home-route">
        <TopNavigation
          favPhotoList={state.favPhotoList}
          topics={state.topics}
          getTopicPhotos={getTopicPhotos}
        />
        <PhotoList
          mockPhotos={state.photos}
          showModal={showModal}
          favPhotoList={state.favPhotoList}
          photoFavBtnClicked={photoFavBtnClicked}
        />
      </div>
    </>
  );
};

export default HomeRoute;