import React from "react";
import PropTypes from "prop-types";
//REACT ROUTER
import { withRouter } from "react-router-dom";
//MATERIAL UI
import Grid from "@material-ui/core/Grid";
//COMPONENTS
import NewsCard from "../components/NewsCard";
//REDUX
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../actions/actions";

class Home extends React.Component {
  componentDidMount() {
    const { actions, match } = this.props;
    actions.getNews(match.path);
  }

  render() {
    const { news } = this.props;
    return (
      <Grid container spacing={24}>
        {news &&
          news.map((item, index) => {
            return (
              <Grid item xs key={index}>
                <NewsCard item={item} index={index} />
              </Grid>
            );
          })}
      </Grid>
    );
  }

  componentDidUpdate(prevProps) {
    const { actions, match } = this.props;
    if (this.props.match.path !== prevProps.match.path) {
      actions.getNews(match.path);
    }
  }
}

Home.propTypes = {
  news: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    news: state.newsReducer.news
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home));
