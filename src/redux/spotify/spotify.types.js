const SpotifyActionTypes = {
  // get spotify songs using data retrieved from GET_DS_SONGS
  GET_SPOTIFY_SONGS_FETCHING: "GET_SPOTIFY_SONGS_FETCHING",
  GET_SPOTIFY_SONGS_SUCCESS: "GET_SPOTIFY_SONGS_SUCCESS",
  GET_SPOTIFY_SONGS_FAILURE: "GET_SPOTIFY_SONGS_FAILURE",
  GET_SPOTIFY_USER_FETCHING: "GET_SPOTIFY_USER_FETCHING",
  GET_SPOTIFY_USER_SUCCESS: "GET_SPOTIFY_USER_SUCCESS",
  GET_SPOTIFY_USER_FAILURE: "GET_SPOTIFY_USER_FAILURE",
  GET_CURRENT_SONG_FETCHING: "GET_CURRENT_SONG_FETCHING",
  GET_CURRENT_SONG_SUCCESS: "GET_CURRENT_SONG_SUCCESS",
  GET_CURRENT_SONG_FAILURE: "GET_CURRENT_SONG_FAILURE",
  GET_CHART_INFO_FETCHING: "GET_CHART_INFO_FETCHING",
  GET_CHART_INFO_SUCCESS: "GET_CHART_INFO_SUCCESS",
  GET_CHART_INFO_FAILURE: "GET_CHART_INFO_FAILURE",
  GET_LIKED_STATUS: "GET_LIKED_STATUS",
  SET_LOCAL_TRACK_TIME: "SET_LOCAL_TRACK_TIME"
};

export default SpotifyActionTypes;
