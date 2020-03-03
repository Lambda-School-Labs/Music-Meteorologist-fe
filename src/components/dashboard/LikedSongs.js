import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import {
  getlikedSongs,
  getUsers,
  getPlaylist
} from "../../Redux/Spotify/spotify.actions";
import Song from "./Song.js";

import axios from "axios";

class LikedSongs extends React.Component {
  state = {
    getList: false
  };
  componentDidMount() {
    this.props.getUsers();
  }

  componentDidUpdate() {
    if (this.props.addedTo && this.state.getList && this.props.playlistId) {
      this.props.getPlaylist(this.props.playlistId);

      if (this.props.playlistId) {
        this.setState({
          getList: true
        });
      }
    }
  }

  playSong = (trackUris, songUri) => {
    let songIndex = null;
    for (let i = 0; i < trackUris.length; i++) {
      if (trackUris[i] === songUri) {
        songIndex = i;
        break;
      }
    }

    const newPlaylist = trackUris
      .slice(songIndex)
      .concat(trackUris.slice(0, songIndex));

    axios.put(
      `https://api.spotify.com/v1/me/player/play?device_id=${this.props.deviceId}`,
      {
        uris: newPlaylist
      },
      {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      }
    );
  };

  render() {
    const { several_tracks, deviceId, fetchingLikedSongs } = this.props;

    if (fetchingLikedSongs) {
      return <h1>Loading...</h1>;
    }
    return (
      <Grid container>
        <Grid id="songLD" item>
          {several_tracks.tracks ? (
            several_tracks.tracks.map(song => (
              <Song
                song={song}
                id={song.id}
                key={song.id}
                deviceId={deviceId}
                tracks={several_tracks.tracks.map(track => track.uri)}
                playSong={this.playSong}
              />
            ))
          ) : (
              <h1>Loading...</h1>
            )}
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  currentSong: state.currentSongReducer.item,
  spotifyUser: state.getUserReducer.spotifyUser,
  several_tracks: state.queueReducer.several_tracks,
  playlistTracks: state.getPlaylistReducer,
  playlistId: state.createPlaylistReducer,
  playlistCreated: state.createPlaylistReducer.playlistCreated,
  addedTo: state.addToPlaylistReducer.addedTo
});

export default connect(mapStateToProps, {
  getlikedSongs,
  getUsers,
  getPlaylist
})(LikedSongs);
