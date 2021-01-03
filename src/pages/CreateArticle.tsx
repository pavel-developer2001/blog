import React from 'react'
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
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
    return (
        <div className='create-article'>
            <Grid container>
                <Grid item xs={2}>
                    <Link to='/'>
                        <IconButton aria-label="delete">
                            <ArrowBackIcon />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                <form className={classes.root} noValidate autoComplete="off">
                    <div>
                        <TextField
                        id="outlined-textarea"
                        label="Заголовок"
                        multiline
                        variant="outlined"
                        />
                        <TextField
                        id="outlined-multiline-static"
                        label="Текст"
                        multiline
                        rows={4}
                        variant="outlined"
                        />
                    </div>
                    </form>
                </Grid>
                <Grid item xs={4}>
                    <Button className={classes.btn} variant="contained" color="primary" disableElevation>
                    Опубликовать
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default CreateArticle
