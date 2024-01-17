import React from "react";

import "styles/TopNavigationBar.scss";
import TopicList from "components/TopicList";

const TopNavigation = (props) => {
  const { favPhotoList, topics, getTopicPhotos } = props;
  return (
    <>
      <div className="top-nav-bar">
        <span className="top-nav-bar--logo">PhotoLabs</span>
        <TopicList
          favPhotoList={favPhotoList}
          topics={topics}
          getTopicPhotos={getTopicPhotos}
        />
      </div>
    </>
  );
};

export default TopNavigation;