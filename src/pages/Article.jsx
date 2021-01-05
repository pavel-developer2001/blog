import React from 'react'
import {Link, useHistory} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';

import {useSelector, useDispatch} from 'react-redux'
// import {removeItem, editItem} from '../redux/actions'
import {removeItem, editItem} from '../redux/reducer'


import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%'
      },
    },
    block: {
        marginLeft: '20px'
    }
  }),
);

const Article= ({arcId}) => {
    const classes = useStyles();
    const [off, setOff] = React.useState(false)
    const todos = useSelector(item => item.items)
    const dispatch = useDispatch()
    const findItem = todos.find((todo) => todo.id == arcId)
    const history = useHistory()

    const [editing, setEditing] = React.useState(false)
    const [title, setTitle] = React.useState(findItem.title)
    const [text, setText] = React.useState(findItem.text)
    React.useEffect(() => {
        
    }, [findItem])
    const removeTodo = () => {
        if (global.confirm('Вы действительно хотите удалить?')) {
            const idx = todos.findIndex((state) => state.id == arcId);
            const items = [
                ...todos.slice(0, idx),
                ...todos.slice(idx + 1)
              ]
            dispatch(removeItem(items))
            history.push('/')
          }
    }

    const handleEdit = (e) => {
        e.preventDefault()
        const newEditItem = {
            id: findItem.id,
            title,
            text,
            like: findItem.like,
            date: findItem.date
        }
        const findItemArray = todos.findIndex((item) => item.id == newEditItem.id);
        const items = [
            ...todos.slice(0, findItemArray),
            ...todos.slice(findItemArray  + 1)
          ]
        const edit = [...items, newEditItem]  
        dispatch(editItem(edit))
        setEditing(!editing)
        setOff(!off)
    }

    return (
        <div className='article'>
             <Grid container>
                <Grid item xs={2}>
                    <Link to='/'>
                        <IconButton aria-label="delete">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                </Grid>
               <Grid item xs={7}>
                 {
                 !editing && 
                 <> <Typography variant="h4" gutterBottom>
                        {findItem.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {findItem.text}
                    </Typography> </> 
                    }
                    {editing && <>
                        <form className={classes.root} noValidate autoComplete="off" onSubmit={handleEdit}>
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
                </form>
                    </>}
                </Grid>
                <Grid item xs={3}>
                    <IconButton onClick={() => setOff(!off)} aria-label="delete">
                        <MoreVertIcon />
                    </IconButton>
                    {off && <Grid container>
                        <div className={classes.block}>
                        <Grid item xs={12}>
                           {!editing && <Button
                            variant="contained"
                            color="default"
                            onClick={() => setEditing(!editing)}
                            startIcon={<CreateIcon />}
                            >
                            Редактировать
                            </Button>}
                            {editing && <Button
                            variant="contained"
                            color="default"
                            onClick={handleEdit}
                            startIcon={<CheckIcon/>}
                            >
                            Готово
                            </Button>} 
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                            variant="contained"
                            color="secondary"
                            onClick={removeTodo}
                            startIcon={<DeleteIcon />}
                            >
                            Удалить
                            </Button>
                        </Grid>
                        </div>
                    </Grid>}
                </Grid>
                
            </Grid>
        </div>
    )
}


export default Article
