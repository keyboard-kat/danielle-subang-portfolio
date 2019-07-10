import { container, defaultFont } from "./main.jsx";
import imageStyle from "Styles/imageStyle.jsx";
const componentsStyle = {
  container,
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "1.5",
    fontWeight: "400",
    fontSize: "16px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "10px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "purple",
      background: "white"
    }
  },

  mainHeading: {
    marginBottom: ".2rem",
    fontSize: "5rem",
    marginTop: "0px",
    minHeight: "32px",
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    ...defaultFont
  },

  subHeading: {
    marginBottom: "50rem",
    fontSize: "1.5rem",
    marginTop: "0px",
    minHeight: "32px",
    fontWeight: "500",
    color: "#FFFFFF",
    textAlign: "center",
    ...defaultFont
  },

  title: {
    marginBottom: "1rem",
    fontSize: "2rem",
    marginTop: "0px",
    minHeight: "32px",
    fontWeight: "500",
    color: "white",
    textAlign: "center",
    ...defaultFont
  },

  buttons: {
    color: "white"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "24px",
    color: "#999"
  },
  contactSocials: {
    paddingBottom: "30%",

    transform: "none",
    height: "100%",
    lineHeight: "41px",
    fontSize: "24px",
    color: "#999"
  },

  profile: {
    textAlign: "center",
    "& img": {
      maxWidth: "150px",
      margin: "0 auto",
      transform: "translate3d(0, -50%, 0)"
    }
  },

  description: {
    fontSize: "24px",
    maxWidth: "350px",
 
    color: "#FFFFFF",
    textAlign: "center !important"
  },
  name: {
    marginTop: "-40px",
    marginBottom: "25px",
    fontSize: "24px"
  },
  ...imageStyle,

  contactText: { textAlign: "center", ...defaultFont, color: "#FFFFFF" },
  contactContainer: {
    maxWidth: "500px",
    margin: "auto",
    ...defaultFont,
    color: "#FFFFFF"
  },
  mainSubText: {
    textAlign: "center",
    fontSize: "1.5rem",
    ...defaultFont,
    margin: "80px"
  },
  mainText: {
    textAlign: "center",
    fontSize: ".5em",
    ...defaultFont
  },
  mainRaised: {
    margin: "auto",

    background: "transparent",
    position: "relative",
    zIndex: "3",
    color: "white",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  aboutSection: {
    marginLeft: "20px",
    marginRight: "20px",
    maxWidth: "1000px"
  },
  aboutHeading: {
    textAlign: "left",
    fontSize: "2.7rem",
    ...defaultFont,
    color: "#FFFFFF"
  },
  aboutText: {
    fontSize: "2rem",
    ...defaultFont,
    color: "#FFFFFF",
    marginLeft: "10px"
  },

  skillsHeading: {
    fontSize: "2.7rem",
    ...defaultFont,
    color: "#FFFFFF"
  }
};

export default componentsStyle;
