import React, { useState } from 'react';
// Components
import BasketSection from '../components/BasketSection';
import BasketModal from '../components/BasketModal';
import BasketModalConf from '../components/BasketModalConf';
// Motion
import { motion, AnimatePresence } from 'framer-motion';
// Animation
import { pageAnim } from '../animation';

const Basket = ({ basket, setBasket }) => {
	// State for basket modal
	const [basketModalForm, setBasketModalForm] = useState(false);
	const [basketModalConf, setBasketModalConf] = useState(false);
	// Initial user details
	const [userDetails, setUserDetails] = useState({
		fname: '',
		lname: '',
		email: '',
		phone: '',
		address1: '',
		address2: '',
		town: '',
		pcode: '',
		country: '',
		cardName: '',
		cardNum: '',
		cardExp1: '',
		cardExp2: '',
		ccv: '',
	});
	return (
		<>
			<motion.div
				variants={pageAnim}
				initial="hidden"
				animate="show"
				exit="exit"
			>
				<BasketSection
					basket={basket}
					setBasket={setBasket}
					setBasketModalForm={setBasketModalForm}
				/>
			</motion.div>
			<AnimatePresence>
				{basketModalForm && (
					<BasketModal
						setBasketModalForm={setBasketModalForm}
						setBasketModalConf={setBasketModalConf}
						userDetails={userDetails}
						setUserDetails={setUserDetails}
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{basketModalConf && (
					<BasketModalConf
						basket={basket}
						setBasket={setBasket}
						setBasketModalConf={setBasketModalConf}
						setBasketModalForm={setBasketModalForm}
						userDetails={userDetails}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Basket;
