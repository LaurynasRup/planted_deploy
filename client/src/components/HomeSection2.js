import React from 'react';
// Styled
import styled from 'styled-components';
// Import images
import aloe from '../img/sprout.svg';
import quality from '../img/quality.svg';
import box from '../img/box.svg';
// Framer m
import { motion } from 'framer-motion';
// Animation
import { homeScroll } from '../animation';
// scroll animation hook
import { useScroll } from './useScroll';

const HomeSection2 = () => {
	const [element, controls] = useScroll();
	return (
		<Home2>
			<p className="head">Why choose Planted?</p>
			<StyledCont ref={element} variants={homeScroll} animate={controls}>
				<Home2Element text={'Extensive selection of'} img={aloe} />
				<Home2Element text={'Ethically sourced plants'} img={quality} />
				<Home2Element text={'Delivered to your doorstep'} img={box} />
			</StyledCont>
		</Home2>
	);
};

// Local Comp.
const Home2Element = ({ text, img }) => {
	return (
		<StyledEl>
			<p className="subhead">{text}</p>
			<img src={img} alt="service-logo" />
		</StyledEl>
	);
};

const Home2 = styled.div`
	width: 100%;
	min-height: 40vh;
	background: #fbf2ed;
	padding: 3rem 10rem;
	color: #6a6350;
	display: flex;
	font-weight: lighter;
	flex-direction: column;
	align-items: center;
	@media (max-width: 568px) {
		padding: 1rem 2rem;
	}
	.head {
		font-size: 2rem;
		font-family: 'Montserrat', sans-serif;
		margin-bottom: 4rem;
		@media (max-width: 568px) {
			font-size: 1.5rem;
			margin-bottom: 3rem;
		}
	}
`;

const StyledCont = styled(motion.div)`
	width: 90%;
	display: flex;
	justify-content: space-between;
	@media (max-width: 568px) {
		width: 100%;
	}
`;

const StyledEl = styled.div`
	font-size: 1.4rem;
	text-align: center;
	width: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 568px) {
		width: 100px;
	}

	p {
		margin-bottom: 2rem;
		@media (max-width: 568px) {
			font-size: 0.9rem;
		}
	}

	img {
		width: 6rem;
		height: 6rem;
		@media (max-width: 568px) {
			width: 4rem;
			height: 4rem;
		}
	}
`;

export default HomeSection2;
