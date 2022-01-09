import {
  makeStyles,
  Container,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";

const userStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
}));
const Post = () => {
  const classes = userStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image="https://www.adorama.com/alc/wp-content/uploads/2019/06/photographer-niche-photography-camera-feature.jpg"
          title="my post"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            17 Types of Photography: Which Niche is Right for You?
          </Typography>
          <Typography variant="body2">
            But as you gain more experience, you’ll find that it’s hard to
            master a specific style if you don’t stick to it. In fact, it may be
            the very thing that could be holding you back from being successful
            in a particular niche. In this article, we’ll help you understand
            some of the most popular niches in photography, what they’re like,
            and how you can excel in each of them. But as you gain more
            experience, you’ll find that it’s hard to master a specific style if
            you don’t stick to it. In fact, it may be the very thing that could
            be holding you back from being successful in a particular niche. In
            this article, we’ll help you understand some of the most popular
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
