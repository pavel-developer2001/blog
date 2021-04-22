import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { searchItem } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
			width: 400,
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
		divider: {
			height: 28,
			margin: 4,
		},
	})
);

export default function Search() {
	const [searchTerm, setSearchTerm] = React.useState("");
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (searchTerm.length > 0) {
			dispatch(searchItem(searchTerm));
		}
	}, [searchTerm]);

	const classes = useStyles();
	return (
		<Paper component='form' className={classes.root}>
			<IconButton
				type='submit'
				className={classes.iconButton}
				aria-label='search'
			>
				<SearchIcon />
			</IconButton>
			<InputBase
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				className={classes.input}
				placeholder='Поиск'
				inputProps={{ "aria-label": "search google maps" }}
			/>
		</Paper>
	);
}
