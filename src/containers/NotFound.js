import React, { Component } from "react";
import PropTypes from "prop-types";
//REACT ROUTER
import { withRouter } from "react-router-dom";
//MATERIAL UI
import Grid from "@material-ui/core/Grid";

class NotFound extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          Not Found
        </Grid>
      </div>
    );
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  extra: PropTypes.string
};

export default withRouter(NotFound);
