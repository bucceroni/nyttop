import React, { Component } from "react";
import PropTypes from "prop-types";
//MATERIAL UI
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    flexGrow: 1
  }
};
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

export default withRouter(withStyles(styles)(NotFound));
