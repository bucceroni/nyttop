import React from "react";
import PropTypes from "prop-types";
//MATERIAL UI
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//CONTAINERS
import NotFound from "../containers/NotFound";
//COMPONENTS
import DetailCard from "../components/DetailCard";

const styles = {
  root: {
    flexGrow: 1
  }
};
class DetailNews extends React.Component {
  render() {
    const { classes, location } = this.props;

    return (
      <div className={classes.root}>
        {location.news ? (
          <Grid container spacing={24}>
            <DetailCard item={location.news} />
          </Grid>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

DetailNews.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(DetailNews));
