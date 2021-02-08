import React, { useState } from 'react';
// Styled
import styled from 'styled-components';
// Framer m
import { motion } from 'framer-motion';
// Animation
import { basketAnim1 } from '../animation';

const BasketModal = ({
	setBasketModalForm,
	setBasketModalConf,
	userDetails,
	setUserDetails,
}) => {
	const [inputErrors, setInputErrors] = useState({
		fname: '',
		lname: '',
		email: '',
		phone: '',
		address1: '',
		address2: '',
		town: '',
		pcode: '',
		country: '',
		cardName: '',
		cardNum: '',
		cardExp1: '',
		cardExp2: '',
		ccv: '',
	});
	const [errorMessage, setErrorMessage] = useState({
		incorrect: '',
		empty: '',
	});

	// Regex
	const emailRegex = RegExp(
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);

	// Get curret year
	const currentYear = new Date().getFullYear();

	// Handle change on form inputs
	const inputChangeHandler = (e) => {
		// Copy state
		const detailsCopy = { ...userDetails };
		// Find item to change in copied state item
		const stateItem = e.target.id;
		detailsCopy[stateItem] = e.target.value;
		// Update state
		setUserDetails({ ...detailsCopy });
		// Validate personal input
		personalValidation(stateItem, e.target.value);
	};
	// Close Modal
	const closeModalHandler = (e) => {
		if (e.target.classList.contains('outer')) {
			setBasketModalForm(false);
		}
	};

	// Personal Details Validation
	const personalValidation = (item, value) => {
		// copy of errors state
		const errorsCopy = { ...inputErrors };
		switch (item) {
			case 'fname':
				errorsCopy[item] = value.length < 3 ? 'true' : '';
				break;
			case 'lname':
				errorsCopy[item] = value.length < 3 ? 'true' : '';
				break;
			case 'email':
				errorsCopy[item] =
					emailRegex.test(value) && value.length > 0 ? '' : 'true';
				break;
			case 'phone':
				errorsCopy[item] = value.length < 11 ? 'true' : '';
				break;
			case 'address1':
				errorsCopy[item] = value.length < 10 ? 'true' : '';
				break;
			case 'town':
				errorsCopy[item] = value.length < 3 ? 'true' : '';
				break;
			case 'pcode':
				errorsCopy[item] = value.length < 6 ? 'true' : '';
				break;
			case 'country':
				errorsCopy[item] = value.length < 2 ? 'true' : '';
				break;
			case 'cardName':
				errorsCopy[item] = value.length < 3 ? 'true' : '';
				break;
			case 'cardNum':
				errorsCopy[item] = value.length < 16 ? 'true' : '';
				break;
			case 'cardExp1':
				errorsCopy[item] =
					parseInt(value) >= 1 && parseInt(value) <= 12 ? '' : 'true';
				break;
			case 'cardExp2':
				errorsCopy[item] =
					parseInt(value) >= currentYear && parseInt(value) <= currentYear + 10
						? ''
						: 'true';
				break;
			case 'ccv':
				errorsCopy[item] = !isNaN(value) ? '' : 'true';
				break;
			default:
				break;
		}
		setInputErrors({ ...errorsCopy });
	};
	// Form Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		// Copy errors state
		const errState = { ...errorMessage };
		// Check for errors
		const err = Object.values(inputErrors);
		// Check for empty
		const empty = Object.values(userDetails);

		//If empty
		if (empty.some((el) => el === '')) {
			errState.empty = '* Please fill in all required fields';
		} else {
			errState.empty = '';
		}

		// If errors
		if (err.some((el) => el !== '')) {
			errState.incorrect = '* Please fill in required fields correctly';
		} else {
			errState.incorrect = '';
		}

		setErrorMessage({ ...errState });

		// If no errors - redirect
		if (errState.incorrect === '' && errState.empty === '') {
			// redirect
			setBasketModalForm(false);
			setBasketModalConf(true);
		}
	};

	return (
		<OuterModal
			className="outer"
			onClick={closeModalHandler}
			variants={basketAnim1}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<InnerModal>
				<p className="head">Personal Details</p>
				<div className="line"></div>
				{errorMessage.incorrect !== '' ? (
					<p className="errorMsg">{errorMessage.incorrect}</p>
				) : (
					''
				)}
				{errorMessage.empty !== '' ? (
					<p className="errorMsg">{errorMessage.empty}</p>
				) : (
					''
				)}
				<PersonalForm>
					<div className="form-control">
						<div className="form-el">
							<label htmlFor="fname">
								First name <span className="star">*</span>
							</label>
							<input
								className={inputErrors.fname === '' ? '' : 'error'}
								type="text"
								id="fname"
								onChange={inputChangeHandler}
								value={userDetails.fname}
							/>
						</div>
						<div className="form-el">
							<label htmlFor="lname">
								Last name <span className="star">*</span>
							</label>
							<input
								className={inputErrors.lname === '' ? '' : 'error'}
								type="text"
								id="lname"
								onChange={inputChangeHandler}
								value={userDetails.lname}
							/>
						</div>
					</div>
					<div className="form-control">
						<div className="form-el">
							<label htmlFor="email">
								Email Address <span className="star">*</span>
							</label>
							<input
								className={inputErrors.email === '' ? '' : 'error'}
								type="text"
								id="email"
								onChange={inputChangeHandler}
								value={userDetails.email}
							/>
						</div>
						<div className="form-el">
							<label htmlFor="phone">
								Phone number <span className="star">*</span>
							</label>
							<input
								className={inputErrors.phone === '' ? '' : 'error'}
								type="number"
								id="phone"
								onChange={inputChangeHandler}
								value={userDetails.phone}
							/>
						</div>
					</div>
					<div className="form-control add">
						<div className="form-el add">
							<label htmlFor="address1">
								Street address <span className="star">*</span>
							</label>
							<input
								className={inputErrors.address1 === '' ? '' : 'error'}
								type="text"
								id="address1"
								onChange={inputChangeHandler}
								value={userDetails.address1}
							/>
						</div>
						<div className="form-el add">
							<label htmlFor="address2">
								Apartment, unit, suite <span className="star">*</span>
							</label>
							<input
								type="text"
								id="address2"
								onChange={inputChangeHandler}
								value={userDetails.address2}
							/>
						</div>
					</div>
					<div className="form-control">
						<div className="form-el third">
							<label htmlFor="town">
								Town <span className="star">*</span>
							</label>
							<input
								className={inputErrors.town === '' ? '' : 'error'}
								type="text"
								id="town"
								onChange={inputChangeHandler}
								value={userDetails.town}
							/>
						</div>
						<div className="form-el third">
							<label htmlFor="pcode">
								Postcode <span className="star">*</span>
							</label>
							<input
								className={inputErrors.pcode === '' ? '' : 'error'}
								type="text"
								id="pcode"
								onChange={inputChangeHandler}
								value={userDetails.pcode}
								maxLength="9"
							/>
						</div>
						<div className="form-el third">
							<label htmlFor="country">
								Country <span className="star">*</span>
							</label>
							<input
								className={inputErrors.country === '' ? '' : 'error'}
								type="text"
								id="country"
								onChange={inputChangeHandler}
								value={userDetails.country}
							/>
						</div>
					</div>
				</PersonalForm>
				<p className="head">Card Details</p>
				<div className="line"></div>
				<CardForm>
					<div className="form-control">
						<div className="form-el">
							<label htmlFor="cardName">
								Name on card <span className="star">*</span>
							</label>
							<input
								className={inputErrors.cardName === '' ? '' : 'error'}
								type="text"
								id="cardName"
								onChange={inputChangeHandler}
								value={userDetails.cardName}
							/>
						</div>
						<div className="form-el">
							<label htmlFor="cardNum">
								Card number <span className="star">*</span>
							</label>
							<input
								type="number"
								id="cardNum"
								className={inputErrors.cardNum === '' ? '' : 'error'}
								onChange={inputChangeHandler}
								value={userDetails.cardNum}
							/>
						</div>
					</div>
					<div className="form-control">
						<div className="form-el">
							<label>
								Expiry date <span className="star">*</span>
							</label>
							<span className="card-exp">
								<div className="form-el">
									<label htmlFor="cardExp1">Month</label>
									<input
										maxLength="2"
										type="number"
										id="cardExp1"
										onChange={inputChangeHandler}
										value={userDetails.cardExp1}
									/>
								</div>
								<div className="form-el">
									<label htmlFor="cardExp2">Year</label>
									<input
										type="number"
										id="cardExp2"
										maxLength="4"
										onChange={inputChangeHandler}
										value={userDetails.cardExp2}
									/>
								</div>
							</span>
						</div>
					</div>
					<div className="form-control ccv">
						<div className="form-el">
							<label htmlFor="ccv">
								CCV <span className="star">*</span>
							</label>
							<input
								className={inputErrors.ccv === '' ? '' : 'error'}
								type="password"
								id="ccv"
								maxLength="4"
								onChange={inputChangeHandler}
								value={userDetails.ccv}
							/>
						</div>
					</div>
				</CardForm>
				<StyledBtn type="submit" onClick={handleSubmit}>
					Confirm details & place order
				</StyledBtn>
			</InnerModal>
		</OuterModal>
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
const InnerModal = styled.div`
	width: 45%;
	height: 90vh;
	background: #f9f8f8;
	padding: 3rem;
	color: #6a6350;
	box-shadow: 0px 3px 10px 2px rgba(0, 0, 0, 0.7);
	overflow: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	@media (max-width: 568px) {
		width: 80%;
		height: 90%;
		overflow: scroll;
		padding: 2rem;
	}
	.head {
		font-size: 1.7rem;
		@media (max-width: 568px) {
			font-size: 1.5rem;
		}
	}
	.line {
		width: 14rem;
		height: 0.1rem;
		background: #6a6350;
		margin-bottom: 0.5rem;
	}
	p.errorMsg {
		color: #b32a2a;
		font-size: 0.8rem;
	}
`;

const PersonalForm = styled.form`
	margin: 1.5rem 0rem;
	display: flex;
	flex-direction: column;
	width: 100%;
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	.form-control {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
		.form-el {
			display: flex;
			flex-direction: column;
			width: 49%;
			.star {
				font-size: 0.8rem;
				color: #b32a2a;
			}
			label {
				margin-bottom: 0.5rem;
			}
			input {
				font-family: 'Open Sans', sans-serif;
				color: rgb(42, 42, 42);
				font-size: 0.8rem;
				padding: 0.2rem 1rem;
				border: solid 1px #9b9a9a;
				&:focus {
					outline: none;
					border: solid 1px #494646;
				}
			}
			input.error {
				border: solid 1px #b32a2a;
			}
		}
		.form-el.third {
			width: 32%;
		}
		.form-el.add {
			width: 100%;
		}
		.form-el.add:first-of-type {
			margin-bottom: 1rem;
		}
	}
	.form-control.add {
		flex-direction: column;
	}
`;

const CardForm = styled(PersonalForm)`
	.card-exp {
		display: flex;
		width: 100%;
		.form-el {
			width: 30%;
			input {
				width: 80%;
				padding: 0.2rem 0.8rem;
				@media (max-width: 568px) {
					padding: 0.2rem 0.5rem;
				}
			}
			input#cardExp2 {
				width: 105%;
			}
			label {
				font-size: 0.7rem;
			}
		}
	}
	.form-control.ccv {
		input {
			width: 62%;
		}
	}
`;

const StyledBtn = styled.button`
	cursor: pointer;
	background: #9fb8b4;
	padding: 0.2rem 1rem;
	font-family: 'Open Sans', sans-serif;
	font-size: 1.2rem;
	font-weight: lighter;
	color: #fffcfb;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 0;
	&:focus {
		outline: none;
	}
	&:hover {
		background: #8da39d;
	}
	@media (max-width: 568px) {
		font-size: 1rem;
	}
`;

export default BasketModal;
