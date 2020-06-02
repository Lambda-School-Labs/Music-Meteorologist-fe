import React from "react";
import "./navbar.css";
import MusicLogo from "../../../assets/sounddrip.svg";
import { connect } from "react-redux";

import MenuListComposition from "../../dropdown-menu/dropdown.component";

import {
	Nav1,
	NavContainer,
	Logo1,
	Navname,
	Relog
} from "./dashboard-nav.styles";

import { scopes } from "../../../utils/spotifyScopes";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "256aebf9b04a4f5480a757f770864028";
const redirectUri = process.env.REACT_APP_REDIRECT_URL;

class NavBar extends React.Component {
	homeButton = e => {
		e.preventDefault();
		window.location.href = "/";
	};
	render() {
		const { currentUser } = this.props;
		return (
			<Nav1>
				<NavContainer>
					<Logo1
						src={MusicLogo}
						alt={"Navbar logo"}
						onClick={e => {
							this.homeButton(e);
						}}
					></Logo1>
					<Navname>
						{currentUser.display_name ? (
							currentUser.display_name
						) : (
							<Relog
								as="a"
								href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${encodeURIComponent(
									scopes
								)}&response_type=token&show_dialog=true`}
							>
								Login
							</Relog>
						)}
						<MenuListComposition
							navBarProps={this.props.musicPlayerProps}
							userName={this.props.userName}
							deviceId={this.props.deviceId}
						/>
					</Navname>
				</NavContainer>
			</Nav1>
		);
	}
}
const mapStateToProps = state => ({
	currentUser: state.currentUser.currentUser
});

export default connect(mapStateToProps)(NavBar);
