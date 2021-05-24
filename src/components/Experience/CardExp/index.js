import {React, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CardExp = ( {position, technology, image, company, date, body} ) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card bg='dark' text='light' style={{ width: '18rem', marginBottom: '10px'}}>
                <Card.Header style={{ fontSize: '25px', lineHeight: '1'}}>
                    {position} 
                    {technology}
                </Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title> {company} </Card.Title>
                    <Card.Subtitle className="mb-2"> {date} </Card.Subtitle>
                    <Button variant="info" onClick={handleShow}>Find Out More</Button>
                </Card.Body>
            </Card>

            <Modal centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {position} at {company}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{marginLeft: '10px'}}> {body} </Modal.Body>
            </Modal>
        </div>
    )
}

export default CardExp
