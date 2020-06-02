import styled from "styled-components";

export const Nav1 = styled.div`
	background: #0e0f11;
	width: 100vw;
	height: 84px;
`;

export const Logo1 = styled.img`
	height: 50px;
	margin-left: 105px;
	margin-top: 20px;

	@media (max-width: 600px) {
		margin-left: 10px;
	}
`;

export const Navname = styled.div`
	margin-right: 50px;
	margin-top: 31px;
	font-family: Work Sans;
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 21px;
	display: flex;
	align-items: center;

	@media (max-width: 600px) {
		margin-right: 20px;
		margin-top: 43px;
	}
`;

export const NavContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	@media (max-width: 600px) {
		width: 100vw;
	}
`;

export const Relog = styled.button`
	background-color: #e20351;
	padding: 3px;
	color: white;
	text-decoration: none;
	border-radius: 5px;
`;
