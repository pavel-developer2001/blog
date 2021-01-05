import React from 'react'
import {Link} from 'react-router-dom'

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Filter from '../components/Filter'
import Search from '../components/Search'
import ArticleList from '../components/ArticleList'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

const Home = () => {
    const classes = useStyles()
    
    return (
        <div className='home'>
            <Search />
            <Filter />
            <Grid container>
                <Grid xs={3} item>
                    <Typography variant="h3" gutterBottom>
                    Публикации
                    </Typography>
                </Grid>
                <Grid xs={9} item>
                    <Link to='/create'>
                        <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        endIcon={<Icon>add_circle</Icon>}>
                            Создать
                        </Button>
                    </Link>
                </Grid>
            </Grid>
            <ArticleList />
        </div>
    )
}

export default Home
