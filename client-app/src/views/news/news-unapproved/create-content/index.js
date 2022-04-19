import { React, useRef, useState, useEffect } from "react";
import axios from "utils/axios";
import useAuth from "hooks/useAuth";
import { useParams } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import TextField from "@mui/material/TextField";
import { DropzoneDialog } from "material-ui-dropzone";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "https://localhost:5001/api/text/";
const urlImg = "https://localhost:5001/api/newscontents/";
function CreateNewsContent() {
  const user = useAuth();
  const { id } = useParams();
  const [open, setOpen] = useState(true);
  const [contentType, setContentType] = useState("");
  const [disable, setDisable] = useState(false);
  const [txtContent, setTxtContent] = useState(null);
  const [file, setFile] = useState(null);
  const ref = useRef();
  const handleTextContent = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        content: txtContent,
        newsHeaderId: id,
        contentUser: user.user.name,
        contentType: contentType,
      })
      .then((result) => {
        if (result.status === 200) {
          toast.success("Add new Text Content Success");
          setDisable(false);
          setTxtContent("");
        }
      })
      .catch((error) => {
        toast.error("Something error");
      });
  };

  const handleImageContent = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("imageFiles", file);
    formData.append("newsHeaderId", id);
    formData.append("contentType", contentType);
    formData.append("contentUser", user.user.name);
    axios.post(urlImg, formData).then((res) => {
      if (res.status === 200) {
        toast.success("Add new Image Content Success");
        setDisable(false);
        setFile(null);
      }
    });
  };
  let content;
  if (contentType === "txt") {
    content = (
      <Box minWidth={120}>
        <TextField
          fullWidth
          labelId="demo-simple-select-label"
          label="Text Content"
          variant="outlined"
          minRows={10}
          value={txtContent}
          style={{ width: 500, marginBottom: "10px" }}
          onChange={(e) => setTxtContent(e.target.value)}
        />
        <Button variant="contained" color="success" onClick={handleTextContent}>
          Add Content
        </Button>
      </Box>
    );
  }
  if (contentType === "img") {
    content = (
      <label htmlFor="contained-button-file">
        <form onSubmit={handleImageContent}>
          <DropzoneDialog
            acceptedFiles={["image/*"]}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={5000000}
            open={open}
            onClose={() => {
              setOpen(false);
              setContentType(null);
              setDisable(false);
            }}
            onSave={(files) => {
              console.log("Files:", files[0]);
              setFile(files[0]);
              setOpen(false);
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
          />
          <br />
          <br />
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </form>
      </label>
    );
  }
  const handleChange = (e) => {
    setContentType(e.target.value);
    setDisable(true);
    setOpen(true);
  };
  return (
    <div className="container">
      <Grid container>
        <Grid item xs={12} md={6} lg={4}></Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormControl fullWidth disabled={disable}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              defaultValue={contentType}
              label="Content Type"
              onChange={handleChange}
            >
              <MenuItem value={"txt"}>Text Content</MenuItem>
              <MenuItem value={"img"}>Image Content</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6} lg={4}></Grid>
      </Grid>
      <br></br>
      <Grid container>
        <Grid item xs={12} md={6} lg={4}></Grid>
        <Grid item xs={12} md={6} lg={4}>
          {content}
        </Grid>
        <Grid item xs={12} md={6} lg={4}></Grid>
      </Grid>
      <ToastContainer />
    </div>
  );
}

export default CreateNewsContent;
