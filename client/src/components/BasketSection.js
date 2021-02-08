import React from 'react';
// Styled
import styled from 'styled-components';
// Components
import BasketItem from './BasketItem';

const BasketSection = ({ basket, setBasket, setBasketModalForm }) => {
	// Calculate total
	const calcTotal = (arr) => {
		const objArr = arr.map((el) => ({ basket: el.basket, price: el.price }));
		const totalsArr = objArr.map((el) => {
			const totals = [];
			for (let i = 0; i < 3; i++) {
				totals.push(el.basket[i] * el.price[i]);
			}
			return totals.reduce((a, b) => a + b);
		});
		return totalsArr.reduce((a, b) => a + b).toFixed(2);
	};
	// Handle checkout
	const checkOutHandler = () => {
		setBasketModalForm(true);
	};

	return (
		<MainCont>
			<Head>
				<p>Basket</p>
				<div className="line"></div>
			</Head>
			{basket.length > 0 ? (
				<SubHead>
					<div className="heads">
						<p className="product">Product</p>
						<p className="size">Size</p>
						<p className="qty">Qty</p>
						<p className="price">Price</p>
					</div>
					<div className="subhead-line"></div>
				</SubHead>
			) : (
				<EmptyBasketText className="emptyBasket">
					Your basket is empty
				</EmptyBasketText>
			)}

			<div>
				{basket.map((item) => (
					<BasketItem
						basket={basket}
						setBasket={setBasket}
						item={item}
						key={item.id}
					/>
				))}
			</div>
			{basket.length > 0 && (
				<>
					<Total>
						<div className="total">
							<span>Total:</span>
							<span>£{calcTotal(basket)}</span>
						</div>
						<div className="line"></div>
					</Total>
					<ButtonWrapper>
						<button onClick={checkOutHandler}>Continue to checkout</button>
					</ButtonWrapper>
				</>
			)}
		</MainCont>
	);
};
const MainCont = styled.div`
	margin-top: 9vh;
	height: 91vh;
	background: transparent;
	/* position: relative; */
	overflow: scroll;
	padding: 5rem;
	@media (max-width: 568px) {
		padding: 4rem 2rem;
	}
`;

const Head = styled.div`
	margin-bottom: 2rem;
	p {
		font-size: 2.5rem;
		color: #6a6350;
		@media (max-width: 568px) {
			font-size: 1.5rem;
		}
	}
	.line {
		height: 0.2rem;
		width: 12rem;
		border-radius: 0.2rem;
		background: #6a6350;
		@media (max-width: 568px) {
			width: 15rem;
		}
	}
`;

const SubHead = styled.div`
	width: 100%;
	.heads {
		display: flex;
		justify-content: space-between;
		color: #6a6350;
		font-size: 1.2rem;
		font-weight: lighter;
		p {
			width: 20%;
		}
		.product {
			width: 60%;
		}
		.size,
		.qty {
			text-align: right;
			@media (max-width: 568px) {
				text-align: left;
			}
		}
		.price {
			text-align: center;
		}
	}
	.subhead-line {
		height: 0.1rem;
		background: #6a6350;
	}
`;

const EmptyBasketText = styled.div`
	font-size: 1.5rem;
	color: #6a6350;
`;

const Total = styled.div`
	margin: 2rem 0rem;
	width: 100%;
	font-size: 1.5rem;
	color: #6a6350;
	.total {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.line {
		background: #6a6350;
		width: 100%;
		height: 0.05rem;
	}
`;
const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	button {
		cursor: pointer;
		padding: 0.2rem 1.2rem;
		border-radius: 2rem;
		border: solid 1px #6a6350;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: 'Open Sans', sans-serif;
		font-size: 1.3rem;
		font-weight: 300;
		color: #6a6350;
		background: #fffcfb;
		transition: all 0.3s ease;
		@media (max-width: 568px) {
			font-size: 1rem;
		}

		&:focus {
			outline: none;
		}
		&:hover {
			background: #6a6350;
			color: #fffcfb;
		}
		&:active {
			transform: scale(0.98);
		}
	}
`;

export default BasketSection;
