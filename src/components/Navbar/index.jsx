import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import FormDialog from "../Dialog";

/**
 * Hide the Navbar while scrolling down-side and Show the Navbar while scrolling up
 * @param {Any} props Handle the children and window props
 * @returns JSX code
 */
function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

/**
 * Navbar of the website
 * @param {Object} props Handle the props object that are received from parent
 * @returns JSX code to render
 */
function Navbar(props) {
  const [openDialog, setOpenDialog] = useState(false);

  /**
   * To open the input dialog
   */
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  /**
   * To close the input dialog
   */
  const handleClose = () => {
    setOpenDialog(false);
  };

  /**
   * Handle function for 'Add Playlist' Button
   */
  const handleDialogSubmit = (playlistId) => {
    props.getPlaylistById(playlistId);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <HideOnScroll {...props}>
          <AppBar sx={{ px: 3, bgcolor: "white", color: "black" }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Clean Youtube
              </Typography>
              <Button
                variant="outlined"
                color="success"
                onClick={handleClickOpen}
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Playlist
              </Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </Box>
      <FormDialog
        open={openDialog}
        loading={props.loading}
        handleClose={handleClose}
        handleDialogSubmit={handleDialogSubmit}
      />
    </>
  );
}

export default Navbar;
