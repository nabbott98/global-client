import { Form, Button, Container, Modal } from 'react-bootstrap'

const UserModalForm = (props) => {
    // here are the props we're going to bring into our form
    const { user,handleChange,handleLastChange,handleEmailChange,handleUpdate,closeModal,
    show,firstName,lastName,email} = props

    return (
        
        <Container className="justify-content-center">
            <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton/>
            <h3>change info</h3>
            <Modal.Body>
                <Form onSubmit={ handleUpdate }>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control 
                        placeholder="what's your name?"
                        name="firstName"
                         id="firstName"
                        value= {user.firstName}
                        onChange={ handleChange }
                    />
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control 
                        placeholder="what's your last name?"
                        name="lastName"
                        id="lastName"
                        value= { user.lastName }
                        onChange={ handleLastChange }
                    />
                    <Form.Label>Email:</Form.Label>
                    <Form.Control 
                        placeholder="What's your email?"
                        name="email"
                        id="email"
                        value= { user.email }
                        onChange={ handleEmailChange }
                    />
                    <Button type="submit">Submit</Button>
                </Form>
            </Modal.Body>
            </Modal>
        </Container>
        
    )
}

export default UserModalForm