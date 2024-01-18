export const PHOTO_LIKE_BTN_CLICK = "PHOTO_LIKE_BTN_CLICK";
export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
export const GET_TOPIC_PHOTOS = "GET_TOPIC_PHOTOS";

const setApplicationData = (state, action) => {
  if (action.type === "SET_APPLICATION_DATA") {
    const { topics, photos } = action.payload;
    state = {
      ...state,
      topics,
      photos,
    };
    return state;
  }
  return state;
};

const addPhotoToFavorite = (state, action) => {
  if (action.type === "PHOTO_LIKE_BTN_CLICK") {
    const { payload } = action;
    if (state.favPhotoList.includes(payload)) {
      const updateFavPhotoList = state.favPhotoList.filter(
        (item) => item !== payload
      );
      state = { ...state, favPhotoList: updateFavPhotoList };
    } else {
      state = { ...state, favPhotoList: [...state.favPhotoList, payload] };
    }
    return state;
  }
  return state;
};

const openModal = (state, action) => {
  if (action.type === "SHOW_MODAL") {
    const { payload } = action;
    const singlePhotoDetails = state.photos.find((item) => item.id === payload);
    state = {
      ...state,
      isModalOpen: true,
      modalPhotoDetails: singlePhotoDetails,
    };
  }
  return state;
};

const closeModal = (state, action) => {
  if (action.type === "CLOSE_MODAL") {
    state = {
      ...state,
      isModalOpen: !state.isModalOpen,
      modalPhotoDetails: null,
    };
  }
  return state;
};

const fetchTopicPhotos = (state, action) => {
  if (action.type === "GET_TOPIC_PHOTOS") {
    const { payload } = action;
    state = {
      ...state,
      photos: payload,
    };
    return state;
  }
  return state;
};

export const reducers = {
  [PHOTO_LIKE_BTN_CLICK]: addPhotoToFavorite,
  [SHOW_MODAL]: openModal,
  [CLOSE_MODAL]: closeModal,
  [SET_APPLICATION_DATA]: setApplicationData,
  [GET_TOPIC_PHOTOS]: fetchTopicPhotos,
};

export default function useReducer(state, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  }
  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}