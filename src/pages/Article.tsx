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

const Article = () => {
    const [off, setOff] = React.useState(false)
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
                        Мой первый проект на material ui
                    </Typography>
                    <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
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
