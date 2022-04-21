import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import UpdateDisabledIcon from "@mui/icons-material/UpdateDisabled";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import { format } from "date-fns";
import vnVNLocale from "date-fns/locale/vi";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

function TableNews(props) {
  const { rows, toggleApprove, updated, details, update } = props;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Tiêu đề</TableCell>
            <TableCell>Tin mô tả</TableCell>
            <TableCell>Người đăng</TableCell>
            <TableCell>Ngày đăng</TableCell>
            <TableCell>Tình trạng</TableCell>
            <TableCell>Hoàn thành</TableCell>
            <TableCell>Chi tiết tin</TableCell>
            <TableCell>Thay đổi nội dung</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.newsTitle}
              </TableCell>
              <TableCell>{row.newsDesc}</TableCell>
              <TableCell>{row.newsUser}</TableCell>
              <TableCell>
                {" "}
                {format(new Date(row.newsDate), "dd/MM/yyyy HH:mm", {
                  locale: vnVNLocale,
                })}
              </TableCell>
              <TableCell>
                {" "}
                <Button
                  size="medium"
                  color={row.approved === true ? "error" : "success"}
                  variant="contained"
                  onClick={toggleApprove}
                  disabled={!row.isFinished}
                >
                  {row.approved === true ? (
                    <UpdateDisabledIcon />
                  ) : (
                    <HowToRegIcon />
                  )}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  size="medium"
                  color="warning"
                  variant="contained"
                  disabled={row.isFinished}
                  onClick={() => updated(row.id)}
                >
                  <CheckCircleIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  size="medium"
                  color="primary"
                  variant="contained"
                  onClick={() => details(row.id)}
                >
                  <InfoIcon />
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  size="medium"
                  color="primary"
                  variant="contained"
                  onClick={() => update(row.id)}
                >
                  <ModeEditOutlineIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableNews;
