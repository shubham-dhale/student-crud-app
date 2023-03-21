import React from "react";
import { Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import Dialog from "@material-ui/core/Dialog";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Add from "./Add";
import Students from "./Students";


import DialogActions from "@material-ui/core/DialogActions";

import Button from "@material-ui/core/Button";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, age, std, rollNo) => {
   // console.log("QQQQQQQQQQQQQQQQQQQQQ"+rollNo)
     localStorage.setItem('name',name);
     localStorage.setItem('age',age);
     localStorage.setItem('id',id);
     localStorage.setItem('std',std)
     localStorage.setItem('rollNo',rollNo)
  };

  const handleDelete = (id) => {
    var index = Students.map(function (e) {
      return e.id;
    }).indexOf(id, 0);
    
    Students.splice(index, 1);
    history("/");
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="container" style={{ margin: "10rem" }}>
      <h1>Students Table</h1>
      <div className="d-flex justify-content-end">
      <button
          className="btn btn-primary my-2 "
          onClick={handleClickOpen}
        >
          Create
        </button>
        

      </div>
        <Table size="" striped borderd hover variant="dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Std</th>
              <th>RollNo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Students && Students.length > 0
              ? Students.map((item) => {
                  return (
                    <tr>
                      <td>{item.name} </td>
                      <td>{item.age}</td>
                      <td>{item.std}</td>
                      <td>{item.rollNo}</td>

                      <td>
                        <button className="btn btn-primary btn-sm" onClick={() => handleDelete(item.id)}>
                          DELETE
                        </button>
                        &nbsp;
                        <Link to={"/edit"}>
                          <button
                          className="btn btn-primary btn-sm"
                            onClick={() =>
                              handleEdit(
                                item.id,
                                item.name,
                                item.age,
                                item.std,
                                item.rollNo
                              )
                            }
                          >
                            EDIT
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br></br>
        {/* <Link stdname="d-grid gap-2" to="/create"> */}
        {/* </Link> */}
        <Dialog open={open} fullWidth maxwidth="sm" onClose={handleClickClose}>
          <DialogTitle>{"Add"}</DialogTitle>
          <DialogContent>
            <DialogContentText style={{ height: "250px" }}>
              <Add />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickClose}>Close</Button>
          </DialogActions>
        </Dialog>

        
        
      </div>
    </>
  );
}

export default Home;
