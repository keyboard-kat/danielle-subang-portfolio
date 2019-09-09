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
          <h1 className={classes.mainHeading}>Hi, I'm Danielle</h1>
          <div className={classes.subHeading}>
            FULL STACK | REACT | VUE | NODE
          </div>
        </GridItem>
      </GridContainer>
    );
  }
}
export default withStyles(componentsStyle)(TopSection);
