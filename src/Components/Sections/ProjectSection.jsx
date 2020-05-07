import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";
import GridItem from "_components/GridItem";
import GridContainer from "_components/GridContainer";

class ProjectSection extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <GridContainer className={classes.aboutSection}>
          <GridItem cs={10} xs={12} md={10}>
            <div className={classes.aboutText}>
              <div className={classes.aboutHeading}>PROJECTS</div>
              <div style={{ marginLeft: "5px", margin: "20px" }}>
                Deploying and optimizing client-side solutions that users love
                with React-Redux.
                <br /> Developing scalable software architecture and designing
                custom API's for database access layers using Node.{" "}
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </>
    );
  }
}

export default withStyles(componentsStyle)(ProjectSection);
