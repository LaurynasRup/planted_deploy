import React from 'react';
// Styled
import styled from 'styled-components';
//Leaves
import Leaf1 from '../img/leaf1.svg';
import Leaf2 from '../img/leaf2.svg';

const Background = () => {
	return (
		<Bg>
			<StyledLeaf1 src={Leaf1} alt="leaf" />
			<StyledLeaf2 src={Leaf2} alt="leaf" />
		</Bg>
	);
};

const Bg = styled.div`
	background: #f4f1f0;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: -1;
`;
const StyledLeaf1 = styled.img`
	position: absolute;
	top: 15%;
	right: 0;
	z-index: 1;
`;
const StyledLeaf2 = styled.img`
	position: absolute;
	left: 0;
	top: 50%;
	z-index: 1;
`;

export default Background;
