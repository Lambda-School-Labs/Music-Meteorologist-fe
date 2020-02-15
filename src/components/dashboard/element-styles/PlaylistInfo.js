import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createPlaylist, getSeveralTracks, addToPlaylist } from '../../../Redux/Spotify/spotify.actions';
import axios from 'axios';

const Container = styled.div`
    height: 175px;
    width: 100%;
    background: #1E2024;
    font-family: Work Sans;
    display: flex;
`;

const DivLeft = styled.div`
    width: 50%;
    height: 80%;
    margin-top: 15px;
`

const DivRight = styled.div`
    width: 50%;
    height: 80%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const MakePlaylist = styled.button`
    color: white;
    background-color: #E20351;
    font-family: Work Sans;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin-right: 45px;
    margin-top: 40px;
    transition: 0.4s ease;
    &:hover {
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 3px 25px rgba(226, 3, 81, .7);
        transition: 0.4s ease;
    }
    &:active {
        transform: scale(.5);
        transition: 0.4s ease;
    }
`

class PlaylistInfo extends React.Component { 

    render() { 
        const addPlaylist = () => { 
            let trackUris = this.props.several_tracks.tracks ? this.props.several_tracks.tracks.map(track => track.uri) : 0
            if (trackUris === 0) { window.alert("Playlist hasn't populated yet.")}
            var config = {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json"
                }
            };
            var playlistName = {
                name: "Sound Drip Playlist",
                description: "A playlist of songs curated by Sound Drip"
            };
            if (this.props.several_tracks.tracks) {
                axios.post(
                    `https://api.spotify.com/v1/users/${this.props.spotifyId}/playlists`,
                    playlistName,
                    config,
                )
                    .then(res => {
                        axios.post(
                            `https://api.spotify.com/v1/playlists/${res.data.id}/tracks`,
                            { uris: trackUris },
                            config,
                        )
                    })
            }

            console.log("playlistinfo props", trackUris)

         }

        console.log("playlistinfo props", this.props)
        return (
            <Container>
                <DivLeft>
                </DivLeft>
                <DivRight>
                    <MakePlaylist onClick={addPlaylist}>Create a Playlist From These Songs!</MakePlaylist>
                </DivRight>
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    several_tracks: state.queueReducer.several_tracks,
    playlistId: state.createPlaylistReducer.playlistId,
  });

  export default connect(
    mapStateToProps,
    { getSeveralTracks, createPlaylist, addToPlaylist },
  )(PlaylistInfo);