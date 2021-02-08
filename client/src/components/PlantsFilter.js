import React, { useState } from 'react';
// Styled
import styled from 'styled-components';
// Icons
import { GoSearch } from 'react-icons/go';
import { VscChevronDown } from 'react-icons/vsc';
// Components
import { CustomSlider } from './CustomSlider';

const PlantsFilter = ({ plantFilter, setPlantFilter }) => {
	const [priceRange, setPriceRange] = useState({
		min: plantFilter.range[0],
		max: plantFilter.range[1],
		rangeMin: plantFilter.range[0],
		rangeMax: plantFilter.range[1],
	});
	const searchHandler = (e) => {
		const input = e.target.value;
		setPlantFilter({ ...plantFilter, search: input });
	};
	const sortHandler = (e) => {
		const value = e.target.value;
		setPlantFilter({ ...plantFilter, sort: value });
	};

	return (
		<>
			<SearchCont>
				<SearchOuter>
					<SearchInput
						type="text"
						placeholder="Search"
						onChange={searchHandler}
						value={plantFilter.search}
					/>
					<StyledSearchIcon />
				</SearchOuter>
				<RangeDiv>
					<p className="price">Price</p>
					<p className="min-price">£{priceRange.rangeMin}</p>
					<CustomSlider
						setPriceRange={setPriceRange}
						priceRange={priceRange}
						plantFilter={plantFilter}
						setPlantFilter={setPlantFilter}
					/>
					<p className="max-price">£{priceRange.rangeMax}</p>
				</RangeDiv>
				<SearchOuter>
					<StyledSelect name="filter" onChange={sortHandler}>
						<option value="recommended">Recommended</option>
						<option value="a-z">Name: A - Z</option>
						<option value="z-a">Name: Z - A</option>
						<option value="low-high">Price: Low - High</option>
						<option value="high-low">Price: High - Low</option>
					</StyledSelect>
					<StyledSelectIcon />
				</SearchOuter>
			</SearchCont>
			<Line></Line>
		</>
	);
};

const SearchCont = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 568px) {
		flex-direction: column;
		margin: 1.5rem 0rem;
	}
	p {
		font-size: 0.5rem;
	}
`;

const SearchOuter = styled.span`
	width: 13rem;
	position: relative;
	z-index: 10;
	@media (max-width: 568px) {
		width: 90%;
	}
`;

const SearchInput = styled.input`
	border-radius: 2rem;
	border: solid 1px #6a6350;
	font-size: 1rem;
	padding: 0.3rem 1.5rem;
	width: 100%;
	font-family: 'Open-sans', sans-serif;
	font-weight: lighter;
	@media (max-width: 568px) {
		flex-direction: column;
	}
	&:focus {
		outline: none;
	}
`;

const RangeDiv = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: 568px) {
		width: 80%;
	}
	.price {
		font-size: 1.2rem;
		font-weight: lighter;
		color: #6a6350;
		margin-right: 1.5rem;
		@media (max-width: 568px) {
			display: none;
		}
	}
	.min-price {
		font-size: 0.8rem;
		font-weight: lighter;
		color: #6a6350;
		width: 3.2rem;
		@media (max-width: 568px) {
			width: 2rem;
			margin-right: 1rem;
		}
	}
	.max-price {
		font-size: 0.8rem;
		font-weight: lighter;
		color: #6a6350;
		width: 3.4rem;
		text-align: right;
		@media (max-width: 568px) {
			width: 2rem;
			margin-left: 1rem;
		}
	}
`;

const Line = styled.div`
	height: 0.1rem;
	width: 100%;
	background: #6a6350;
	margin: 0.1rem 0rem 2.5rem 0rem;
	z-index: 1;
`;

const StyledSearchIcon = styled(GoSearch)`
	position: absolute;
	top: 52%;
	right: 8%;
	transform: translateY(-50%);
	color: #6a6350;
	pointer-events: none;
`;

const StyledSelectIcon = styled(VscChevronDown)`
	position: absolute;
	top: 52%;
	right: 8%;
	transform: translateY(-50%);
	color: #6a6350;
	pointer-events: none;
`;

const StyledSelect = styled.select`
	border-radius: 2rem;
	border: solid 1px #6a6350;
	font-size: 1rem;
	padding: 0.3rem 1.5rem;
	width: 100%;
	font-family: 'Open-sans', sans-serif;
	font-weight: lighter;
	color: #6a6350;
	-webkit-appearance: none;
	-moz-appearance: none;
	text-indent: 1px;
	text-overflow: '';
	&:focus {
		outline: none;
	}
`;

export default PlantsFilter;
