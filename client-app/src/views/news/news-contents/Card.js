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
    seeDetails,
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
        onClick={seeDetails}
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
       
      </Card>
    </>
  );
}
export default CardNews;
