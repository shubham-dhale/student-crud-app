import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import Add from "./Add";
import Edit from "./Edit";
import Students from "./Students";

function Home() {
  let history = useNavigate();

  const [students, setStudents] = useState([]);

  console.log("qqqq",students)

  const [showAdd, setShowAdd] = useState(false);
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

  const [showEdit, setShowEdit] = useState(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);

  const handleDelete = (id) => {
    var index = students
      .map(function (e) {
        return e.id;
      })
      .indexOf(id, 0);

    students.splice(index, 1);
    history("/");
  };

  const handleEditMethod = (id, stu) => {
    console.log('neymar', id)
    
    setStudents(students.map((student) => (student.id === id ? stu : student)));
    
  };

  const handleAdd = (stu) => {
    
    // console.log("My name is " + stu.name);
    let stud = {
      id: stu.id,
      name: stu.name,
      age: stu.age,
      std: stu.std,
      rollNo: stu.ollNo,
    };
    // students.push(stu)
  };

  function handleEdit(e,id) {
    e.preventDefault();
    handleShowEdit(id);
     return students.filter((student) => student.id === id);
  }

  return (
    <>
      <div className="container" style={{ margin: "10rem" }}>
        <h1>Students Table</h1>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-primary btn-sm mx-1 my-1"
            onClick={handleShowAdd}
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
            {students && students.length > 0
              ? students.map((student) => {
                  return (
                    <tr key={student.id}>
                      <td>{student.name} </td>
                      <td>{student.age}</td>
                      <td>{student.std}</td>
                      <td>{student.rollNo}</td>

                      <td>
                        <button
                          className="btn btn-primary btn-sm mx-1 my-1"
                          onClick={() => handleDelete(student.id)}
                        >
                          DELETE
                        </button>

                        &nbsp;

                        <button
                          className="btn btn-primary btn-sm mx-1 my-1"
                           onClick={(e) => handleEdit(e,student.id)}
                          // onClick={handleEdit}
                        >
                          EDIT
                        </button>
                        {/* for editing */}
                        <Modal show={showEdit} onHide={handleCloseEdit}>
                          <Modal.Header closeButton>
                            <Modal.Title>Edit</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {" "}
                            <Edit
                              student={student}
                              addMethod={handleShowEdit}
                              // handleAdd={handleAdd}
                              handleEditMethod={handleEditMethod}
                              // handleEdit={handleEdit}
                            />
                          </Modal.Body>
                        </Modal>
                      </td>
                    </tr>
                  );
                })
              : "No data available"}
          </tbody>
        </Table>
        <br></br>

        {/* //for adding */}
        <Modal show={showAdd} onHide={handleCloseAdd}>
          <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <Add
              student={students}
              onClick={handleCloseAdd}
              addMethod={handleShowAdd}
            />
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Home;
