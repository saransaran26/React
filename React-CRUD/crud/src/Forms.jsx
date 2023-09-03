import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Forms() {

    const fruitname = useRef("")
    const quantity = useRef("")
    const cost = useRef("")
    const images = useRef("")

    const navigate = useNavigate()

    const handleFruitData = () => {
        const payload = {
            name:fruitname.current.value,
            quantity:quantity.current.value ? Number(quantity.current.value) : 0,
            cost:cost.current.value ? Number(cost.current.value) : 0,
            imageurl:images.current.value
        }
        axios.post("http://localhost:4000/fruits",payload)
        .then(()=>{
            navigate("/")
        })
    }
  return (
    <>
    <legend>Create</legend>
    <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" ref={fruitname}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" ref={quantity}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Cost</Form.Label>
        <Form.Control type="number" ref={cost}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" ref={images}/>
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleFruitData}>
        Submit
      </Button>
    </Form>
    </>
  )
}

export default Forms