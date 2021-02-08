import React, { useState } from 'react';
// Styled C.
import styled from 'styled-components';
// Components
import PlantsFilter from '../components/PlantsFilter';
import PlantCard from '../components/PlantCard';
// Utils
import { plants } from '../util';
// Functions
import { filterItems, minMax } from '../functions';

const PlantsSection = ({ basket, setBasket, setModalOpen }) => {
	// State for all plants
	const allPlants = [...plants];
	// Filter settings
	const [plantFilter, setPlantFilter] = useState({
		search: '',
		range: minMax(allPlants),
		sort: 0,
	});

	const filteredPlants = filterItems(allPlants, plantFilter, plants);

	return (
		<BGDiv>
			<MainDiv>
				<p className="head">Our Plants</p>
				<div className="line"></div>
				<PlantsFilter
					plantFilter={plantFilter}
					setPlantFilter={setPlantFilter}
				/>
				<CardCont number={filteredPlants} className="card-cont">
					{filteredPlants.map((plant) => (
						<PlantCard
							setModalOpen={setModalOpen}
							plant={plant}
							basket={basket}
							setBasket={setBasket}
							image={plant.image}
							name={plant.name}
							latin={plant.latinName}
							price={plant.price[0]}
							key={plant.id}
						/>
					))}
				</CardCont>
			</MainDiv>
		</BGDiv>
	);
};

const BGDiv = styled.div`
	margin-top: 9vh;
	height: 91vh;
	background: transparent;
	overflow: scroll;
`;

const MainDiv = styled.div`
	padding: 5rem;
	@media (max-width: 568px) {
		padding: 2rem;
		margin-top: 2rem;
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
		width: 15rem;
		border-radius: 0.2rem;
		background: #6a6350;
	}
`;

const CardCont = styled.div`
	min-height: 80vh;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-template-columns: ${(props) =>
		props.number.length >= 4
			? 'repeat(auto-fit, minmax(250px, 1fr))'
			: 'repeat(4, 300px)'};
	grid-column-gap: 1rem;
	grid-row-gap: 1rem;
	@media (max-width: 568px) {
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	}
`;

export default PlantsSection;
