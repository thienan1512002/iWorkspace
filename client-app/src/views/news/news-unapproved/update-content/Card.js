import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import vnVNLocale from "date-fns/locale/vi";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import Box from "@mui/material/Box";
function CardNews(props) {
  let {
    contentType,
    content,
    contentDate,
    sequence,
    back,
    forward,
    flag,
    open,
  } = props;

  return (
    <>
      <Card
        sx={{
          width: 400,
          height: 375,
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
            {format(new Date(contentDate), "dd/MM/yyyy HH:mm", {
              locale: vnVNLocale,
            })}
          </Typography>
          <Typography variant="h5" component="div" align="center">
            {contentType === "txt" ? "Text" : "Image"}
          </Typography>
          {contentType === "txt" ? (
            <Typography variant="h5" align="center">
              {content}
            </Typography>
          ) : (
            <Box
              sx={{
                width: 350,
                height: 150,
              }}
            >
              <img
                src={"https://localhost:5001/Images/" + content}
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  maxWidth: "100%",
                  maxHeight: "100%",
                  overflow: "wrap",
                }}
              />
            </Box>
          )}
        </CardContent>
        <CardActions sx={{ justifyContent: "center", mt: 5 }}>
          {sequence > 0 ? (
            <Button variant="contained" onClick={forward}>
              <ArrowBackIcon />
            </Button>
          ) : (
            ""
          )}
          {flag === 0 ? (
            <Button variant="contained" onClick={back}>
              <ArrowForwardIcon />
            </Button>
          ) : (
            ""
          )}

          <Button variant="contained" onClick={open}>
            <ModeEditOutlineIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
export default CardNews;
