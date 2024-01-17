import React, { useMemo } from "react";

import "styles/PhotoDetailsModal.scss";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

export const PhotoDetailsModal = ({ photoDetails:{ urls, similar_photos, id}, showModal, closeModal, photoFavBtnClicked, favPhotoList } ) => {
  
  const photoIsFavorited = useMemo(() => {
    if (favPhotoList.includes(id)) return true
    return false
  }, [favPhotoList, id]);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal--close-button"
        onClick={closeModal}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_428_287)">
            <path
              d="M14.0625 3.9375L3.9375 14.0625"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 14.0625L3.9375 3.9375"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_428_287">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="photo-details-modal--images">
        <PhotoFavButton
          photoFavBtnClicked={photoFavBtnClicked}
          id={id}
          photoIsFavorited={photoIsFavorited}
        />
        <img className="photo-details-modal--image" src={urls.regular} />

        <div className="photo-details-modal--header">
          <span>Similar Photos</span>
        </div>
      </div>
      <div className="photo-details-modal--similar-photos">
        <PhotoList
          showModal={showModal}
          photoFavBtnClicked={photoFavBtnClicked}
          favPhotoList={favPhotoList}
          mockPhotos={Object.values(similar_photos)}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;