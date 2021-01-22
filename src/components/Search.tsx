import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import { TodoContext } from "../TodoContext";

const useStyles = makeStyles((theme: Theme) =>
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
  const { searchTodo } = React.useContext(TodoContext);

  React.useEffect(() => {
    searchTodo(searchTerm);
  }, [searchTerm]);
  // const searchArticle = (e) => {
  //   e.preventDefault();
  //   e.preventDefault();
  //   searchTodo(searchTerm)
  //   searchTodo(searchTerm)
  // }
  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={classes.input}
        placeholder="Поиск"
        inputProps={{ "aria-label": "search google maps" }}
      />
    </Paper>
  );
}
