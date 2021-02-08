export const headderSlide = {
	hidden: { opacity: 0, x: '-100%' },
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.3,
			type: 'spring',
			stiffness: 30,
		},
	},
};

export const btnFade = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1, delay: 1 } },
};

export const homeScroll = {
	hidden: { opacity: 0, scale: 0.1 },
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 1.2,
		},
	},
};

export const homeScroll2 = {
	hidden: { opacity: 0, scale: 1.2 },
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.7,
		},
	},
};

export const homeAnim = {
	hidden: { x: '-100%' },
	show: { x: 0, transition: { duration: 0.5 } },
	exit: { x: '-100%', transition: { duration: 0.5 } },
};

export const pageAnim = {
	hidden: { y: '100%', opacity: 0, scale: 0.5 },
	show: {
		y: 0,
		opacity: 1,
		scale: 1,
		transition: { duration: 0.7 },
	},
	exit: { y: '100%', opacity: 0, scale: 0.5, transition: { duration: 0.7 } },
};

export const modalAnim = {
	hidden: { opacity: 0, y: '-100%' },
	show: {
		y: '0%',
		opacity: 1,
		transition: { duration: 0.7 },
	},
	exit: { opacity: 0, y: '-100%', transition: { duration: 0.7 } },
};

export const basketAnim1 = {
	hidden: { y: '-100%', opacity: 0 },
	show: { y: '0%', opacity: 1, transition: { duration: 0.7 } },
};

export const basketAnim2 = {
	hidden: { y: '0%' },
	show: { y: '0%', opacity: 1, transition: { duration: 0.7 } },
	exit: { y: '-100%', opacity: 0, transition: { duration: 0.7 } },
};

export const basketInner = {
	hidden: { height: '100%' },
	show: { height: '70%', transition: { duration: 0.5 } },
};
