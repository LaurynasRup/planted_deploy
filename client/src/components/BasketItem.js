import React from 'react';
// Icons
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
// Styled
import styled from 'styled-components';

// Whole item component
const BasketItem = ({ basket, setBasket, item }) => {
	return (
		<div>
			<MainWrapper>
				<div className="first-section">
					<img src={item.image} alt={item.name} />
					<p className="name">{item.name}</p>
				</div>
				<div className="details">
					{item.basket.map((el, index) => {
						if (el !== 0) {
							return (
								<BasketDetails
									key={index + Math.random()}
									item={item}
									index={index}
									basket={basket}
									setBasket={setBasket}
								/>
							);
						}
						return null;
					})}
				</div>
			</MainWrapper>
			<Line />
		</div>
	);
};

// Basket item details component
const BasketDetails = ({ item, index, basket, setBasket }) => {
	// Return sizes based on index
	const returnSize = (idx, item) => {
		if (item.type === 'plant') {
			if (idx === 0) {
				return <div>S</div>;
			} else if (idx === 1) {
				return <div>M</div>;
			} else {
				return <div>L</div>;
			}
		}
	};

	// Increase/Decrease basket items on click
	const incDechandler = (e) => {
		const copyBasket = [...basket];
		// Find the item in the basket
		const itemFound = copyBasket.find((el) => el.id === item.id);
		if (e.target.classList.contains('inc')) {
			// Increase basket item at index position by one
			itemFound.basket[index]++;
			// Set state
			setBasket(copyBasket);
		} else if (e.target.classList.contains('dec')) {
			// Decrese basket item at index position by one
			if (itemFound.basket[index] !== 1) {
				itemFound.basket[index]--;
				// Set state
				setBasket(copyBasket);
			}
		}
	};
	// Remove Item Handler
	const removeHandler = (e) => {
		const copyBasket = [...basket];
		// Find the item in the basket
		const itemFound = copyBasket.find((el) => el.id === item.id);
		// Set basket item to 0 at index
		itemFound.basket[index] = 0;
		// if item basket empty - remove
		const totalItems = itemFound.basket.reduce((a, b) => a + b);
		if (totalItems === 0) {
			const idx = copyBasket.indexOf(itemFound);
			copyBasket.splice(idx, 1);
		}
		// Set state
		setBasket(copyBasket);
	};

	return (
		<DetailsWrapper>
			<div className="size">{returnSize(index, item)}</div>
			<div className="qty">
				<span>{item.basket[index]}</span>
				<div className="chevs">
					<BsChevronUp className="inc" size={15} onClick={incDechandler} />
					<BsChevronDown className="dec" size={15} onClick={incDechandler} />
				</div>
			</div>
			<div className="price">
				£{(item.price[index] * item.basket[index]).toFixed(2)}
				<div className="close">
					<button>
						<VscClose
							size={window.innerWidth > 568 ? '18' : '12'}
							onClick={removeHandler}
						/>
					</button>
				</div>
			</div>
		</DetailsWrapper>
	);
};

const MainWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	align-items: flex-end;
	width: 100%;
	z-index: 10;
	@media (max-width: 568px) {
		margin-top: 1rem;
	}

	.first-section {
		width: 60%;
		display: flex;
		@media (max-width: 568px) {
			width: 50%;
			flex-direction: column;
			align-items: flex-start;
		}
	}
	img {
		width: 200px;
		height: 200px;
		object-fit: cover;
		z-index: 10;
		@media (max-width: 568px) {
			width: 120px;
			height: 120px;
		}
	}
	.name {
		font-size: 1.5rem;
		color: #6a6350;
		font-weight: lighter;
		margin: 0rem 1rem;
		align-self: flex-end;
		@media (max-width: 568px) {
			font-size: 1.3rem;
			margin: 1rem 0rem 0rem;
			align-self: flex-start;
		}
	}
	.details {
		display: flex;
		flex-direction: column;
		width: 60%;
		@media (max-width: 568px) {
			width: 50%;
		}
	}

	.line {
		background: #6a6350;
		width: 100%;
	}
`;
const Line = styled.div`
	width: 100%;
	height: 0.05rem;
	background: #6a6350;
	margin: 1rem 0rem;
`;

const DetailsWrapper = styled.div`
	margin-top: 2rem;
	display: flex;
	font-weight: lighter;
	color: #6a6350;
	font-size: 1.1rem;
	flex: 1;
	z-index: 10;
	@media (max-width: 568px) {
		margin-top: 1rem;
	}

	.size {
		width: 33.3%;
		display: flex;
		justify-content: flex-end;
		@media (max-width: 568px) {
			justify-content: flex-start;
			padding-left: 0.5rem;
		}
		div {
			font-size: 1.1rem;
			width: 30px;
			height: 30px;
			border: solid 1px #6a6350;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 10px;
			background: #fffcfb;
			@media (max-width: 568px) {
				font-size: 0.8rem;
				width: 25px;
				height: 25px;
			}
		}
	}
	.qty {
		width: 33.3%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		@media (max-width: 568px) {
			justify-content: flex-start;
			padding-left: 0.5rem;
		}
		.chevs {
			display: flex;
			flex-direction: column;
			height: 70%;
		}
		.chevs > * {
			cursor: pointer;
			transition: all 0.2s ease;
			&:hover {
				color: #423e31;
			}
		}
	}
	.price {
		width: 33.3%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;

		@media (max-width: 568px) {
			justify-content: flex-start;
			margin-left: -5px;
		}
	}
	.close {
		/* position: absolute; */
		top: 0;
		right: 10px;
		height: 100%;
		width: 5%;
		@media (max-width: 568px) {
			top: -5px;
			right: 0px;
		}
		button {
			cursor: pointer;
			border: none;
			background: transparent;
			color: #6a6350;
			&:focus {
				outline: none;
			}
			&:active {
				transform: scale(0.9);
			}
		}
	}
`;

export default BasketItem;
