import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


// import {filterItem} from '../redux/actions'
import {filterItem} from '../redux/itemsSlice'
import {useDispatch, useSelector} from 'react-redux'

const useStyles = makeStyles((theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export const firterList = {
  DATE: 'По последним обновлениям',
  POPULAR: 'По популярности'
} 

export default function Filter() {
  const classes = useStyles();
  const [filter, setFilter] = React.useState(firterList.DATE);

  const todos = useSelector(item => item.items)
  const dispatch = useDispatch()

  React.useEffect(() => {
    if (filter == firterList.DATE){
      const sortedData = todos.sort((a,b) => b.id-a.id)
      dispatch(filterItem(sortedData))  
  }
  if (filter == firterList.POPULAR){
      const sortedPopular = todos.sort((a, b) => b.like-a.like)
      dispatch(filterItem(sortedPopular))
  }
  }, [filter])

  const handleChange = (event) => {
    setFilter(event.target.value);
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
