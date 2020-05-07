import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";

import GridItem from "_components/GridItem";
import GridContainer from "_components/GridContainer";

class AboutSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <GridContainer className={classes.aboutSection}>
          <GridItem cs={12} xs={12} md={12}>
            <div className={classes.aboutText}>
              <div className={classes.aboutHeading}>SKILLS</div>
              <div style={{ marginLeft: "5px" }}>
                Deploying and optimizing client-side solutions that users love
                with React-Redux and Vuex.</div>
                <div style={{ marginLeft: "5px", paddingTop: "20px", paddingBottom: "50px" }}>
                Developing robust and scalable software architecture and designing
                custom API's for database access layers using Node.{" "}
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </>
    );
  }
}

export default withStyles(componentsStyle)(AboutSection);
