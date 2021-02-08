import React, { useState } from 'react';
// Import Components
import PlantsSection from '../components/PlantsSection';
import PlantModal from '../components/PlantModal';
// Motion
import { motion, AnimatePresence } from 'framer-motion';
// Animation
import { pageAnim } from '../animation';

const Plants = ({ basket, setBasket }) => {
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
				<PlantsSection
					basket={basket}
					setBasket={setBasket}
					setModalOpen={setModalOpen}
				/>
			</motion.div>
			<AnimatePresence>
				{modalOpen[0] && (
					<PlantModal
						setModalOpen={setModalOpen}
						modalOpen={modalOpen}
						basket={basket}
						setBasket={setBasket}
					/>
				)}
			</AnimatePresence>
		</>
	);
};

export default Plants;
