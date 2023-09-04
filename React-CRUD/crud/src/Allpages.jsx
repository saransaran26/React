import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Delete from './Delete';

function Allpages() {
    const[fruits,setFruits] = useState([])
    const[show,setShow] = useState(false)
    const[itemiddelete,setitemiddelete] = useState(0)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://64f4b36e932537f4051a9e29.mockapi.io/Task").then((response)=>{
          console.log(response.data);
            setFruits(response.data)
        })
    },[])

    const handleDelete = (id) =>{
      console.log(typeof id);
       const ids = parseInt(id)
       console.log(typeof ids);
        setShow(true)
        setitemiddelete(ids)
    }
    const handlemodelclose = () => {
        setShow(false)
        setitemiddelete(0)
    }
    // ${itemiddelete}
   const handledeleteclose = () => {
    console.log("Deleted Double");
        axios.delete(`https://64f4b36e932537f4051a9e29.mockapi.io/Task/${itemiddelete}`)
        .then(()=>{
            setFruits((previousState) => {
                return previousState.filter(_ => _.id !== itemiddelete);
              });
              setShow(false)
              setitemiddelete(0)
        })
    }
  return (
    <>
    <Delete
    show={show}
    handlemodelclose = {handlemodelclose}
    handledeleteclose = {handledeleteclose}
    title="Warning Delete"
    body="Are you want to delete this item!"
    ></Delete>
    <Row className='mt-3'>
        <Col md={{span:4,offset:4}}>
        <Button variant="primary" type="button" onClick={()=>navigate("/add-fruit")}>
        Add new item
      </Button>
        </Col>
    </Row>
    <Row xs={1} md={3} className="g-2 all mt-3">
      {fruits.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Img variant="top" className="imga"src={item.imageurl} style={{height:300}}/>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                Quantity - {item.quantity}
              </Card.Text>
              <Card.Text>
                cost - {item.cost}
              </Card.Text>
              <Button variant="primary" type="button" onClick={()=>navigate(`/update/${item.id}`)}>
        Edit
      </Button>
      <Button variant="danger" type="button" className='deletebtn' onClick={()=>handleDelete(item.id)}>
        Delete
      </Button>
            </Card.Body>
            
          </Card>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Allpages