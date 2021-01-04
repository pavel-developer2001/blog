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
import {TodoContext} from '../TodoContext'

const Article= ({arcId}) => {
    const [off, setOff] = React.useState(false)
    const {todos, onRemoveTodo} = React.useContext(TodoContext)
    const findItem = todos.find((todo) => todo.id == arcId)
    const history = useHistory()
    
    const removeTodo = () => {
        if (global.confirm('Вы действительно хотите удалить?')) {
            onRemoveTodo(arcId)
            history.push('/')
          }
        
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
                    <Typography variant="h4" gutterBottom>
                        {findItem.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
        {findItem.text}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <IconButton onClick={() => setOff(!off)} aria-label="delete">
                        <MoreVertIcon />
                    </IconButton>
                    {off && <Grid container>
                        <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="default"
                            startIcon={<CreateIcon />}
                            >
                            Редактировать
                            </Button>
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
                    </Grid>}
                </Grid>
                
            </Grid>
        </div>
    )
}
// const ModalWindow = () => {
//     return (
//         <>
        
//         </>
//     )
// }

export default Article
