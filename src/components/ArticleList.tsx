import React from "react";
import { useHistory, withRouter } from "react-router-dom";
import { TodoContext } from "../TodoContext";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    link: {
      cursor: "pointer",
    },
  })
);

type ArticleItem = {
  title: string;
  like: number;
  id: number;
  date: number;
};

const ArticleListItem: React.FC<ArticleItem> = ({ title, like, id, date }) => {
  const classes = useStyles();
  const history = useHistory();

  const [likes, setLikes] = React.useState(like);
  const [check, setCheck] = React.useState(false);

  const handleLike = () => {
    if (check) {
      setLikes(likes - 1);
      setCheck(!check);
    }
    if (!check) {
      setLikes(likes + 1);
      setCheck(!check);
    }
  };

  return (
    <Card className={classes.root}>
      <CardHeader subheader={date} />
      <CardContent>
        <Typography
          variant="body2"
          className={classes.link}
          color="textSecondary"
          component="p"
          onClick={() => {
            history.push(`/${id}`);
          }}
        >
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          color={check ? "secondary" : "default"}
          onClick={handleLike}
        >
          <FavoriteIcon />
        </IconButton>
        <Typography
          variant="h6"
          color={check ? "secondary" : "textSecondary"}
          component="span"
        >
          {likes}
        </Typography>
      </CardActions>
    </Card>
  );
};

const ArticleList = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(false);
  const { todos } = React.useContext(TodoContext);
  const [todos2, setTodos2] = React.useState(todos);

  React.useEffect(() => {
    setIsLoading(false);
    setIsError(false);

    setTodos2(todos);
  }, [todos, todos2]);

  return (
    <div className="article-list">
      <Grid container>
        {isLoading && <p>Loading</p>}
        {isError && <p>Error</p>}
        {todos2.length === 0 && <p>Нет публикаций</p>}
        {todos2.map((obj: ArticleItem) => {
          return (
            <Grid item key={obj.id} xs={3}>
              <ArticleListItem
                title={obj.title}
                id={obj.id}
                like={obj.like}
                date={obj.date}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default withRouter(ArticleList);
