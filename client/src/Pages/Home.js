import React from 'react';
// Import Section 1
import HomeSection1 from '../components/HomeSection1';
import HomeSection2 from '../components/HomeSection2';
import HomeSection3 from '../components/HomeSection3';
import { useLastLocation } from 'react-router-last-location';
// Motion
import { motion } from 'framer-motion';
// Animation
import { homeAnim } from '../animation';

const Home = () => {
	// last location
	const lastLocation = useLastLocation();
	const lastPath = lastLocation ? lastLocation.pathname : null;
	return (
		<motion.div
			variants={homeAnim}
			initial={lastPath !== null ? 'hidden' : false}
			animate="show"
			exit="exit"
		>
			<HomeSection1 />
			<HomeSection2 />
			<HomeSection3 />
		</motion.div>
	);
};

export default Home;
