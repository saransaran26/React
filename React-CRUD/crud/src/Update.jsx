import React, { useEffect } from 'react'
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {

    const {id} = useParams();

    const navigate = useNavigate()

    const fruitname = useRef("")
    const quantity = useRef("")
    const cost = useRef("")
    const images = useRef("")

    const handleUpdateData = () =>{
        const payload = {
            name:fruitname.current.value,
            quantity:quantity.current.value ? Number(quantity.current.value) : 0,
            cost:cost.current.value ? Number(cost.current.value) : 0,
            imageurl:images.current.value
        }
        axios.put(`http://localhost:4000/fruits/${id}`,payload)
        .then(()=>{
            navigate("/")
        })
    }

    useEffect(()=>{
        axios.get(`http://localhost:4000/fruits/${id}`)
        .then((response)=>{
            fruitname.current.value = response.data.name
            quantity.current.value = response.data.quantity
            cost.current.value = response.data.cost
            images.current.value = response.data.imageurl
        }) 
    },[])
    
  return (
    <>
    <legend>Update</legend>
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
      <Button variant="primary" type="button" onClick={handleUpdateData}>
        Update
      </Button>
    </Form>
    </>
  )
}

export default Update