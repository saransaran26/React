import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import React from 'react';

function Delete(props) {


  return (
    <>
     <Modal show={props.show} onHide={()=>{props.handlemodelclose()}}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{props.handlemodelclose()}}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{props.handledeleteclose()}}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Delete