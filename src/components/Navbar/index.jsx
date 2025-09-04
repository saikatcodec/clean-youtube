import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import FormDialog from "../Dialog";
import { Container } from "@mui/material";

function Navbar({ getPlaylistById }) {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDialogSubmit = (playlistId) => {
    getPlaylistById(playlistId);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" sx={{ px: 3 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clean Youtube
            </Typography>
            <Button
              variant="outlined"
              color="success"
              onClick={handleClickOpen}
            >
              Add Playlist
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <FormDialog
        open={openDialog}
        handleClose={handleClose}
        handleDialogSubmit={handleDialogSubmit}
      />
    </>
  );
}

export default Navbar;
