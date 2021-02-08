import React, { useState } from 'react';
// Icons
import { BsChevronUp, BsChevronDown, BsBag } from 'react-icons/bs';
// Styled
import styled from 'styled-components';

const GiftCard = ({
	image,
	name,
	price,
	gift,
	basket,
	setBasket,
	setModalOpen,
}) => {
	// Count
	const [basketCount, setBasketCount] = useState(1);
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
		const foundBasketItem = basket.find((el) => el.id === gift.id);
		if (foundBasketItem === undefined) {
			// Set Basket property to the count
			gift.basket[0] = count;
			// Add to basket
			setBasket([...basket, gift]);
		} else {
			const newBasket = [...basket];
			// Find and update basket item
			const foundItem = newBasket.find((el) => el.id === gift.id);
			// Add current count to existing
			const newCount = foundItem.basket[0] + count;
			foundItem.basket[0] = newCount;
			// Set a new state
			setBasket(newBasket);
		}
		setBasketCount(1);
	};
	// Modal handler
	const modalHandler = () => {
		setModalOpen([true, { ...gift }]);
	};
	return (
		<Card>
			<div onClick={modalHandler}>
				<img src={image} alt={name} />
				<div className="card-details">
					<p className="gift-name">{name}</p>
					<p className="gift-price">£{price}</p>
				</div>
			</div>
			<div className="card-foot">
				<p className="gift-count">{basketCount}</p>
				<div className="count-control">
					<BsChevronUp size={12} id="inc" onClick={basketCountHandler} />
					<BsChevronDown size={12} id="dec" onClick={basketCountHandler} />
				</div>
				<div className="add-to" onClick={addToBasketHandler}>
					<p>Add to basket</p>
					<BsBag size={13} />
				</div>
			</div>
		</Card>
	);
};

const Card = styled.div`
	width: 100%;
	max-height: 21.2rem;
	box-shadow: 0 1px 5px #6a6350;
	background: #fffcfb;
	cursor: pointer;
	transition: all 0.2s ease-in;
	z-index: 10;
	&:hover {
		box-shadow: 0 2px 10px #3a3529;
	}
	img {
		height: 12rem;
		width: 100%;
		object-fit: cover;
	}
	.card-details {
		padding: 1rem;
	}

	.gift-name {
		margin-bottom: 0.7rem;
		font-size: 1rem;
	}
	.gift-price {
		font-weight: lighter;
		font-size: 1.1rem;
		margin: 1rem 0rem;
	}

	.card-foot {
		display: flex;
		background: #9fb8b4;
		color: #fffcfb;
		padding: 0.2rem;
		align-items: center;
		.gift-count {
			margin: 0rem 0.3rem 0rem 0.8rem;
			font-size: 1.3rem;
		}
		.count-control {
			display: flex;
			flex-direction: column;
			margin-right: 4.5rem;
			#inc {
				margin-bottom: -0.2rem;
			}
		}
		.count-control > * {
			cursor: pointer;
			transition: all 0.5s ease;
			&:hover {
				color: #6a6350;
			}
		}
		.add-to {
			cursor: pointer;
			display: flex;
			align-items: center;
			justify-content: center;
			font-weight: lighter;
			transition: all 0.5s ease;
			font-size: 1rem;
			color: #fffcfb;
			&:hover {
				color: #6a6350;
			}
			svg {
				margin-left: 0.3rem;
			}
		}
	}
`;

export default GiftCard;
