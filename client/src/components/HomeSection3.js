import React from 'react';
//Styled
import styled from 'styled-components';
// Wave SVG
import wave from '../img/wave.svg';
// Social M. Icons
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
// Framer m
import { motion } from 'framer-motion';
// Animation
import { homeScroll2 } from '../animation';
// scroll animation hook
import { useScroll } from './useScroll';

const HomeSection3 = () => {
	const [element, controls] = useScroll();
	return (
		<BgDiv>
			<Bg2Div>
				<p className="title">Who are we?</p>
				<Cont ref={element} variants={homeScroll2} animate={controls}>
					<div>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
							dolore sequi quos maiores impedit consequatur obcaecati quas porro
							deserunt quasi ipsa qui explicabo aperiam deleniti doloribus
							reiciendis, nihil, expedita quaerat ab architecto omnis similique?
							Blanditiis incidunt asperiores ipsum, earum ullam expedita eos.
						</p>
					</div>
					<div className="second">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
							dolore sequi quos maiores impedit consequatur obcaecati quas porro
							deserunt quasi ipsa qui explicabo aperiam deleniti doloribus
							reiciendis, nihil, expedita quaerat ab architecto omnis similique?
							Blanditiis incidunt asperiores ipsum, earum ullam expedita eos.
						</p>
					</div>
					<div className="third">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
							dolore sequi quos maiores impedit consequatur obcaecati quas porro
							deserunt quasi ipsa qui explicabo aperiam deleniti doloribus
							reiciendis, nihil, expedita quaerat ab architecto omnis similique?
							Blanditiis incidunt asperiores ipsum, earum ullam expedita eos.
						</p>
					</div>
				</Cont>
				<img className="wave" src={wave} alt="wave" />
			</Bg2Div>
			<StyledFoot>
				<div>
					<FaFacebookF size="25" />
				</div>
				<div>
					<FaInstagram size="25" />
				</div>
				<div>
					<FaTwitter size="25" />
				</div>
			</StyledFoot>
		</BgDiv>
	);
};

const BgDiv = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: #fbf2ed;
`;

const Bg2Div = styled.div`
	width: 100%;
	min-height: 92vh;
	background: linear-gradient(#89a09d, #92baaf);
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fbf2ed;
	position: relative;
	.title {
		font-family: 'Montserrat', sans-serif;
		font-size: 2rem;
		margin: 3rem 0rem;
		@media (max-width: 568px) {
			font-size: 1.5rem;
			margin: 1.5rem 0rem;
		}
	}
	img {
		position: absolute;
		top: 35%;
		z-index: 1;
		@media (max-width: 568px) {
			display: none;
		}
	}
`;

const Cont = styled(motion.div)`
	width: 90%;
	height: 65vh;
	display: flex;
	justify-content: space-between;
	z-index: 10;
	@media (max-width: 568px) {
		flex-direction: column;
	}
	div {
		width: 26%;
		height: 70%;
		@media (max-width: 568px) {
			width: 100%;
			height: 100%;
		}
	}
	div:nth-of-type(2) {
		align-self: center;
	}
	div:nth-of-type(3) {
		align-self: flex-end;
	}
	p {
		line-height: 2.2rem;
		font-size: 1.3rem;
		font-weight: lighter;
		width: 100%;
		height: 100%;
		z-index: 10;
		@media (max-width: 568px) {
			font-size: 1rem;
			line-height: 1.5rem;
			margin: 1rem 0rem;
		}
	}
`;

const StyledFoot = styled.div`
	margin: auto;
	height: 8vh;
	width: 20%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 568px) {
		width: 50%;
	}
	div {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: rgba(106, 99, 80, 0.65);
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fbf2ed;
		cursor: pointer;
		transition: all 0.3s ease;
		&:active {
			transform: scale(0.9);
		}
		@media (max-width: 568px) {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
`;

export default HomeSection3;
