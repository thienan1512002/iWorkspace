import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import  AddIcon  from "@mui/icons-material/Add";
import  CloseIcon  from "@mui/icons-material/Close";
 function CreateHeader(props) {
    const {
      open,
      handleClose,
      addNewsHeader,
      txtTitle,
      txtDesc,
      show,
      handleChangeTitle,
      handleChangeDesc,
     } = props;
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>Add News</Box>
            <Box>
              <Fab size="small" onClick={handleClose} color="error">
                <CloseIcon fontSize="small" color="#ffffff" />
              </Fab>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your News Title and News Description here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="News title"
            type="text"
            fullWidth
            value={txtTitle}
            onChange={handleChangeTitle}
            variant="outlined"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="News description"
            type="text"
            fullWidth
            value={txtDesc}
            onChange={handleChangeDesc}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          {show ? (
            <Fab
              variant="extended"
              size="medium"
              color="success"
              aria-label="add"
              onClick={addNewsHeader}
            >
              <AddIcon />
              Add News
            </Fab>
          ) : (
            ""
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CreateHeader;
