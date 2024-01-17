import React, { useMemo } from "react";

import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = (props) => {

  const {
    id,
    user,
    urls,
    location,
    favPhotoList,
    photoFavBtnClicked,
    showModal,
  } = props;

  const photoIsFavorited = useMemo(() => {
    if (favPhotoList.includes(id)) return true
    return false
  }, [favPhotoList, id]);

  return (
    <>
      <li className="photo-list--item">
        <PhotoFavButton
          id={id}
          user={user}
          favPhotoList={favPhotoList}
          photoFavBtnClicked={photoFavBtnClicked}
          photoIsFavorited={photoIsFavorited}
        />
        <img
          src={urls.regular}
          className={"photo-list--image"}
          onClick={() => showModal(id)}
        />
        <div className="photo-list--user-details">
          <img className="photo-list--user-profile" src={user.profile} />
          <div className="photo-list--user-info">
            <span className="photo-list--username">{user.username}</span>
            <br />
            <span className="photo-list--user-location">{`${location.city}, ${location.country}`}</span>
          </div>
        </div>
      </li>
    </>
  );
};

PhotoListItem.defaultProps = {
  username: "Jacob",
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;
