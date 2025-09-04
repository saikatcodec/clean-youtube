import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import FormDialog from "../Dialog";
import { getItems, getPlaylists } from "../../api/fetchData";

function ButtonAppBar() {
  const [openDialog, setOpenDialog] = useState(false);

  // useEffect(() => {
  //   console.log("I am calling");
  //   getItems("PLEt8Tae2spYnHy378vMlPH--87cfeh33P").then((res) => {
  //     console.log("success", res);
  //   });
  // }, []);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDialogSubmit = async (playlistId) => {
    const playlistInfo = await getPlaylists(playlistId);
    console.log(playlistInfo);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Clean Youtube
            </Typography>
            <Button color="success" onClick={handleClickOpen}>
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

export default ButtonAppBar;
