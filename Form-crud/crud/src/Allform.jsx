import React, { useState,useRef, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Allform() {
    const start = [
        // {
        //     name:"SARAN",
        //     EmailId:"saran@26gmail.com",
        //     seats:4
        // }
    ]
    // localStorage.setItem('info',JSON.stringify(start))
    const[value,setValue] = useState(start)
    const handlebook = () => {
        const names = document.getElementById("name").value
        const emails = document.getElementById("email").value
        const seats = document.getElementById("seat").value
        let data = {
            name:names,
            EmailId:emails,
            seats:seats
        }
        let updated = [...value]
        updated.push(data)
        setValue(updated)
        console.log(updated);
        //localStorage.setItem('info',JSON.stringify(updated))
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("seat").value = ""  
    }

    const handleedit = (index) => {
        const record = value[index]
        const editname = document.getElementById("name")
        const editemail = document.getElementById("email")
        const editseat = document.getElementById("seat")

        editname.value = record.name
        editemail.value = record.EmailId
        editseat.value = record.seats
        console.log(value);

        const change = value.splice(index,1)
        console.log("change");
        console.log(change);
        setValue(change)
    }

    const handledelete = (index) => {
        console.log("clicked delete");
        // const changeddelete = value.splice(index,1)
        setValue(value.splice(index,1))
    }
    // useEffect(()=>{
//   const saveddata = JSON.parse(localStorage.getItem('info'))
//   setValue(saveddata)
// },[])
    
  return (
    <>
    <Container>
    <h1 style={{color:'red'}} className='mt-3'>Book Ticket</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label style={{fontWeight:'bold'}}>Name :</Form.Label>
        <Form.Control type="text" id='name'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formemail">
        <Form.Label style={{fontWeight:'bold'}}>Email Id :</Form.Label>
        <Form.Control type="email" id='email'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formseat">
        <Form.Label style={{fontWeight:'bold'}}>No of Seats :</Form.Label>
        <Form.Control type="number"id='seat'/>
      </Form.Group>
      <Button variant="primary" type="button" className='mt-3' onClick={handlebook}>
        Book
      </Button>
    </Form>
    <Row xs={1} md={3} className="g-3 mt-4">
      {value.map((item,index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/free-vector/red-cinema-theater-seats-with-water-screen_1017-38348.jpg" style={{height:200}}/>
            <Card.Body>
              <Card.Title className='mt-2'>Name : {item.name}</Card.Title>
              <Card.Title className='mt-2'> Email Id : {item.EmailId}</Card.Title>
              <Card.Title className='mt-2'> No of Booked Seats : {item.seats}</Card.Title>
              <Card.Text style={{color:'green'}} className='mt-2'>Ticket Booked Successfully</Card.Text>
              <Button variant="primary" type="button" onClick={()=>handleedit(index)}>
        Edit
      </Button>
      <Button variant="danger" type="button" className='deletebtn' onClick={()=>handledelete(index)}>
        Delete
      </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </>
  )
}

export default Allform