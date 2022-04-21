import * as React from "react";
import axios from "utils/axios";
import useAuth from "hooks/useAuth";
import Card from "./Card";
import UpdateDialog from "./UpdateDialog";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const url = "https://localhost:5001/api/newscontents/";
const txtUrl = "https://localhost:5001/api/text/";
const initialState = {
  id: null,
  newsHeaderId: null,
  sequence: null,
  content: "",
  contentType: "",
  contentDate: "",
  contentUser: "",
};

function Content() {
  const [contents, setContents] = React.useState(null);
  const [data, setData] = React.useState(initialState);
  const [open, setOpen] = React.useState(false);
  const user = useAuth();
  let file;
  const id = useParams();
  React.useEffect(() => {
    axios.get(url + id.id).then((response) => {
      setContents(response.data);
      console.log(response.data);
    });
  });
  const back = (id) => {
    axios
      .put("https://localhost:5001/api/NewsContents/increase/" + id)
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          toast.success("Thay đổi vị trí thành công");
        }
      });
  };
  const forward = (id) => {
    axios
      .put("https://localhost:5001/api/NewsContents/decrease/" + id)
      .then((response) => {
        console.log(response);
        if (response.status === 204) {
          toast.success("Thay đổi vị trí thành công");
        }
      });
  };
  const openDialog = (
    id,
    newsHeaderId,
    sequence,
    content,
    contentType,
    contentDate,
    contentUser
  ) => {
    setOpen(true);
    setData({
      ...data,
      id,
      newsHeaderId,
      sequence,
      content,
      contentType,
      contentDate,
      contentUser,
    });
    console.log(data);
  };
  const handleChange = (event) => {
    setData({
      ...data,
      content: event.target.value,
    });
  };
  const updateContent = () => {
    console.log(data);
    axios
      .put(txtUrl + data.id, {
        id: data.id,
        newsHeaderId: data.newsHeaderId,
        content: data.content,
        contentType: data.contentType,
        contentDate: data.contentDate,
        contentUser: data.contentUser,
      })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Update Text content successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error updating content");
      });
    setOpen(false);
  };

  return (
    <>
      <Grid container>
        {contents &&
          contents
            .sort((a, b) => a.sequence - b.sequence)
            .map((content) => {
              return (
                <Grid item>
                  <Card
                    content={content.content}
                    contentType={content.contentType}
                    contentDate={content.contentDate}
                    contentUser={content.contentUser}
                    sequence={content.sequence}
                    flag={content.sequence === contents.length - 1 ? 1 : 0}
                    back={() => {
                      back(content.id);
                    }}
                    forward={() => {
                      forward(content.id);
                    }}
                    open={() => {
                      openDialog(
                        content.id,
                        content.newsHeaderId,
                        content.sequence,
                        content.content,
                        content.contentType,
                        content.contentDate,
                        content.contentUser
                      );
                    }}
                  />
                </Grid>
              );
            })}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <UpdateDialog
          open={open}
          handleClose={() => {
            setOpen(false);
          }}
          contentType={data.contentType}
          content={data.content}
          handleChange={handleChange}
          update={updateContent}
          close={() => {
            setOpen(false);
          }}
          id={data.id}
          newsHeaderId={data.newsHeaderId}
        />
      </Grid>
    </>
  );
}

export default Content;
