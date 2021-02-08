// Image
import plant1 from './img/plant1.jpg';
import plant2 from './img/plant2.jpg';
import plant3 from './img/plant3.jpg';
import plant4 from './img/plant4.jpg';
import plant5 from './img/plant5.jpg';
import plant6 from './img/plant6.jpg';
import plant7 from './img/plant7.jpg';
import plant8 from './img/plant8.jpg';
import plant9 from './img/plant9.jpg';
import plant10 from './img/plant10.jpg';
import plant11 from './img/plant11.jpg';
import plant12 from './img/plant12.jpg';
import gift1 from './img/gift1.jpg';
import gift2 from './img/gift2.jpg';
import gift3 from './img/gift3.jpg';
import hawsWaterer1 from './img/hawsWaterer1.jpg';
import hawsWaterer2 from './img/hawsWaterer2.jpg';
import hawsWaterer3 from './img/hawsWaterer3.jpg';
import compostScoop from './img/compostScoop.jpg';
import precisionSecateurs from './img/precisionSecateurs.jpg';
import conranTrowel from './img/conranTrowel.jpg';
import pot1 from './img/pot1.jpg';
import pot2 from './img/pot2.jpg';
import pot3 from './img/pot3.jpg';
// UUID
import { v4 as uuidv4 } from 'uuid';

export const plants = [
	{
		name: 'String Of Hearts',
		latinName: 'Ceropegia Woodii',
		price: [14.99, 19.99, 24.99],
		image: plant1,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'It is an evergreen succulent trailing vine that grows to 10 centimetres (3.9 in) in height and spreads to reach up to 2–4 metres (6 ft 7 in–13 ft 1 in) in length. Its leaves are shaped like hearts, about 1–2 cm wide and long. ',
		type: 'plant',
	},
	{
		name: 'House plant',
		latinName: 'Beaucarnea recurvata',
		price: [11.99, 14.99, 18.99],
		image: plant7,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			"This plant comes from the tropical regions of southern Africa, and usually grows to a height and spread of around 2 ft. As a plant native to the tropics, it's best kept in a bright room out of indirect light.",
		type: 'plant',
	},
	{
		name: 'Fishbone Cactus',
		latinName: 'Epiphyllum Anguliger',
		price: [12.99, 17.99, 21.99],
		image: plant2,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'This epiphytic cactus has smooth green skin and extensively branched stems. The primary stems are often woody. Secondary stems are flat and succulent, 20–30 cm long, 3–5 cm wide, and deeply lobed. The lobes are rectangular or slightly rounded.',
		type: 'plant',
	},
	{
		name: 'Calathea Rattlesnake',
		latinName: 'Calathea Lancifolia',
		price: [17.99, 22.99, 27.99],
		image: plant8,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'This Calathea plant has long crinkle-cut leaves with deep green markings over light green, contrasting with a purple underside. Calatheas are susceptible to many outside factors, it is important to have them in the right soil. Ideal soil conditions for Calathea should be porous and well draining.',
		type: 'plant',
	},
	{
		name: 'Hindu Rope',
		latinName: 'Hoya Carnosa Compacta',
		price: [17.99, 22.99, 27.99],
		image: plant3,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'Hoya carnosa makes faintly succulent shoots with smooth, pale gray, and bare surfaces that twine and climb. The perennial leaves are stalked with about 1 to 1.5 cm long stems. The blade is wide oval to longitudinal oval or heart-shaped. ',
		type: 'plant',
	},
	{
		name: 'Areca Palm',
		latinName: 'Dypsis lutescens',
		price: [18.99, 24.99, 29.99],
		image: plant9,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'Areca palm (Chrysalidocarpus lutescens) is one of the most widely used palms for bright interiors. It features feathery, arching fronds, each with up to 100 leaflets. These big, bold plants command attention.',
		type: 'plant',
	},
	{
		name: 'Fiddle Leaf Fig',
		latinName: 'Ficus Lyrata Bambino',
		price: [13.99, 18.99, 24.99],
		image: plant4,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'Ficus lyrata Bambino has an extremely compact, upright, branching nature; slightly smaller and thicker leaves compared to Ficus lyrata, but still with the same amazing fiddle-shape and somewhat lighter veining.',
		type: 'plant',
	},
	{
		name: 'Dragon Tree',
		latinName: "Dracaena deremensis 'Warneckii'",
		price: [16.99, 19.99, 23.99],
		image: plant10,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			"Dracaena deremensis 'Warneckii' is a tender evergreen shrub species that is commonly grown as a houseplant. It has an erect habit, growing from a central trunk which becomes branched with age.Leaves are coloured grey-green and striped with white or green.",
		type: 'plant',
	},
	{
		name: 'Pinstripe',
		latinName: 'Calathea Ornata',
		price: [18.99, 24.99, 29.99],
		image: plant5,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'The Calathea Ornata is a perennial plant that is part of the family known as the prayer plants or the Maranta family. The plant is known for its large leaves that have a distinctive pattern and effervescent colors.',
		type: 'plant',
	},
	{
		name: 'Regal Shields',
		latinName: 'Alocasia',
		price: [18.99, 24.99, 29.99],
		image: plant11,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'The Regal Shields is one of the more coveted Alocasias around, and with its otherworldly leaves, and elevated veins, we can see why!Native to tropical regions in Africa, the Regal Shields enjoys humidity, and space to grow. It is also a sun lover, but keep it away from direct sunlight.',
		type: 'plant',
	},
	{
		name: 'Black Velvet',
		latinName: 'Alocasia Reginula',
		price: [24.99, 29.99, 35.99],
		image: plant6,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			'Alocasia Reginula also known as Black Velvet or Jewel Alocasia is a relatively small Alocasia with big, lush, almost black leaves and contrasting, silver veins. The leaves of Alocasia Reginula look velvet-like but are a little rough to touch.',
		type: 'plant',
	},
	{
		name: "Maori 'Green Leaf'",
		latinName: 'Corokia cotoneaster',
		price: [14.99, 17.99, 21.99],
		image: plant12,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc:
			"The Maori 'Green Leaf' looks delicate yet is a robust plant. The plant's fresh green coloured foliage on soft grey branches is reminiscent of wintery scenes. Corokia cotoneasters are commonly known as 'wire-netting bush' for the zig-zag patterns in which the branches grow.",
		type: 'plant',
	},
];

export const gifts = [
	{
		name: 'Haws coper watering can',
		price: [37.99, 0, 0],
		image: hawsWaterer1,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Haws steel & coper watering can',
		price: [49.99, 0, 0],
		image: hawsWaterer2,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Haws sage watering can',
		price: [29.99, 0, 0],
		image: hawsWaterer3,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Sophie Conran compost scoop',
		price: [17.99, 0, 0],
		image: compostScoop,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Sophie Conran trowel',
		price: [15.99, 0, 0],
		image: conranTrowel,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Sophie Conran precision secateurs',
		price: [25.99, 0, 0],
		image: precisionSecateurs,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Dark grey penny pot',
		price: [9.99, 0, 0],
		image: pot1,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Light grey penny pot',
		price: [8.99, 0, 0],
		image: pot3,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'White ava pot',
		price: [12.99, 0, 0],
		image: pot2,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Self-watering wet pot',
		price: [39.99, 0, 0],
		image: gift1,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Geometric Pot',
		price: [25.99, 0, 0],
		image: gift2,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
	{
		name: 'Hanging Flower Pot',
		price: [29.99, 0, 0],
		image: gift3,
		id: uuidv4(),
		basket: [0, 0, 0],
		desc: '',
		type: 'gift',
	},
];
