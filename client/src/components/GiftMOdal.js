import React, { useState } from 'react';
// Styled
import styled from 'styled-components';
// Icons
import { BsChevronUp, BsChevronDown, BsBag } from 'react-icons/bs';
// Framer m
import { motion } from 'framer-motion';
// Animation
import { modalAnim } from '../animation';

const GiftModal = ({ basket, setBasket, modalOpen, setModalOpen }) => {
	// Count state
	const [basketCount, setBasketCount] = useState(1);
	// Close modal
	const closeModalHandler = (e) => {
		if (e.target.classList.contains('modal-outer')) {
			setModalOpen([false, {}]);
		}
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
	// Add Items to basket
	const addToBasketHandler = () => {
		// Get count
		const count = basketCount;
		//If gift is not currently in the basket
		const foundBasketItem = basket.find((el) => el.id === modalOpen[1].id);
		if (foundBasketItem === undefined) {
			// Set Basket property to the count
			modalOpen[1].basket[0] = count;
			// Add to basket
			setBasket([...basket, modalOpen[1]]);
		} else {
			const newBasket = [...basket];
			// Find and update basket item
			const foundItem = newBasket.find((el) => el.id === modalOpen[1].id);
			// Add current count to existing
			const newCount = foundItem.basket[0] + count;
			foundItem.basket[0] = newCount;
			// Set a new state
			setBasket(newBasket);
		}
		setBasketCount(1);
	};

	return (
		<OuterModal
			className="modal-outer"
			onClick={closeModalHandler}
			variants={modalAnim}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<StyledModalInner>
				<ModalTop>
					<img src={modalOpen[1].image} alt={modalOpen[1].name} />
					<ModalRight>
						<div className="info">
							<p className="gift-name">{modalOpen[1].name}</p>
							<p className="gift-price">£{modalOpen[1].price[0]}</p>
						</div>
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
					</ModalRight>
				</ModalTop>
				<div>
					<Text>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
						rerum quam, ex in cumque at doloribus dolor voluptatem nulla iste
						asperiores nihil quidem quia velit!
					</Text>
				</div>
			</StyledModalInner>
		</OuterModal>
	);
};

const OuterModal = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
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

const ModalTop = styled.div`
	display: flex;
	height: 40vh;
	@media (max-width: 568px) {
		flex-direction: column;
	}
	img {
		width: 50%;
		object-fit: cover;
		@media (max-width: 568px) {
			width: 100%;
			height: 15rem;
		}
	}
`;

const ModalRight = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0rem 0rem 0rem 2rem;
	width: 100%;
	justify-content: flex-end;
	font-weight: lighter;
	.info {
		height: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.gift-name {
		font-size: 1.7rem;
		@media (max-width: 568px) {
			font-size: 1.5rem;
			padding: 1rem 0rem;
		}
	}
	@media (max-width: 568px) {
		padding: 0rem;
	}
	.gift-price {
		font-size: 1.4rem;
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
		@media (max-width: 568px) {
			margin: 1.5rem 0rem;
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
	padding-top: 2rem;
	@media (max-width: 568px) {
		margin-top: 7rem;
	}
`;

export default GiftModal;
