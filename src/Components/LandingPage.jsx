import React from "react";
import Header from "./Header.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";
import Particles from "Particles";
import GridContainer from "_components/GridContainer";
import GridItem from "_components/GridItem";
import "index.css";
import HeaderLinks from "./HeaderLinks";
import TopSection from "Components/Sections/TopSection";
import SkillsSection from "./Sections/SkillsSection";
import AboutSection from "./Sections/AboutSection";
// import ProjectSection from "./Sections/ProjectSection";

import ContactSection from "./Sections/ContactSection";

class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;
    const styles = {
      parallax: {
        height: "1000vh",
        maxHeight: "1100px",
        overflow: "hidden",
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        margin: "0",
        padding: "0",
        border: "0",
        display: "flex",
        alignItems: "center"
      }
    };

    return (
      <>
        <Header
          color="transparent"
          brand={"danielle subang"}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 30,
            color: "white"
          }}
        />
        <div style={styles.parallax}>
          <Particles />
        </div>
        <TopSection />
        <GridContainer className={classes.mainRaised}>
          <GridItem cs={12} xs={12} md={12}>
            <AboutSection />
            <SkillsSection />
        
          </GridItem>
        </GridContainer>
        <ContactSection />
      </>
    );
  }
}

export default withStyles(componentsStyle)(LandingPage);
