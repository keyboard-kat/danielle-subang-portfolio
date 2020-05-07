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
        style={{
          marginTop: "250px", marginBottom: "50px",
          background: "blueviolet"
        }}
        className={classes.contactContainer}
      >
      
            <div className={classes.profile}>
              {" "}
              <img
                src={profile}
                alt="Danielle Subang"
                className={imageClasses}
              />{" "}
            <HeaderLinks />
              <div className={classes.description} style={{margin: "auto", fontSize: "1.3em", paddingTop: "20px"}}>
        
         
                I'm a full stack web application developer in Los Angeles experienced in Agile/Scrum Methodologies, 
                React, Node, Vue, PHP, SQL and Firebase. I value clean code, intuitive design and scalable software architecture.
         
              <br />         
  
          
   
            </div>
            </div> 
     
      </div>
    );
  }
}
export default withStyles(componentsStyle)(ContactSection);
