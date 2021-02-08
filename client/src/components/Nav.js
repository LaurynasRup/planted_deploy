import React from 'react';
// Icons
import { BsBag, BsBagFill } from 'react-icons/bs';
// Router
import { Link, useLocation } from 'react-router-dom';
// Styled Comp
import styled from 'styled-components';

const Nav = ({ basket }) => {
	const { pathname } = useLocation();
	return (
		<StyledNav
			style={{ background: `${pathname === '/' ? 'transparent' : '#97b0ac'}` }}
		>
			<div className="logo">
				<Link to="/">
					Plant<span className="logo-e">e</span>d.
				</Link>
			</div>
			<ul>
				<Link to="/">
					<li
						style={{
							color: `${pathname === '/' ? '#6a6350' : '#e7dbd3'}`,
						}}
					>
						Home
					</li>
				</Link>
				<Link to="/plants">
					<li
						style={{
							color: `${pathname === '/plants' ? '#6a6350' : '#e7dbd3'}`,
						}}
					>
						Plants
					</li>
				</Link>
				<Link to="/gifts">
					<li
						style={{
							color: `${pathname === '/gifts' ? '#6a6350' : '#e7dbd3'}`,
						}}
					>
						Gifts
					</li>
				</Link>
				<Link to="/basket">
					<li
						style={{
							color: `${pathname === '/basket' ? '#6a6350' : '#e7dbd3'}`,
						}}
					>
						<span className="basket">
							Basket{' '}
							{basket.length > 0 ? (
								<BsBagFill size={14} />
							) : (
								<BsBag size={14} />
							)}
						</span>
					</li>
				</Link>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	min-height: 10vh;
	background-color: #97b0ac;
	padding: 1rem 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	z-index: 20;
	@media (max-width: 568px) {
		flex-direction: column;
		padding: 1rem 2rem;
	}
	.logo {
		font-size: 2rem;
		font-weight: 300;
		font-family: 'Montserrat', sans-serif;
		@media (max-width: 800px) {
			font-size: 1.5rem;
		}
		.logo-e {
			color: #6a6350;
		}
	}
	a {
		text-decoration: none;
		color: #e7dbd3;
	}
	ul {
		display: flex;
		width: 40%;
		justify-content: space-around;
		@media (max-width: 568px) {
			width: 100%;
			margin-top: 1rem;
			justify-content: space-between;
		}
		li {
			list-style: none;

			display: flex;

			align-items: center;

			font-size: 1.2rem;
			font-weight: 300;
			@media (max-width: 800px) {
				font-size: 1rem;
			}
			.basket {
				margin-right: 0.4rem;
			}
		}
	}
`;

export default Nav;
