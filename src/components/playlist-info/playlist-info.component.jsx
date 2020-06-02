import React from "react";

import { connect } from "react-redux";
import axios from "axios";

import {
	Container,
	DivLeft,
	// DivRight,
	PlayLogo,
	PlayInfo,
	PlayH1,
	PlayH2,
	DivRight,
	MakePlaylist
} from "./playlist-info.styles";

class PlaylistInfo extends React.Component {
	render() {
		const { display_name } = this.props.currentUser;

		const addPlaylist = () => {
			let trackUris = this.props.spotifyUris.spotifySongUris
				? this.props.spotifyUris.spotifySongUris.map(track => track.uri)
				: 0;
			if (trackUris === 0) {
				window.alert("Playlist hasn't populated yet.");
			}
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
			if (this.props.spotifyUris.spotifySongUris) {
				axios
					.post(
						`https://api.spotify.com/v1/users/${this.props.currentUser.id}/playlists`,
						playlistName,
						config
					)
					.then(res => {
						axios.post(
							`https://api.spotify.com/v1/playlists/${res.data.id}/tracks`,
							{ uris: trackUris },
							config
						);
					});
			}

			console.log("playlistinfo props", trackUris);
		};

		return (
			<Container id="playInfoLD">
				<DivLeft>
					<PlayLogo className="playLogo" />
					<PlayInfo>
						<PlayH1
							className="playH1"
							style={{
								fontSize: 24,
								paddingTop: 30,
								paddingBottom: 0,
								marginLeft: 15
							}}
						>
							{`${display_name}'s Sound Drip Playlist`}
						</PlayH1>
						<div className="playH2" style={{ display: "flex" }}>
							<div className="playlisticon" />
							<PlayH2>20 Songs</PlayH2>
						</div>
					</PlayInfo>
				</DivLeft>
				<DivRight>
					<MakePlaylist onClick={addPlaylist}>Add This PlayList!</MakePlaylist>
				</DivRight>
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	currentUser: state.currentUser.currentUser,
	spotifyUris: state.spotifyUris
});

export default connect(mapStateToProps, {})(PlaylistInfo);
