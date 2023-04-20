import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Edit(props) {
  const student = props.student;
  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const [std, setStd] = useState(student.std);
  const [rollNo, setRollNo] = useState(student.rollNo);

  let history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleEditMethod();

    history("/");
  };

  return (
    <div>
      <Form className="d-grid">
        <Form.Group className="mb-3 formInput ">
          <Form.Control
            className="my-1"
            type="text"
            id="name"
            value={name}
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            id="age"
            value={age}
            placeholder="Enter Age"
            onChange={(e) => setAge(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            id="std"
            value={std}
            placeholder="Enter Std"
            onChange={(e) => setStd(e.target.value)}
          ></Form.Control>
          <Form.Control
            className="my-1"
            type="text"
            id="rollNo"
            value={rollNo}
            placeholder="Enter RollNo"
            onChange={(e) => setRollNo(e.target.value)}
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
