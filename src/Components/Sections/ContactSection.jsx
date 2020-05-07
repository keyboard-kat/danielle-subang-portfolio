import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";

import profile from "img/daniellesubang.jpg";
import classNames from "classnames";
import HeaderLinks from "Components/HeaderLinks";
import GridContainer from "_components/GridContainer";
import GridItem from "_components/GridItem";
class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );

    return (
      <div
        style={{ marginTop: "300px", marginBottom: "200px" }}
        className={classes.contactContainer}
      >
        <GridContainer>
          <GridItem cs={12} xs={12} md={12}>
            <div className={classes.profile}>
              {" "}
              <img
                src={profile}
                alt="Danielle Subang"
                className={imageClasses}
              />{" "}
          
              <div className={classes.description} style={{margin: "auto"}}>
              <GridItem cs={12} xs={12} md={12}>
              <p>
                I'm a full stack web application developer in Los Angeles experienced in Agile/Scrum Methodologies, 
                React, Node, Vue, PHP, SQL and Firebase. I value intuitive design and scalable software architecture.
              </p>
              <br />
</GridItem>
         
  
            <GridItem cs={12} xs={12} md={12} style={{paddingLeft: "35px"}}>
            <HeaderLinks />
            </GridItem>
            </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(componentsStyle)(ContactSection);
