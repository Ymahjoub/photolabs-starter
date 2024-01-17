import { useReducer } from "react";

import reducer, {
  PHOTO_LIKE_BTN_CLICK,
  SHOW_MODAL,
  CLOSE_MODAL,
  SET_APPLICATION_DATA,
  GET_TOPIC_PHOTOS
} from "reducers/photoReducer";

export default function useApplicationData() {
  const defaultState = {
    isModalOpen: false,
    modalPhotoDetails: null,
    topics: [],
    photos: [],
    favPhotoList: [],
  };



  const [state, dispatch] = useReducer(reducer, defaultState);

  const photoFavBtnClicked = (id) => {
    dispatch({ type: PHOTO_LIKE_BTN_CLICK, payload: id });
  };

  const showModal = (id) => {
    dispatch({ type: SHOW_MODAL, payload: id });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const setAppData = (topics, photos) => {
    dispatch({ type: SET_APPLICATION_DATA, payload: { topics, photos } });
  }

  const getTopicPhotos = (id) => {
    dispatch({ type: GET_TOPIC_PHOTOS, payload: id })
  }

  return {
    state,
    photoFavBtnClicked,
    showModal,
    closeModal,
    setAppData,
    getTopicPhotos
  };
}