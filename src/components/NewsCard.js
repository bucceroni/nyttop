import React from "react";
import PropTypes from "prop-types";
//REACT ROUTER
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
//MOMENT
import moment from "moment";
//MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 300,
    maxHeight: 600,
    margin: 5
  },
  link: {
    textDecoration: "none"
  },
  media: {
    height: 140
  }
};

const NewsCard = props => {
  return (
    <Link
      className={props.classes.link}
      to={{
        pathname: `${
          props.location.pathname === "/" ? "/home" : props.location.pathname
        }/${props.index}`,
        news: props.item
      }}
    >
      <Card className={props.classes.card}>
        <CardActionArea>
          <CardMedia
            className={props.classes.media}
            image={
              props.item.multimedia[2]
                ? props.item.multimedia[2].url
                : "http://www.vardan.in/assets/frontend/images/no-image.jpg"
            }
            title={props.item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.item.title}
            </Typography>
            <Typography component="p">
              Published date: {moment(props.item.published_date).format("LLL")}
            </Typography>
            <Typography component="p">{props.item.byline}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

NewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object
};

export default withRouter(withStyles(styles)(NewsCard));
