import React, { useState } from "react";

import "../style/bulletinList.css";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import { IPost } from "../store/bulletinStore";

type ListProps = {
  list: Array<IPost>;
};

const BulletinList = (props: ListProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { list } = props;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, list.length - page * rowsPerPage);

  return (
    <div className="bulletinList">
      {list.length === 0 ? (
        <div>
          <span>Loading...</span>
        </div>
      ) : (
        <div className="bulletinTable">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nickname</TableCell>
                  <TableCell>Content</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow key={row._id}>
                      <TableCell component="th" scope="row">
                        {row.nickName}
                      </TableCell>
                      <TableCell>{row.content}</TableCell>
                    </TableRow>
                  ))}
                {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}></TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={list.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default BulletinList;
