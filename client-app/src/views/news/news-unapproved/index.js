import * as React from "react";
import axios from "utils/axios";
import useAuth from "hooks/useAuth";
import CardNews from "./Card";
import TableNews from "./DataTable";
import CreateHeader from "./CreateHeader";
import { Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import useConfig from "hooks/useConfig";

const url = "https://localhost:5001/api/NewsHeaders";

export default function NewsUnApproved() {
  const [news, setNews] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [txtTitle, setTitle] = React.useState("");
  const [txtDesc, setDesc] = React.useState("");
  const [show, setShow] = React.useState(false);
  const newsTemplate = useConfig();
  const [priority, setPriority] = React.useState("");
  const [chooseTemplate, setChooseTemplate] = React.useState(1);
  
  let template = (
    <Grid
      container
      direction="rows"
      alignItems="center"
      justifyContent="center"
    >
      {news &&
        news
          .sort((a, b) => a.priority - b.priority)
          .sort((c, d) => d.id - c.id)
          .map((element) => {
            return (
              <Grid item key={element.id}>
                <CardNews
                  newsTitle={element.newsTitle}
                  newsDesc={element.newsDesc}
                  newsUser={element.newsUser}
                  newsDate={element.newsDate}
                  approved={element.approved}
                  isFinished={element.isFinished}
                  toggleApprove={() => toggleApprove(element.id)}
                  checkFinished={() => checkFinished(element.id)}
                  seeDetails={() => seeDetails(element.id)}
                  updated={() =>
                    redirect(
                      "/news/news-unapproved/update-content/" + element.id
                    )
                  }
                />
              </Grid>
            );
          })}
    </Grid>
  );

  const user = useAuth();
  const redirect = useNavigate();
  React.useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setNews(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const addNewsHeader = () => {
    console.log(
      `Title : ${txtTitle} Description : ${txtDesc} Prioprity :${priority}`
    );

    axios
      .post(url, {
        newsTitle: txtTitle,
        newsDesc: txtDesc,
        newsUser: user.user.name,
        priority: priority,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.success("News Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          redirect("/news/news-unapproved/create-content/" + (news.length + 1));
        }
      });
    setOpen(false);
    setShow(false);
    setTitle("");
    setDesc("");
  };
  const openDialog = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    if (show === false) {
      setShow(true);
    }
  };
  const handleChangeDesc = (e) => {
    setDesc(e.target.value);
    if (show === false) {
      setShow(true);
    }
  };
  const toggleApprove = (id) => {
    axios.put(url + "/toggle-approved/" + id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        const content =
          res.data.approved === true
            ? "Approve News successfully"
            : "Unapprove News successfully";
        toast.success(`${content}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  const checkFinished = (id) => {
    confirmAlert({
      title: "Finish News",
      message:
        "Are you sure to do this.If you finish this news,you can't edit it anymore",
      buttons: [
        {
          label: "Yes",
          onClick: () => finished(id),
        },
        {
          label: "No",
        },
      ],
    });
  };
  const seeDetails = (id) => {
    redirect("/news/news-details/" + id);
  };
  const finished = (id) => {
    axios.put(url + "/toggled-finished/" + id).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("News is finished", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  const handlePrioChange = (e) => {
    setPriority(e.target.value);
  };

  const changeTemplate = () => {
    const result = chooseTemplate === 2 ? 1 : 2;
    setChooseTemplate(result);
  };

  switch (chooseTemplate) {
    case 1:
      template = (
        <Grid
          container
          direction="rows"
          alignItems="center"
          justifyContent="center"
        >
          {news &&
            news
              .sort((a, b) => a.priority - b.priority)
              .sort((c, d) => d.id - c.id)
              .map((element) => {
                return (
                  <Grid item key={element.id}>
                    <CardNews
                      newsTitle={element.newsTitle}
                      newsDesc={element.newsDesc}
                      newsUser={element.newsUser}
                      newsDate={element.newsDate}
                      approved={element.approved}
                      isFinished={element.isFinished}
                      toggleApprove={() => toggleApprove(element.id)}
                      checkFinished={() => checkFinished(element.id)}
                      seeDetails={() => seeDetails(element.id)}
                      updated={() =>
                        redirect(
                          "/news/news-unapproved/update-content/" + element.id
                        )
                      }
                    />
                  </Grid>
                );
              })}
        </Grid>
      );
      break;
    case 2:
      template = (
        <Grid
          container
          direction="rows"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item></Grid>

          <Grid item>
            <TableNews
              rows={news}
              toggleApprove={toggleApprove}
              updated={checkFinished}
              details={seeDetails}
            />
          </Grid>
          <Grid item></Grid>
        </Grid>
      );
      break;

    default:
      template = template;
  }
  return (
    <>
      {template === 1 ? (
        <Grid
          container
          direction="rows"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Fab
              color="primary"
              aria-label="add"
              variant="extended"
              onClick={openDialog}
              sx={{ mr: 1 }}
            >
              <AddIcon />
              Thêm mới tin tức
            </Fab>
            <Fab
              color="primary"
              aria-label="add"
              variant="extended"
              onClick={changeTemplate}
            >
              Đổi giao diện
            </Fab>
          </Grid>
          <Grid item xs={12} md={6} lg={4}></Grid>
          <Grid item xs={12} md={6} lg={4}></Grid>
        </Grid>
      ) : (
        <Grid container>
          <Fab
            color="primary"
            aria-label="add"
            variant="extended"
            onClick={openDialog}
            sx={{ mb: 1, mr: 1 }}
          >
            <AddIcon />
            Thêm mới tin tức
          </Fab>
          <Fab
            color="primary"
            aria-label="add"
            variant="extended"
            onClick={changeTemplate}
          >
            Đổi giao diện
          </Fab>
        </Grid>
      )}

      {template}
      <CreateHeader
        open={open}
        handleClose={handleClose}
        addNewsHeader={addNewsHeader}
        txtTitle={txtTitle}
        txtDesc={txtDesc}
        show={show}
        handleChangeTitle={handleChangeTitle}
        handleChangeDesc={handleChangeDesc}
        prioprity={priority}
        handlePrioChange={handlePrioChange}
      />
      <ToastContainer />
    </>
  );
}
