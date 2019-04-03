import React from "react";
import PropTypes from "prop-types";
//REACT ROUTER
import { withRouter } from "react-router-dom";
//MATERIAL UI
import Grid from "@material-ui/core/Grid";
//CONTAINERS
import NotFound from "../containers/NotFound";
//COMPONENTS
import DetailCard from "../components/DetailCard";

class DetailNews extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <div>
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
  location: PropTypes.object.isRequired
};

export default withRouter(DetailNews);
