import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Students from "./Students";


function Edit() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [id, setId] = useState('');
    const [std, setStd] = useState('');
    const [rollNo,setRollNo] = useState('');

    let history = useNavigate();

    var index = Students.map(function (e) {
        
        return e.id;
    }).indexOf(id);

    const handleSubmit = (e) => {
       
        e.preventDefault();

        let a = Students[index];
        a.name = name;
        a.age = age;
        a.std = std;
        a.rollNo = rollNo;

        history("/");
    }

    useEffect(() => {
        
        setName(localStorage.getItem('name'))
        setRollNo(localStorage.getItem('rollNo'))
        setStd(localStorage.getItem('std'))
        setAge(localStorage.getItem('age'))
        setId(localStorage.getItem('id'))
    } )

 return (

        <div>
            <Form className='d-grid gap-2' style={{ margin: "15rem" }}>
                <Form.Group className='mb-3' controlId='formName'>
                    <Form.Control type="text" placeholder="Enter Name"   value={name} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formAge'>
                    <Form.Control type="text" placeholder="Enter Age" value={age}required onChange={(e) => setAge(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formStd'>
                    <Form.Control type="text" placeholder="Enter Std" value={std} required onChange={(e) => setStd(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formRollNo'>
                    <Form.Control type="text" placeholder="Enter Roll No" value={rollNo} required onChange={(e) => setRollNo(e.target.value)}>
                    </Form.Control>
                </Form.Group>
               
                <Button  onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>

        </div>


    )
}
export default Edit;
