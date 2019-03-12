import React from "react";
import PropTypes from "prop-types";
//REACT ROUTER
import { withRouter } from "react-router-dom";
//MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
//COMPONENTS
import NewsCard from "../components/NewsCard";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";
import compose from "recompose/compose";

const styles = {
  root: {
    flexGrow: 1
  }
};

class TechnologyNews extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props;
    actions.getNews(match.path);
  }

  render() {
    const { technology, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {technology &&
            technology.map((item, index) => {
              return (
                <Grid item xs key={index}>
                  <NewsCard item={item} index={index} />
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

TechnologyNews.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  technology: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    technology: state.newsReducer.technology
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      {
        ...actions
      },
      dispatch
    )
  };
};

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(withRouter(TechnologyNews));