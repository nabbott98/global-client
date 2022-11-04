import { Form, Button, Container, Modal } from 'react-bootstrap'
import React from 'react'

const UserModalForm = (props) => {
    // here are the props we're going to bring into our form
    const { userName,handleChange,handleUpdate,closeModal,
    show,navigate} = props

    return (
        <Container className="justify-content-center">
            <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton/>
            <h3>change info</h3>
            <Modal.Body>
                <Form onSubmit={ handleUpdate }>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control 
                        placeholder="Type your first name?"
                        name="firstName"
                         id="firstName"
                        value= {userName.firstName}
                        onChange={ handleChange }
                    />
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control 
                        placeholder="type your last name?"
                        name="lastName"
                        
                        value= { userName.lastName }
                        onChange={ handleChange }
                    />
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        placeholder="type your email?"
                        name="email"
                        
                        value= { userName.email }
                        onChange={ handleChange }
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
        
    )
}

export default UserModalForm
//onClick={()=>{navigate('/my-profile')}}