import React, { useState } from 'react';
// Styled
import styled from 'styled-components';
// Components
import PlantsFilter from '../components/PlantsFilter';
import GiftCard from '../components/GiftCard';
// Utils
import { gifts } from '../util';
// Functions
import { filterItems, minMax } from '../functions';

const GiftSection = ({ basket, setBasket, setModalOpen }) => {
	// Grab all gifts
	const allGifts = [...gifts];
	// Filter settings
	const [giftFilter, setGiftFilter] = useState({
		search: '',
		range: minMax(allGifts),
		sort: 0,
	});

	const filteredGifts = filterItems(allGifts, giftFilter, gifts);

	return (
		<MainCont>
			<p className="head">Gifts & Accesories</p>
			<div className="line"></div>
			<PlantsFilter plantFilter={giftFilter} setPlantFilter={setGiftFilter} />
			<CardCont number={filteredGifts}>
				{filteredGifts.map((gift) => (
					<GiftCard
						image={gift.image}
						name={gift.name}
						price={gift.price[0]}
						gift={gift}
						key={gift.id}
						basket={basket}
						setBasket={setBasket}
						setModalOpen={setModalOpen}
					/>
				))}
			</CardCont>
		</MainCont>
	);
};

const MainCont = styled.div`
	margin-top: 9vh;
	height: 91vh;
	background: transparent;
	overflow: scroll;
	padding: 5rem;
	@media (max-width: 568px) {
		padding: 4rem 2rem 2rem;
		/* margin-top: 6rem; */
	}
	.head {
		font-size: 2.5rem;
		color: #6a6350;
		@media (max-width: 568px) {
			font-size: 1.5rem;
		}
	}
	.line {
		height: 0.2rem;
		width: 25rem;
		border-radius: 0.2rem;
		background: #6a6350;
		@media (max-width: 568px) {
			width: 15rem;
		}
	}
	}
`;

const CardCont = styled.div`
	min-height: 80vh;
	display: grid;
	grid-template-columns: ${(props) =>
		props.number.length >= 4
			? 'repeat(auto-fit, minmax(250px, 1fr))'
			: 'repeat(4, 300px)'};
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
`;

export default GiftSection;
