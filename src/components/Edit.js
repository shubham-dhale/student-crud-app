import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Students from "./Students";

function Edit(props) {
//   const id = props.student.id;
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [std, setStd] = useState("");
  // const [rollNo, setRollNo] = useState("");

//   const [open, setOpen] = useState(false);
//   const [close, setClose] = useState(false);
  const student = props.student;
  console.log("chgbsj"+ JSON.stringify(student));
  let history = useNavigate();

  //const updatedStudent = { id, name, rollNo, std, age };

  const handleSubmit = (event) => {
    event.preventDefault();
    // props.handleEditMethod(id, updatedStudent);
    props.handleEditMethod();
    // props.handleEdit(id)

    history("/");
  };


  // useEffect(() => {
  //   console.log(props.student)
  //   if (props.student) {
  //     //const student = props.student;
  //     console.log("cgv"+JSON.stringify (student))
  //     //setId(id);
  //     //setName(name);
  //     //setAge(age);
  //     //setStd(std);
  //     //setRollNo(rollNo);

  //   }
  // }, [props.student]);

  return (
    <div>
      <Form className="d-grid">
        <Form.Group className="mb-3 formInput ">
          <Form.Control
            className="my-1"
            type="text"
            id="name"
            //value={student.name === null ? "" : student.name}
            value= {student.name}
            placeholder="Enter Name"

            // onChange={(e) =>(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            id="age"
           // value={age === null ? "" : age}
           value= {student.age}
            placeholder="Enter Age"

            //onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            id="std"
            //value={std === null ? "" : std}
            value = {student.std}
            placeholder="Enter Std"

            //onChange={(e) => setStd(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            id="rollNo"
           // value={rollNo === null ? "" : rollNo}
           value = {student.rollNo}
            placeholder="Enter RollNo"

            //onChange={(e) => setRollNo(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary btn-sm mx-1 my-1"
            type="submit"
            // handleEdit={handleEditMethod}
          >
            Update
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Edit;
