import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TodoContext } from "../TodoContext";

const useStyles = makeStyles((theme: Theme) =>
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
  const { filterTodo } = React.useContext(TodoContext);
  const [filter, setFilter] = React.useState(firterList.DATE);

  React.useEffect(() => {
    filterTodo(filter);
  }, [filter]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Фильтер</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value={firterList.DATE}>По последним обновлениям</MenuItem>
          <MenuItem value={firterList.POPULAR}>По популярности</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
