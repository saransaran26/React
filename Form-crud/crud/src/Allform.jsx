import React, { useState,useRef, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Allform() {
    const start = [
        {
          title:"Great Expectations",
          author:"Charles Dickens",
          ISBN:978140507,
          date:"August 1861"
        }
    ]
    // localStorage.setItem('info',JSON.stringify(start))
    const[value,setValue] = useState(start)
    const handlebook = () => {
      const titles = document.getElementById("title").value
      const authors = document.getElementById("author").value
      const isbns = document.getElementById("isbn").value
      const dates = document.getElementById("date").value
      let data = {
          title:titles,
          author:authors,
          ISBN:isbns,
          date:dates
      }
      let updated = [...value]
      updated.push(data)
      setValue(updated)
      console.log(updated);
     
      //localStorage.setItem('info',JSON.stringify(updated))
      document.getElementById("title").value = ""
      document.getElementById("author").value = ""
      document.getElementById("isbn").value = ""  
      document.getElementById("date").value = ""  
  }
  
  const handleedit = (index) => {
      const record = value[index]
      const editfirst = document.getElementById("title")
      const editlast= document.getElementById("author")
      const editisbn = document.getElementById("isbn")
      const editdate = document.getElementById("date")
  
      editfirst.value = record.title
      editlast.value = record.author
      editisbn.value = record.ISBN
      editdate.value = record.date
      console.log(value);
      let updated = [...value]
      updated.splice(index,1)
      setValue(updated)
  }
  
  const handledelete = (index) => {
      console.log("clicked delete");
      console.log(index);
      let updated = [...value]
      updated.splice(index,1)
      setValue(updated)
     console.log(updated); 
  }
    // useEffect(()=>{
//   const saveddata = JSON.parse(localStorage.getItem('info'))
//   setValue(saveddata)
// },[])
    
  return (
    <>
    <Container>
    <h1 style={{color:'red'}} className='mt-3'>Form Validation</h1>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label style={{fontWeight:'bold'}}>Title :</Form.Label>
        <Form.Control type="text" id='title' required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formemail">
        <Form.Label style={{fontWeight:'bold'}}>Author :</Form.Label>
        <Form.Control type="email" id='author' required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formseat">
        <Form.Label style={{fontWeight:'bold'}}>ISBN Number :</Form.Label>
        <Form.Control type="number"id='isbn' required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formseat">
        <Form.Label style={{fontWeight:'bold'}}>Date :</Form.Label>
        <Form.Control type="date"id='date'/>
      </Form.Group>
      <Button variant="primary" type="button" className='mt-3' onClick={handlebook}>
        Submit
      </Button>
    </Form>
    <Row xs={1} md={3} className="g-3 mt-4">
      {value.map((item,index) => (
        <Col key={index}>
          <Card>
            <Card.Img variant="top" src="https://st2.depositphotos.com/2769299/7314/i/450/depositphotos_73146775-stock-photo-a-stack-of-books-on.jpg" style={{height:200}}/>
            <Card.Body>
              <Card.Title className='mt-2'>Title : {item.title}</Card.Title>
              <Card.Title className='mt-2'>Author : {item.author}</Card.Title>
              <Card.Title className='mt-2'>ISBN Number : {item.ISBN}</Card.Title>
              <Card.Title className='mt-2'>Date : {item.date}</Card.Title>
      
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