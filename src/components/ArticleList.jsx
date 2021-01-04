import React from 'react';
import {Link, useHistory, withRouter} from 'react-router-dom'
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

function ArticleListItem({title, like, id}) {
  const classes = useStyles();
  const history = useHistory()

  const [likes, setLikes] = React.useState(like)
  const [check, setCheck] = React.useState(false)

  const handleLike = () => {
    if(check){
      setLikes(likes - 1)
      setCheck(!check)
    }
    if(!check){
      setLikes(likes +  1)
      setCheck(!check)
    }   
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p" onClick={() => {
            history.push(`/${id}`)}}>
          {title}
          {/* <Link to='/1'>{text}</Link> */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color={check ? 'secondary' : 'textSecondary'} onClick={handleLike}>
          <FavoriteIcon />
        </IconButton>
        <Typography variant="h6" color={check ? 'secondary' : 'textSecondary'} component="span">
          {likes}
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
                
                  {todos.map((obj) => {
                    return <Grid item key={obj.id}  xs={3}>
                    <ArticleListItem title={obj.title} id={obj.id} like={obj.like} />
                    </Grid>
                  })}  
                
                
            </Grid>
        </div>
    )
}

export default withRouter(ArticleList)