import React from 'react';
// Styled
import styled from 'styled-components';
// Framer m
import { motion } from 'framer-motion';
// Animation
import { basketAnim2, basketInner } from '../animation';

const BasketModalConf = ({
	setBasketModalConf,
	setBasketModalForm,
	basket,
	setBasket,
	userDetails,
}) => {
	// Close Modal
	const closeModalHandler = (e) => {
		// Close Modal
		if (e.target.classList.contains('outer')) {
			setBasketModalConf(false);
		}
		// Empty basket
		setBasket([]);
	};

	// Calculate total
	const calcTotal = () => {
		let total = 0;
		basket.forEach((item) => {
			let itemTotal = 0;
			for (let i = 0; i < 3; i++) {
				itemTotal += item.basket[i] * item.price[i];
			}
			total += itemTotal;
		});
		return total;
	};

	return (
		<OuterModal
			className="outer"
			onClick={closeModalHandler}
			variants={basketAnim2}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<InnerModal variants={basketInner} initial="hidden" animate="show">
				<p className="head">Order Confirmed</p>
				<div className="line"></div>
				<p className="sub-head">Order Details:</p>
				{basket.map((el) => (
					<BasketItem
						name={el.name}
						key={el.id}
						basket={el.basket}
						price={el.price}
					/>
				))}
				<div className="line2"></div>
				<p className="total">Total: £{calcTotal().toFixed(2)}</p>
				<p className="sub-head">Billing details:</p>
				<div className="billing">
					<p>
						<span className="fname">{userDetails.fname}</span>
						<span className="lname"> {userDetails.lname}</span>
					</p>
					<p className="add1">{userDetails.address1}</p>
					<p className="add2">{userDetails.address2}</p>
					<p className="town">{userDetails.town}</p>
					<p className="pcode">{userDetails.pcode}</p>
				</div>
			</InnerModal>
		</OuterModal>
	);
};

const BasketItem = ({ name, basket, price }) => {
	// calculate total items
	const totalItems = basket.reduce((a, b) => a + b);
	// Calculate total price
	let totalPrice = 0;
	for (let i = 0; i < 3; i++) {
		totalPrice += basket[i] * price[i];
	}
	return (
		<div>
			<StyledP>
				<span className="qty">{totalItems} x </span>
				<span className="name"> {name}</span>
				<span className="price"> £{totalPrice.toFixed(2)}</span>
			</StyledP>
		</div>
	);
};

const OuterModal = styled(motion.div)`
	background: rgba(0, 0, 0, 0.7);
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
`;
const InnerModal = styled(motion.div)`
	width: 45%;
	height: 90vh;
	background: #f9f8f8;
	padding: 3rem;
	color: #6a6350;
	box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.7);
	overflow: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 568px) {
		width: 90%;
	}
	.head {
		font-size: 1.7rem;
		@media (max-width: 568px) {
			font-size: 1.3rem;
		}
	}
	.line {
		width: 14rem;
		height: 0.1rem;
		background: #6a6350;
		margin-bottom: 3rem;
	}
	.line2 {
		width: 100%;
		height: 0.05rem;
		background: #6a6350;
		margin: 0.5rem 0rem;
	}
	.sub-head {
		font-size: 1.3rem;
		margin: 1.3rem 0rem;
		@media (max-width: 568px) {
			font-size: 1rem;
			margin: 1rem 0rem;
		}
	}
	.total {
		text-align: right;
		font-weight: bolder;
	}
	.billing {
		p {
			font-size: 1rem;
			@media (max-width: 568px) {
				font-size: 0.8rem;
			}
		}
	}
`;

const StyledP = styled.p`
	display: flex;
	width: 100%;
	@media (max-width: 568px) {
		font-size: 0.8rem;
	}
	.qty {
		width: 10%;
	}
	.name {
		width: 70%;
	}
	.price {
		width: 20%;

		text-align: right;
	}
`;

export default BasketModalConf;
