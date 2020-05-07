import React from "react";
import GridContainer from "_components/GridContainer";
import GridItem from "_components/GridItem";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";

class TopSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <GridContainer
        style={{ marginTop: "-600px" }}
        className={classes.container}
      >
        <GridItem cs={12} xs={12} md={12}>
          <h2 className={classes.mainHeading}>Hi, I'm Danielle</h2>
          <div className={classes.subHeading}>
            SOFTWARE ENGINNER <p>
            REACT | VUE | NODE | PHP
          </p>
              </div>
     
          
     
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(componentsStyle)(TopSection);
