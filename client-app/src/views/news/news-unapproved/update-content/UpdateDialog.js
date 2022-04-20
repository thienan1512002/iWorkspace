import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
function UpdateContent(props) {
  const {
    open,
    handleClose,
    addNewsHeader,
    show,
    contentType,
    content,
    handleChange,
    update,
  } = props;
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>Update Content</Box>
            <Box>
              <Fab size="small" onClick={handleClose} color="error">
                <CloseIcon fontSize="small" color="#ffffff" />
              </Fab>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          {contentType === "txt" ? (
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="News title"
              type="text"
              fullWidth
              variant="outlined"
              value={content}
              multiline
              minRows={20}
              minColumns={10}
              onChange={handleChange}
            />
          ) : (
            "Img"
          )}
        </DialogContent>
        <DialogActions>
          <Fab
            variant="extended"
            size="medium"
            color="success"
            aria-label="add"
            onClick={update}
          >
            <AddIcon />
            Update
          </Fab>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default UpdateContent;
