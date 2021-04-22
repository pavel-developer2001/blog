import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { filterItem } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
	createStyles({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	})
);

export const firterList = {
	DATE: "По последним обновлениям",
	POPULAR: "По популярности",
};

export default function Filter() {
	const classes = useStyles();
	const [filter, setFilter] = React.useState(firterList.DATE);

	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(filterItem(filter));
	}, [filter]);

	const handleChange = (event) => {
		setFilter(event.target.value);
	};

	return (
		<div>
			<FormControl variant='outlined' className={classes.formControl}>
				<InputLabel id='demo-simple-select-outlined-label'>Фильтер</InputLabel>
				<Select
					labelId='demo-simple-select-outlined-label'
					id='demo-simple-select-outlined'
					value={filter}
					onChange={handleChange}
					label='Filter'
				>
					<MenuItem value={firterList.DATE}>{firterList.DATE}</MenuItem>
					<MenuItem value={firterList.POPULAR}>{firterList.POPULAR}</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
}
