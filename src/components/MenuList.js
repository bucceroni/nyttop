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
//ICONS
import IconHome from "@material-ui/icons/Home";
import IconFavoriteBorder from "@material-ui/icons/FavoriteBorder";
import IconAccountBalance from "@material-ui/icons/AccountBalance";
import IconWbIncandescent from "@material-ui/icons/WbIncandescent";
import IconMemory from "@material-ui/icons/Memory";
import IconLanguage from "@material-ui/icons/Language";
//UTILS
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

const styles = {
  link: {
    textDecoration: "none"
  },
  icon: {
    marginLeft: 7
  }
};

const MenuList = props => {
  const categories = [
    {
      name: "home",
      icon: <IconHome />
    },
    {
      name: "health",
      icon: <IconFavoriteBorder />
    },
    {
      name: "politics",
      icon: <IconAccountBalance />
    },
    {
      name: "science",
      icon: <IconWbIncandescent />
    },
    {
      name: "technology",
      icon: <IconMemory />
    },
    {
      name: "world",
      icon: <IconLanguage />
    }
  ];

  return (
    <List>
      {categories.map((category, index) => {
        return (
          <Link
            className={props.classes.link}
            to={`/${category.name === "home" ? "" : category.name}`}
            key={index}
          >
            <ListItem button>
              <ListItemIcon className={props.classes.icon}>{category.icon}</ListItemIcon>
              <ListItemText primary={capitalizeFirstLetter(category.name)} />
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
