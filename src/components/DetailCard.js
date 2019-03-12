import React from "react";
import PropTypes from "prop-types";
//MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    maxWidth: 345,
    margin: 20
  },
  media: {
    height: 140
  }
};

const DetailCard = props => {
  console.log(props);
  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        Title: {props.item.title}
      </Typography>
      {props.item.kicker !== "" ? (
        <Typography gutterBottom variant="h5" component="h2">
          Kicker: {props.item.kicker}
        </Typography>
      ) : null}
      <Typography component="p">Abstract: {props.item.abstract}</Typography>
      <Typography component="p">
        Published date: {props.item.published_date}
      </Typography>
      <Typography component="p">By line: {props.item.byline}</Typography>
    </div>
  );
};

DetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object
};

export default withStyles(styles)(DetailCard);
