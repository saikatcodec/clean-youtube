import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function FormDialog({ open, handleClose, handleDialogSubmit, loading }) {
  const [state, setState] = useState(""); // State for handling the input prompt

  const handleChange = (e) => {
    setState(e.target.value);
  };

  /**
   * Handle the loading state for 'ADD LINK' button click
   */
  useEffect(() => {
    if (!loading) {
      // Automatic close the dialog after load the content
      handleClose();
    }
  }, [loading]);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleDialogSubmit(state);
    setState("");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Playlist Link or ID</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new playlist please insert the playlist id or playlist link.
          Please make sure the link is correct. Otherwise we won't able to fetch
          the playlist information.
        </DialogContentText>
        <form onSubmit={handleSubmit} id="playlist-form">
          <TextField
            autoFocus
            required
            margin="dense"
            id="playlist"
            name="playlist"
            label="YouTube Playlist Link or ID"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            value={state}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={handleClose} disabled={loading}>
          Cancel
        </Button>
        <Button
          type="submit"
          color="success"
          form="playlist-form"
          loading={loading}
          loadingPosition="start"
        >
          ADD LINK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
