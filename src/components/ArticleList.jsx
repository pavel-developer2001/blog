import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import { TodoContext } from '../TodoContext';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    }
  }),
);

function ArticleListItem({text, like, id}) {
  const classes = useStyles();
  const history = useHistory()
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {/* <Link to={() => history.push(`/${id}`)}>{text}</Link> */}
          <Link to='/1'>{text}</Link>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="h6" color="textSecondary" component="span">
          {like}
        </Typography>
      </CardActions>
    </Card>
  );
}

const ArticleList = () => {
  const {todos} = React.useContext(TodoContext)
    return (
        <div className='article-list'>
            <Grid container>
                
                  {todos.map(obj => {
                    return <Grid item xs={3}>
                    <ArticleListItem text={obj.text} id={obj.id} key={obj.id} like={obj.like} />
                    </Grid>
                  })}  
                
                
            </Grid>
        </div>
    )
}

export default ArticleList