import { React, useState, useEffect } from "react";
import axios from "utils/axios";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { format } from "date-fns";
import vnVNLocale from "date-fns/locale/vi";

const url = "https://localhost:5001/api/News/";

function Content() {
  const [contents, setContents] = useState(null);
  const id = useParams();

  useEffect(() => {
    axios.get(url + id.id).then((data) => {
      setContents(data.data);
      console.log(contents);
    });
  }, [contents]);
  //console.log(contents);
  return (
    <Grid container>
      {contents &&
        contents.map((content) => {
          return (
            <Grid item xs={12}>
              <h1 align="center">{content.newsTitle}</h1>
              <h4 align="center">Người đăng : {content.newsUser}</h4>
              <h4 align="center">
                {format(new Date(content.newsDate), "dd/MM/yyyy HH:mm", {
                  locale: vnVNLocale,
                })}
              </h4>
              <h4 align="center">{content.newsDesc}</h4>
              {content.newsContents.map((item) => {
                if (item.contentType === "img") {
                  return (
                    <img
                      src={"https://localhost:5001/Images/" + item.content}
                      className="imgCenter"
                      style={{
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        maxWidth: "100%",
                        maxHeight: "100%",
                      }}
                    />
                  );
                } else {
                  return <h3>{item.content}</h3>;
                }
              })}
            </Grid>
          );
        })}
    </Grid>
  );
}
export default Content;
