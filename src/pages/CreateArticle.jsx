import React from 'react'
import {Link, useHistory} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import {useSelector, useDispatch} from 'react-redux'
// import {addItem} from '../redux/actions'
import {addItem} from '../redux/itemsSlice'

import { format } from 'date-fns';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%'
      },
    },
    btn: {
        marginLeft: "30px",
        marginTop: "10px"
    },
  }),
);

const CreateArticle = () => {
    const classes = useStyles();
    const todos = useSelector(item => item.items)
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState('')
    const [text, setText] = React.useState('')

    const [todo, _] = React.useState(todos)
    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length > 0){
            const newItem = {
                 id: todo.length + 1,
                 title,
                 text,
                 like: 0,
                 date: format(new Date(), 'dd/MM/yyyy kk:mm') 
            }
            dispatch(addItem(newItem))
            setTitle('')
            setText('')
            history.push('/')
        }
        else{
            alert('Укажите заголовок статьи ')
        }
        
    }
    return (
        <div className='create-article'>
            <Grid container>
                <Grid item xs={3}>
                    <Link to='/'>
                        <IconButton aria-label="delete">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={7}>
                <form className={classes.root} onSubmit={handleSubmit} noValidate autoComplete="off">
                    <div>
                        <TextField
                        id="outlined-textarea"
                        label="Заголовок"
                        multiline
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-multiline-static"
                        label="Текст"
                        multiline
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={4}
                        variant="outlined"
                        />
                    </div>
                    <Button className={classes.btn} variant="contained" onClick={handleSubmit}  color="primary" disableElevation>
                    Опубликовать
                    </Button>
                </form>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreateArticle
