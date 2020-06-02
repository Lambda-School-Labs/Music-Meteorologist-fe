import React, { useState } from "react";
import { audioDetailsText } from "./audioDetailsText";
import { Grid, Paper, List } from "@material-ui/core";
import Chart from "../chart/chart.component";
import { AudioDetailsContainer } from "./audio-details.styles";
import { connect } from "react-redux";
import AudioDetailsText from "./audio-details-text.component";

const AudioDetails = () => {
	const [collapse, setCollapse] = useState(false);

	const openAudioDetails = () => {
		setCollapse(!collapse);
	};

	return (
		<AudioDetailsContainer className="scroll">
			<div className="audioDiv">
				<div
					id="sideBarLD2"
					href="#"
					onClick={() => openAudioDetails()}
					style={{
						color: "white",
						marginTop: 8,
						marginRight: 75,
						fontSize: 12
					}}
				>
					What does this mean?
				</div>
			</div>
			<List className="scroll">
				<Paper
					className={
						collapse
							? "audio-details-open scroll"
							: "audio-details-closed scroll"
					}
					style={{
						maxHeight: "45vh",
						width: 377,
						overflow: "auto",
						backgroundColor: "#1E2024",
						color: "lightgray"
					}}
				>
					<div className="scroll">
						{audioDetailsText.map(({ name, description }, idx) => (
							<AudioDetailsText
								key={idx}
								name={name}
								description={description}
							></AudioDetailsText>
						))}
					</div>
				</Paper>
			</List>
			<Grid item>
				<Chart />
				<div style={{ textAlign: "center", marginTop: "10px" }}></div>
			</Grid>
		</AudioDetailsContainer>
	);
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AudioDetails);
