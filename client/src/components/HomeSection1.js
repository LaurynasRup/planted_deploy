import React from 'react';
// Styled C.
import styled from 'styled-components';
// Bg Image
import BG from '../img/BG.jpg';
// Components
import Button from './Button';
// Router
import { Link } from 'react-router-dom';
// Motion
import { motion } from 'framer-motion';
// Animation
import { headderSlide } from '../animation';

const HomeSection1 = () => {
	return (
		<Home1 className="home1">
			<motion.div
				className="text-cont"
				variants={headderSlide}
				initial="hidden"
				animate="show"
			>
				<motion.div className="head" variants={headderSlide}>
					<p>Bring nature to your</p>
					<p className="home">Home</p>
				</motion.div>
				<motion.div className="subHead" variants={headderSlide}>
					<p>
						Plants delivered to <span className="you">you</span>
					</p>
					<p>for any occasion...</p>
				</motion.div>
			</motion.div>
			<Link to="/plants">
				<Button>See our plants</Button>
			</Link>
		</Home1>
	);
};

const Home1 = styled.div`
	overflow-x: hidden;
	padding: 5rem;
	width: 100%;
	min-height: 100vh;
	background-image: url(${BG});
	color: #eee3db;
	@media (max-width: 800px) {
		padding: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.head {
		font-size: 3.5rem;
		margin-top: 8rem;
		line-height: 3.8rem;
		.home {
			color: #6a6350;
		}
	}
	.subHead {
		font-size: 2rem;
		margin-top: 2rem;
		font-weight: lighter;
		.you {
			color: #6a6350;
		}
	}
`;

export default HomeSection1;
