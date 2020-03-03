import SpotifyActionTypes from '../Spotify/spotify.types'

const initialState = {
  fetchingUser: false,
  fetchingUserError: '',
  spotifyUser: [],
  fetchingSpotifyUser: false,
  fetchingSpotifyUserError: '',
};

const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SpotifyActionTypes.GET_USER_FETCHING:
      return {
        ...state,
        fetchingUser: true,
        fetchingUserError: '',
      };
    case SpotifyActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        fetchingUserError: '',
      };
    case SpotifyActionTypes.GET_USER_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        fetchingUserError: action.payload,
      };
    case SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FETCHING:
      return {
        ...state,
        fetchingSpotifyUser: true,
        fetchingSpotifyUserError: '',
      };
    case SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_SUCCESS:
      return {
        ...state,
        spotifyUser: action.payload,
        fetchingSpotifyUser: false,
        fetchingSpotifyUserError: '',
      };
    case SpotifyActionTypes.GET_SPOTIFY_PRIVATE_ACCOUNT_DETAILS_FAILURE:
      return {
        ...state,
        fetchingSpotifyUser: false,
        fetchingSpotifyUserError: action.payload,
      };
    case SpotifyActionTypes.PERSIST_USER_FETCHING:
      return {
        ...state,
      };
    case SpotifyActionTypes.PERSIST_USER_SUCCESS:
      return {
        ...state,
      };
    case SpotifyActionTypes.PERSIST_USER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default getUserReducer;
