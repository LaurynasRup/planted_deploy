import React, { useState } from 'react';
// Pages
import Home from './Pages/Home';
import Plants from './Pages/Plants';
import Basket from './Pages/Basket';
import Gifts from './Pages/Gifts';
//Nav
import Nav from './components/Nav';
// Background
import Background from './components/Background';
// Router
import { Route, Switch, useLocation } from 'react-router-dom';
// Last Location
import { LastLocationProvider } from 'react-router-last-location';
// Global style
import GlobalStyle from './components/GlobalStyle';
// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	// Basket
	const [basket, setBasket] = useState([]);
	// Location
	const location = useLocation();

	return (
		<div className="App">
			<GlobalStyle />
			<Nav basket={basket} />
			<Background />
			<LastLocationProvider>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/plants">
							<Plants basket={basket} setBasket={setBasket} />
						</Route>
						<Route path="/basket">
							<Basket basket={basket} setBasket={setBasket} />
						</Route>
						<Route path="/gifts">
							<Gifts basket={basket} setBasket={setBasket} />
						</Route>
					</Switch>
				</AnimatePresence>
			</LastLocationProvider>
		</div>
	);
}

export default App;
