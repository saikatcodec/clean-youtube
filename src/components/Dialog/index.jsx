import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function FormDialog({ open, handleClose }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.playlist.value);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Playlist Link</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add video, insert a Youtube playlist link.
        </DialogContentText>
        <form onSubmit={handleSubmit} id="playlist-form">
          <TextField
            autoFocus
            required
            margin="dense"
            id="playlist"
            name="playlist"
            label="YouTube Playlist Link"
            type="text"
            fullWidth
            variant="standard"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="playlist-form">
          ADD LINK
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default FormDialog;
