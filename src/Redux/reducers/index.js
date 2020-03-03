import { combineReducers } from "redux";
import getUserReducer from "./userReducer";
import likedSongsReducer from "./likedSongsReducer";
import getTrackInfoReducer from "./getTrackInfoReducer";
import currentSongReducer from "./getCurrentSongReducer";
import queueReducer from "./queueReducer";
import createPlaylistReducer from "./createPlaylistReducer";
import getPlaylistReducer from "./getPlaylistReducer";
import getCurrentUserReducer from "./getCurrentUserReducer";
import addToPlaylistReducer from "./addToPlaylistReducer";
import removeTrackReducer from "./removeTrackReducer";

export default combineReducers({
  getUserReducer,
  likedSongsReducer,
  getTrackInfoReducer,
  currentSongReducer,
  queueReducer,
  createPlaylistReducer,
  getPlaylistReducer,
  getCurrentUserReducer,
  addToPlaylistReducer,
  removeTrackReducer
});

