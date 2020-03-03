import SpotifyActionTypes from "../Spotify/spotify.types";

const initialState = {
  trackFetching: null,
  trackFetched: null,
  err: null
};

const getTrackInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_TRACK_INFO_FETCHING:
      return {
        ...state,
        trackFetching: true
      };
    case SpotifyActionTypes.GET_TRACK_INFO_SUCCESS:
      return {
        ...state,
        ...action.payload,
        trackFetching: false,
        trackFetched: true
      };
    case SpotifyActionTypes.GET_TRACK_INFO_FAILURE:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};

export default getTrackInfoReducer;

