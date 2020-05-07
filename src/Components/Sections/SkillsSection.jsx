import React from "react";
import componentsStyle from "Styles/componentsStyle";
import GridContainer from "_components/GridContainer";
import GridItem from "_components/GridItem";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "_components/Button.jsx";
class SkillsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer className={classes.aboutSection}>
        <GridItem cs={10} xs={12} md={10}>
          <div className={classes.aboutText}>
            <div className={classes.aboutHeading}>TECHNOLOGIES</div>
            <div className={classes.buttons}>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                NODE
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                REACT
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                REDUX
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                REACT HOOKS
              </Button>
                 <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                  VUEX
              </Button>
                  <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                  FIREBASE
              </Button>
          

              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                JavaScript
              </Button>

              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                jQuery
              </Button>
              <Button
                size="sm"
                color="primary"
                className={classes.navLink}
                target="_blank"
              >
                HTML5
              </Button>

              <Button
                size="sm"
                color="primary"
                target="_blank"
                className={classes.navLink}
              >
                CSS
              </Button>
              <Button
                size="sm"
                color="primary"
                target="_blank"
                className={classes.navLink}
              >
                SQL Server
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                AJAX/AXIOS
              </Button>
              <Button
                size="sm"
                color="primary"
                className={classes.navLink}
                target="_blank"
              >
                Bootstrap
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                Material UI
              </Button>

              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                TFS{" "}
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                Git
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                PHP
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                Wordpress
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                Nextjs
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                Express API
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                Photoshop
              </Button>
              <Button
                size="sm"
                className={classes.navLink}
                color="primary"
                target="_blank"
              >
                Illustrator
              </Button>
            </div>
          </div>
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(componentsStyle)(SkillsSection);
