import React from "react";
import PropTypes from "prop-types";
//REACT ROUTER
import { Link } from "react-router-dom";
//MATERIAL UI
import { withRouter } from "react-router-dom";
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

class Pages extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getNews(this.props.match.path);
  }

  handleDetailCard = (item, index) => {
    return <Link to={`${item.section}/${index}`}>Detail</Link>;
  };

  render() {
    const { politics, classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          {politics &&
            politics.map((item, index) => {
              return (
                <Grid item xs key={index}>
                  <NewsCard
                    item={item}
                    detail={this.handleDetailCard(item, index)}
                  />
                </Grid>
              );
            })}
        </Grid>
      </div>
    );
  }
}

Pages.propTypes = {
  classes: PropTypes.object.isRequired,
  actions: PropTypes.any,
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
)(withRouter(Pages));
