import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
	root: {
		width: 300 + theme.spacing(3) * 2,
	},
	margin: {
		height: theme.spacing(2),
	},
}));

const PrettoSlider = withStyles({
	root: {
		color: '#6a6350',
		height: 1,
		margin: '10px 0px -15px',
	},
	thumb: {
		height: 12,
		width: 12,
		backgroundColor: '#6a6350',
		border: '2px solid currentColor',
		marginTop: -5,
		marginLeft: -5,
		'&:focus, &:hover, &$active': {
			boxShadow: 'none',
		},
	},
	active: {},
	valueLabel: {
		left: 'calc(-50% + 4px)',
	},
	track: {
		height: 1,
		borderRadius: 4,
	},
	rail: {
		height: 1,
		borderRadius: 4,
	},
})(Slider);

export const CustomSlider = ({
	setPriceRange,
	priceRange,
	plantFilter,
	setPlantFilter,
}) => {
	const classes = useStyles();

	const sliderHandler = (e, value) => {
		const rangeValues = [
			((priceRange.max * value[0]) / 100).toFixed(2),
			((priceRange.max * value[1]) / 100).toFixed(2),
		];
		const updatedRange = {
			...priceRange,
			rangeMin: rangeValues[0],
			rangeMax: rangeValues[1],
		};
		setPriceRange(updatedRange);
		setPlantFilter({ ...plantFilter, range: [rangeValues[0], rangeValues[1]] });
	};

	return (
		<div className={classes.root}>
			<PrettoSlider
				defaultValue={[0, 100]}
				onChange={(e, value) => sliderHandler(e, value)}
			/>
			<div className={classes.margin} />
		</div>
	);
};
