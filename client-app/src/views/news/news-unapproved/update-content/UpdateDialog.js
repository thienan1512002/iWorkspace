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
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@mui/material/Button";
import useAuth from "hooks/useAuth";
import axios from "utils/axios";

function UpdateContent(props) {
  let {
    open,
    handleClose,
    newsHeaderId,
    show,
    contentType,
    content,
    handleChange,
    update,
    handleImageContent,
    id,
  } = props;
  const user = useAuth();
  const updateImageContent = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("id", id);
    formData.append("imageFiles", e.target[0].files[0]);
    formData.append("imageSrc", e.target[0].files[0].name);
    formData.append("newsHeaderId", newsHeaderId);
    formData.append("contentType", contentType);
    formData.append("contentUser", user.user.name);
    axios
      .put("https://localhost:5001/api/newscontents/" + id, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth>
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
              minRows={10}
              onChange={handleChange}
            />
          ) : (
            <form onSubmit={updateImageContent}>
              <input type="file" />
              <Button variant="contained" color="success" type="submit">
                Submit
              </Button>
            </form>
            // <form onSubmit={handleImageContent}>
            //   <DropzoneDialog
            //     acceptedFiles={["image/*"]}
            //     cancelButtonText={"cancel"}
            //     submitButtonText={"submit"}
            //     maxFileSize={5000000}
            //     open={open}
            //     onClose={handleClose}
            //     onSave={
            //       ((files) => {
            //         let formData = new FormData();
            //         formData.append("id", id);
            //         formData.append("imageFiles", files[0]);
            //         formData.append("imageSrc", files[0].name);
            //         formData.append("newsHeaderId", newsHeaderId);
            //         formData.append("contentType", contentType);
            //         formData.append("contentUser", user.user.name);
            //         axios
            //           .put(
            //             "https://localhost:5001/api/newscontents/" + id,
            //             formData
            //           )
            //           .then((response) => {
            //             console.log(response);
            //           })
            //           .catch((error) => {});
            //       },
            //       handleClose)
            //     }
            //     showPreviews={true}
            //     showFileNamesInPreview={true}
            //   />
            //   <br />
            //   <br />
            // </form>
          )}
        </DialogContent>
        {contentType === "txt" ? (
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
        ) : (
          ""
        )}
      </Dialog>
    </>
  );
}

export default UpdateContent;
