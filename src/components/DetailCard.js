import React from "react";
import PropTypes from "prop-types";
//MOMENT
import moment from "moment";
//MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    marginBottom: 15
  }
};

const DetailCard = props => {
  return (
    <div className={props.classes.root}>
      <Typography
        className={props.classes.root}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {props.item.title}
      </Typography>
      {props.item.kicker !== "" ? (
        <div>
          <Typography variant="subheading" gutterBottom>
            Kicker
          </Typography>
          <Typography
            className={props.classes.root}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {props.item.kicker}
          </Typography>
        </div>
      ) : null}
      <Typography variant="subheading" gutterBottom>
        Abstract
      </Typography>
      <Typography className={props.classes.root} component="p">
        {props.item.abstract}
      </Typography>
      <Typography component="p">
        Published date: {moment(props.item.published_date).format("LLL")}
      </Typography>
      <Typography component="p">{props.item.byline}</Typography>
    </div>
  );
};

DetailCard.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object
};

export default withStyles(styles)(DetailCard);
