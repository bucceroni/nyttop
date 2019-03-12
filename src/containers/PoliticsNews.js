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

class PoliticsNews extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props;
    actions.getNews(match.path);
  }

  render() {
    const { politics, classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {politics &&
            politics.map((item, index) => {
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

PoliticsNews.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  politics: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    politics: state.newsReducer.politics
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
)(withRouter(PoliticsNews));
