import * as React from "react";
import axios from "utils/axios";
import useAuth from "hooks/useAuth";
import CardNews from "./Card";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
const url = "https://localhost:5001/api/NewsHeaders";

function News() {
  const [news, setNews] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [txtTitle, setTitle] = React.useState("");
  const [txtDesc, setDesc] = React.useState("");
  const [show, setShow] = React.useState(false);
  const user = useAuth();
  const redirect = useNavigate();
  React.useEffect(() => {
    loadData();
  }, [news]);

  const loadData = () => {
    axios
      .get(url)
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const seeDetails = (id) => {
    redirect("/news/news-details/" + id);
  };

  return (
    <>
      <Grid container>
        {news &&
          news
            .sort((a, b) => b.id - a.id)
            .filter((c) => c.approved === true)
            .map((element) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={element.id}>
                  <CardNews
                    newsTitle={element.newsTitle}
                    newsDesc={element.newsDesc}
                    newsUser={element.newsUser}
                    newsDate={element.newsDate}
                    seeDetails={() => seeDetails(element.id)}
                  />
                </Grid>
              );
            })}
      </Grid>
    </>
  );
}
export default News;
