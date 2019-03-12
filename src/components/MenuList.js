import React from "react";
import PropTypes from "prop-types";
//REACT ROUTER
import { Link } from "react-router-dom";
//MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
//UTILS
import capitalizeFirstLetter from "../utils/CapitalizeFirstLetter";

const styles = {
  link: {
    textDecoration: "none"
  }
};

const MenuList = props => {
  const categories = [
    "home",
    "health",
    "politics",
    "science",
    "technology",
    "world"
  ];

  return (
    <List>
      {categories.map((category, index) => {
        return (
          <Link
            className={props.classes.link}
            to={`/${category === "home" ? "" : category}`}
            key={index}
          >
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={capitalizeFirstLetter(category)} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

MenuList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuList);
