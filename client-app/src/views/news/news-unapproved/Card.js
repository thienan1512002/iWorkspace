import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import UpdateDisabledIcon from "@mui/icons-material/UpdateDisabled";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { format } from "date-fns";
import vnVNLocale from "date-fns/locale/vi";
//import { CloseIcon, AddIcon } from "@mui/icons-material";
function CardNews(props) {
  let {
    newsTitle,
    newsDesc,
    newsDate,
    newsUser,
    toggleApprove,
    approved,
    isFinished,
    checkFinished,
    seeDetails,
    updated,
  } = props;

  return (
    <>
      <Card
        sx={{
          width: 350,
          height: 350,
          margin: "5px",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
            align="center"
          >
            {format(new Date(newsDate), "dd/MM/yyyy HH", {
              locale: vnVNLocale,
            })}{" "}
            giờ {format(new Date(newsDate), "mm", { locale: vnVNLocale })} phút
          </Typography>
          <Typography variant="h5" component="div" align="center">
            {newsTitle}
          </Typography>
          <Typography color="text.secondary" align="center">
            {newsDesc}
          </Typography>
          <Typography variant="body2" align="center">
            <br />
            Người đăng : {newsUser}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", mt: 5 }}>
          <Button
            size="medium"
            color={approved === true ? "error" : "success"}
            variant="contained"
            onClick={toggleApprove}
            disabled={!isFinished}
          >
            {approved === true ? <UpdateDisabledIcon /> : <HowToRegIcon />}
          </Button>
          <Button
            size="medium"
            color="success"
            variant="contained"
            disabled={isFinished}
            onClick={checkFinished}
          >
            <CheckCircleIcon />
          </Button>
          <Button
            size="medium"
            color="info"
            variant="contained"
            onClick={seeDetails}
          >
            <InfoIcon />
          </Button>
          <Button
            size="medium"
            color="warning"
            variant="contained"
            disabled={isFinished}
            onClick={updated}
          >
            <ModeEditOutlineIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default CardNews;
