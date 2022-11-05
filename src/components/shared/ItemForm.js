import { Form, Button, Container } from 'react-bootstrap'

const ItemForm = (props) => {
    // here are the props we're going to bring into our form
    const { item, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{ heading }</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label>Name: (required)</Form.Label>
                <Form.Control 
                    placeholder="Item Name"
                    name="name"
                    id="name"
                    value= { item.name }
                    onChange={ handleChange }
                />
                <Form.Label>Image Link:</Form.Label>
                <Form.Control 
                    placeholder="Image Link"
                    name="image"
                    id="image"
                    value= { item.image }
                    onChange={ handleChange }
                />
                <Form.Label>Category: (required)</Form.Label>
                <Form.Control 
                    placeholder="what category does this item belong in?"
                    name="category"
                    id="category"
                    value= { item.category }
                    onChange={ handleChange }
                />
                <Form.Label>$USD: (required)</Form.Label>
                <Form.Control 
                    placeholder="How much does this item cost?"
                    type="number"
                    name="price"
                    id="price"
                    value= { item.price }
                    onChange={ handleChange }
                />
                <Form.Label>Description: (required)</Form.Label>
                <Form.Control 
                    placeholder="Enter short item description"
                    name="description"
                    id="description"
                    value={ item.description }
                    onChange={ handleChange }
                />
                <Form.Label>Stock: (required)</Form.Label>
                <Form.Control 
                    placeholder="How many of this item are you selling?"
                    name="stock"
                    id="stock"
                    value={ item.stock }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ItemForm