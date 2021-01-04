import React from 'react'
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import {TodoContext} from '../TodoContext'

const Article= ({id}) => {
    const [off, setOff] = React.useState(false)
    const {todos} = React.useContext(TodoContext)
    // const item = todos.filter((prev) => prev.filter((_, cId) => id == cId))
    // console.log(item)
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
                        {todos.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
        {todos.text}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <IconButton onClick={() => setOff(!off)} aria-label="delete">
                        <MoreVertIcon />
                    </IconButton>
                    {off && <ModalWindow />}
                </Grid>
                
            </Grid>
        </div>
    )
}
const ModalWindow = () => {
    return (
        <>
        <Grid container>
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
                startIcon={<DeleteIcon />}
                >
                Удалить
                </Button>
            </Grid>
        </Grid>
        </>
    )
}

export default Article
