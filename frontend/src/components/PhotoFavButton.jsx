import React, { useCallback, useEffect, useState } from "react";

import { FavIcon } from "./FavIcon";
import "styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { id, favPhotoList, dispatch, user, photoFavBtnClicked, photoIsFavorited } = props;

  const handleIsFavorited = useCallback(() => {
    photoFavBtnClicked(id)
  })

  return (
    <div className="photo-list--fav-icon" onClick={handleIsFavorited}>
      <div className="photo-list--fav-icon-svg">
        <FavIcon
          width={22}
          height={30}
          fill={photoIsFavorited ? "red" : ""}
          outlineWidth={1}
          stroke={photoIsFavorited ? "" : "red"}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;