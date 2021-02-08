import React, { useState } from 'react';
// Components
import GiftSection from '../components/GiftSection';
import GiftModal from '../components/GiftMOdal';
// Motion
import { motion, AnimatePresence } from 'framer-motion';
// Animation
import { pageAnim } from '../animation';

const Gifts = ({ basket, setBasket }) => {
	// State to open & close modal
	const [modalOpen, setModalOpen] = useState([false, {}]);
	return (
		<>
			<motion.div
				variants={pageAnim}
				initial="hidden"
				animate="show"
				exit="exit"
			>
				<GiftSection
					basket={basket}
					setBasket={setBasket}
					modalOpen={modalOpen}
					setModalOpen={setModalOpen}
				/>
			</motion.div>
			<AnimatePresence>
				{modalOpen[0] && (
					<GiftModal
						basket={basket}
						setBasket={setBasket}
						modalOpen={modalOpen}
						setModalOpen={setModalOpen}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Gifts;
