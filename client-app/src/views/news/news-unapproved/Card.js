import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { format } from "date-fns";
import vnVNLocale from "date-fns/locale/vi";

export default function CardNews(props) {
  const [
    Id,
    newsTitle,
    newsDesc,
    newsDate,
    newsUser,
    approved,
    isFinished,
    toggleApproved,
    toggleFinished,
  ] = props;

  return (
    <>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {format(new Date(newsDate), "dd/MM/yyyy", { locale: vnVNLocale })}
          </Typography>
          <Typography variant="h5" component="div">
            {newsTitle}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {newsDesc}
          </Typography>
          <Typography variant="body2">
            {newsDate}
            <br />
            {newsUser}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}
