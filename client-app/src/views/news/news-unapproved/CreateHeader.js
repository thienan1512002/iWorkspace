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
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
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
    handlePrioChange,
    prioprity,
  } = props;
  return (
    <>
      <Dialog open={open} onClose={handleClose} height={500}>
        <DialogTitle>
          <Box display="flex" alignItems="center">
            <Box flexGrow={1}>Tạo tin mới</Box>
            <Box>
              <Fab size="small" onClick={handleClose} color="error">
                <CloseIcon fontSize="small" color="#ffffff" />
              </Fab>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Thêm mới tin tức</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tiêu đề"
            type="text"
            fullWidth
            value={txtTitle}
            onChange={handleChangeTitle}
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="name"
            label="Mô tả tin"
            type="text"
            fullWidth
            multiline
            minRows={3}
            value={txtDesc}
            onChange={handleChangeDesc}
            variant="outlined"
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Độ quan trọng</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              label="Content Type"
              value={prioprity}
              onChange={handlePrioChange}
            >
              <MenuItem value={0}>Tin khẩn</MenuItem>
              <MenuItem value={1}>Tin quan trọng</MenuItem>
              <MenuItem value={2}>Tin bình thường</MenuItem>
            </Select>
          </FormControl>
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
