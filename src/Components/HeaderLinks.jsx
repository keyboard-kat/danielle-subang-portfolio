import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Tooltip from "@material-ui/core/Tooltip";
import headerLinksStyle from "../Styles/headerLinksStyle";
import Button from "_components/Button.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import classNames from "classnames";

import resume from "img/resume.jpg";
import Button1 from "@material-ui/core/Button";
function HeaderLinks({ ...props }) {
  const { classes, fullScreen } = props;

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <List className={classes.list}>
      {" "}
    
        <Tooltip
          title="View GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://github.com/keyboard-kat"
          target="_blank"
          size="sm" 
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
          </Button>
        </Tooltip>

        <Tooltip
          title="Find me on LinkedIn"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          size="sm"  
            color="transparent"
            href="https://www.linkedin.com/in/danielle-subang-a4b285119/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
        </Tooltip>
   
        <Tooltip
          title="Send an email"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          size="sm" 
            href="mailto:daniellesubang@gmail.com"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fa fa-envelope"} />
          </Button>
        </Tooltip>
     
     
        <Tooltip
          id="instagram-tooltip"
          title="Follow me"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
        <Button
          size="sm"  
            color="transparent"
            href="https://www.instagram.com/daniellesubang"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>

    
      <Button
        size="sm"  
          color="transparent"
          onClick={handleClickOpen}
          className={classes.navLink}
        >
          {" "}
         SEE MY RESUME
        </Button>
        <Dialog
          fullScreen={fullScreen}
          maxWidth={"sm"}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
     
          <DialogContent className={classes.container} cs={12} sm={12} md={12}>
            <DialogContentText id="alert-dialog-description" className={classNames(classes.mainRaised)}>
          
                     <img
                      style={{
                        width: "100%",
                        height: "100%"
                      }}
                      alt="danielle subang resume"
                      src={resume}
                    />
            
           
           
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button1 size="sm"  onClick={handleClose} color="primary">
              Close
            </Button1>
          </DialogActions>
        </Dialog>

    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
