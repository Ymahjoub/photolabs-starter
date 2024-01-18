import React from "react";

import "styles/PhotoList.scss";
import PhotoListItem from "components/PhotoListItem";

const PhotoList = ({
  favPhotoList,
  mockPhotos,
  showModal,
  photoFavBtnClicked,
}) => {

  const photoList = mockPhotos.map((photo) => {
    const { id, user, urls, location } = photo;
    return (
      <PhotoListItem
        key={id}
        id={id}
        user={user}
        location={location}
        urls={urls}
        showModal={showModal}
        favPhotoList={favPhotoList}
        photoFavBtnClicked={photoFavBtnClicked}
      />
    );
  });

  return (
    <>
      <ul className="photo-list">{photoList}</ul>
    </>
  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: "Jacob",
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    },
  ],
};

export default PhotoList;