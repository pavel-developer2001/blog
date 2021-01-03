import React from 'react';
import {Link} from 'react-router-dom'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    }
  }),
);

function ArticleListItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link to='/1'>Первый проект на material ui</Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="h6" color="textSecondary" component="span">
          20
        </Typography>
      </CardActions>
    </Card>
  );
}

const ArticleList = () => {
    return (
        <div className='article-list'>
            <Grid container>
                <Grid item xs={3}>
                    <ArticleListItem />
                </Grid>
                <Grid item xs={3}>
                    <ArticleListItem />
                </Grid>
                <Grid item xs={3}>
                    <ArticleListItem />
                </Grid>
                <Grid item xs={3}>
                    <ArticleListItem />
                </Grid>
                <Grid item xs={3}>
                    <ArticleListItem />
                </Grid>
                <Grid item xs={3}>
                    <ArticleListItem />
                </Grid>
                <Grid item xs={3}>
                    <ArticleListItem />
                </Grid>
            </Grid>
        </div>
    )
}

export default ArticleList