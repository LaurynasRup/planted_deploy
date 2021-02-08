// Filter plants Fn
export const filterItems = (items, filt, or) => {
	const originItems = [...items];
	let filteredItems = [...originItems];
	// Sort a-z
	if (filt.sort === 'a-z') {
		filteredItems = items.sort((a, b) => a.name.localeCompare(b.name));
	}
	// Sort z-a
	if (filt.sort === 'z-a') {
		filteredItems = items
			.sort((a, b) => a.name.localeCompare(b.name))
			.reverse();
	}
	// Sort numerically
	if (filt.sort === 'low-high') {
		filteredItems = items.sort((a, b) => a.price[0] - b.price[0]);
	}
	// Sort reversed-numerically
	if (filt.sort === 'high-low') {
		filteredItems = items.sort((a, b) => a.price[0] - b.price[0]).reverse();
	}
	// Original
	if (filt.sort === 'recommended') {
		filteredItems = [...or];
	}

	if (filt.search !== '') {
		filteredItems = items.filter((item) =>
			item.name.toLowerCase().includes(filt.search.toLowerCase())
		);
	}
	filteredItems = filteredItems.filter(
		(item) => item.price[0] >= filt.range[0] && item.price[0] <= filt.range[1]
	);
	return filteredItems;
};

// MIn-Max value of array
export const minMax = (arr) => {
	const max = Math.max.apply(
		Math,
		arr.map((obj) => obj.price[0])
	);
	return [0, max];
};

// Filter plants Fn
// const filterPlants = (plnts, filt) => {
// 	const originPlants = [...plnts];
// 	let filteredPlants = [...originPlants];
// 	// Sort a-z
// 	if (filt.sort === 'a-z') {
// 		filteredPlants = plants.sort((a, b) => a.name.localeCompare(b.name));
// 	}
// 	// Sort z-a
// 	if (filt.sort === 'z-a') {
// 		filteredPlants = plants
// 			.sort((a, b) => a.name.localeCompare(b.name))
// 			.reverse();
// 	}
// 	// Sort numerically
// 	if (filt.sort === 'low-high') {
// 		filteredPlants = plants.sort((a, b) => a.price[0] - b.price[0]);
// 	}
// 	// Sort reversed-numerically
// 	if (filt.sort === 'high-low') {
// 		filteredPlants = plants.sort((a, b) => a.price - b.price).reverse();
// 	}
// 	// Original
// 	if (filt.sort === 'recommended') {
// 		filteredPlants = [...allPlants];
// 	}

// 	if (filt.search !== '') {
// 		filteredPlants = plants.filter((plant) =>
// 			plant.name.toLowerCase().includes(filt.search.toLowerCase())
// 		);
// 	}
// 	filteredPlants = filteredPlants.filter(
// 		(plant) =>
// 			plant.price[0] >= filt.range[0] && plant.price[0] <= filt.range[1]
// 	);
// 	return filteredPlants;
// };
