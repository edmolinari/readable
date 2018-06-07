import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, withStyles } from "material-ui";

import footerStyle from "assets/jss/material-dashboard-react/footerStyle";

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#categories" className={classes.block}>
                Categories
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#Posts" className={classes.block}>
                Posts
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#about" className={classes.block}>
                About
              </a>
            </ListItem>
          </List>
        </div>
        <p className={classes.right}>
          <span>
            &copy; {1900 + new Date().getYear()}{" "}
            Redux + Material UI project
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
