import React from 'react';
// Styled
import styled from 'styled-components';
// Framer m.
import { motion } from 'framer-motion';
// Animation
import { btnFade } from '../animation';

const Button = (props) => {
	return (
		<Btn variants={btnFade} initial="hidden" animate="show" className="btn">
			{props.children}
		</Btn>
	);
};

const Btn = styled(motion.div)`
	padding: 0.2rem 0.8rem;
	border-radius: 2rem;
	border: solid 1px #6a6350;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: lighter;
	background: #fbf2ed;
	color: #6a6350;
	width: 20rem;
	margin-top: 14rem;
	cursor: pointer;
	box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.3);
	transition: all 0.2s ease;
	@media (max-width: 800px) {
		margin-top: 0rem;
	}
	&:hover {
		background: #646158;
		color: #fbf2ed;
	}
	&:active {
		transform: scale(0.98);
	}
`;

export default Button;
