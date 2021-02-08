import React, { useState } from 'react';
// Styled
import styled from 'styled-components';
// Icons
import { BsChevronUp, BsChevronDown, BsBag } from 'react-icons/bs';
// Framer m
import { motion } from 'framer-motion';
// Animation
import { modalAnim } from '../animation';

const PlantModal = ({ setModalOpen, modalOpen, basket, setBasket }) => {
	// Count state
	const [basketCount, setBasketCount] = useState(1);
	// Selected size state
	const [size, setSize] = useState('s');
	const sizes = ['s', 'm', 'l'];

	// Set size
	const setSizeHandler = (e) => {
		setSize(e.target.innerText.toLowerCase());
	};
	// Increase decrease count
	const basketCountHandler = (e) => {
		if (e.target.id === 'inc') {
			if (basketCount !== 9) {
				setBasketCount(basketCount + 1);
			}
		} else {
			if (basketCount !== 1) {
				setBasketCount(basketCount - 1);
			}
		}
	};
	// Close modal
	const closeModalHandler = (e) => {
		if (e.target.classList.contains('modal-outer')) {
			setModalOpen([false, {}]);
		}
	};
	// Find Index of selected size
	const sizeIndex = (arr, size) => {
		const index = arr.indexOf(size);
		return index;
	};
	// Add items to basket
	const addToBasketHandler = () => {
		const sizeIndx = sizeIndex(sizes, size);
		// Find item in the baske
		const foundItem = basket.find((item) => item.id === modalOpen[1].id);
		// If no item - add
		if (foundItem === undefined) {
			// Set the count for items at size index
			modalOpen[1].basket[sizeIndx] = basketCount;
			// Update basket state
			setBasket([...basket, modalOpen[1]]);
		} else {
			// if item is found - copy basket
			const newBasket = [...basket];
			// Find selected item in copied basket
			const newFoundItem = newBasket.find(
				(item) => item.id === modalOpen[1].id
			);
			// Add selected count to found item at size index
			newFoundItem.basket[sizeIndx] += basketCount;
			// Update basket
			setBasket(newBasket);
		}
		setBasketCount(1);
	};

	return (
		<StyledModalOuter
			className="modal-outer"
			onClick={closeModalHandler}
			variants={modalAnim}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<StyledModalInner>
				<PlantInfoTop>
					<StyledImg src={modalOpen[1].image} alt="plant" />
					<PlantInfoRight>
						<p className="plant-name">{modalOpen[1].name}</p>
						<p className="latin-name">{modalOpen[1].latinName}</p>
						<p className="size-head">Size:</p>
						<div className="size-cont">
							{sizes.map((el) => (
								<div
									className={`size ${el === size ? 'active' : ''}`}
									onClick={setSizeHandler}
									key={el}
								>
									{el.toUpperCase()}
								</div>
							))}
						</div>
						<p className="price">
							£{modalOpen[1].price[sizeIndex(sizes, size)]}
						</p>
						<button>
							<CountControl>
								<p>{basketCount}</p>
								<div className="count-control">
									<BsChevronUp
										size={12}
										id="inc"
										onClick={basketCountHandler}
									/>
									<BsChevronDown
										size={12}
										id="dec"
										onClick={basketCountHandler}
									/>
								</div>
							</CountControl>
							<span onClick={addToBasketHandler}>
								<p>Add to basket</p>
								<BsBag size={14} />
							</span>
						</button>
					</PlantInfoRight>
				</PlantInfoTop>
				<div>
					<Text>{modalOpen[1].desc}</Text>
				</div>
			</StyledModalInner>
		</StyledModalOuter>
	);
};

const StyledModalOuter = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 20;
`;

const StyledModalInner = styled.div`
	width: 45%;
	background: #f9f8f8;
	padding: 3rem;
	color: #6a6350;
	box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.7);
	@media (max-width: 568px) {
		width: 80%;
		height: 90%;
		overflow: scroll;
		padding: 2rem;
	}
`;

const StyledImg = styled.img`
	width: 50%;
	object-fit: cover;
	@media (max-width: 568px) {
		width: 100%;
		height: 15rem;
	}
`;

const PlantInfoTop = styled.div`
	display: flex;
	margin-bottom: 2rem;
	@media (max-width: 568px) {
		flex-direction: column;
	}
`;

const PlantInfoRight = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0rem 0rem 0rem 2rem;
	width: 100%;
	justify-content: space-between;
	@media (max-width: 568px) {
		padding: 0rem;
	}
	p {
		font-weight: lighter;
	}
	.plant-name {
		font-size: 1.8rem;
		margin-bottom: 0.7rem;
		@media (max-width: 568px) {
			font-size: 1.5rem;
			margin-top: 1rem;
		}
	}
	.latin-name {
		font-size: 1.5rem;
		margin-bottom: 2rem;
		@media (max-width: 568px) {
			font-size: 1.3rem;
			margin-bottom: 1rem;
		}
	}
	.size-head {
		font-size: 1.2rem;
		font-style: italic;
		margin-bottom: 0.7rem;
	}
	.size-cont {
		display: flex;
		margin-bottom: 1.5rem;
		@media (max-width: 568px) {
			margin-bottom: 1rem;
		}
	}
	.size {
		cursor: pointer;
		width: 2rem;
		height: 1.8rem;
		margin-right: 1rem;
		background: #6a6350;
		color: #fffcfb;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		background: transparent;
		color: #6a6350;
		border: solid 1px #6a6350;
		transition: all 0.3s ease;
		margin-bottom: 0.7rem;
		&:active {
			transform: scale(0.95);
		}
		&:hover {
			background: #6a6350;
			color: #fffcfb;
		}
	}
	.size.active {
		background: #6a6350;
		color: #fffcfb;
	}
	.price {
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
	}
	button {
		cursor: pointer;
		font-family: 'Open-sans', sans-serif;
		background: #9bb2ac;
		border: none;
		color: #fffcfb;
		height: 2rem;
		padding: 0.2rem 1rem;
		width: 100%;
		font-size: 1rem;
		font-weight: lighter;
		display: flex;
		align-items: center;
		justify-content: space-between;
		transition: all 0.3s ease;
		&:hover {
			background: #8da39d;
		}
		&:focus {
			outline: none;
		}
		.count-control {
			display: flex;
			flex-direction: column;
			svg {
				margin: 0;
				transition: all 0.2s ease;
				&:hover {
					color: #6a6350;
				}
			}
			#inc {
				margin-bottom: -2px;
			}
		}
		p {
			margin-right: 0.2rem;
		}
		svg {
			margin-left: 0.3rem;
		}
		span {
			display: flex;
			flex: 1;
			justify-content: center;
			&:hover {
				color: #6a6350;
			}
		}
	}
`;

const CountControl = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.3rem;
	font-weight: lighter;
	p {
		font-weight: lighter;
		font-family: 'Open Sans', sans-serif;
	}
`;

const Text = styled.p`
	line-height: 1.7rem;
	font-weight: lighter;
`;

export default PlantModal;
