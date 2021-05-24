import {React, useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import YoutubeEmbed from '../../YoutubeEmbed'

const CardProj = ( {project, technology, image, group, desc, ytID, code, dload} ) => {
    const [demo, setDemo] = useState(false);
    const demoClose = () => setDemo(false);
    const demoShow = () => setDemo(true);

    const [download, setDownload] = useState(false);
    const downloadClose = () => setDownload(false);
    const downloadShow = () => setDownload(true);

    return (
        <div>
            <Card bg='dark' text='light' style={{ width: '18rem', marginBottom: '10px', height: '31rem'}}>
                <Card.Header style={{ fontSize: '25px', lineHeight: '1'}}>
                    {project} 
                    {technology}
                </Card.Header>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Subtitle className="mb-2"> {group} </Card.Subtitle>
                    <Card.Text> {desc} </Card.Text>
                    {ytID ? (
                        <Button style={{marginRight: '5px'}} variant="info" onClick={demoShow}>Video Demo</Button>

                    ) : (
                        null
                    )}
                    <Button value={code} variant="info" onClick={e => {window.location.href=e.target.value}}>Source Code</Button>
                    {dload ? (
                        <Button style={{marginTop: '5px'}}variant="info" onClick={downloadShow}>Download</Button>
                    ) : (
                        null
                    )}
                </Card.Body>
            </Card>

            <Modal centered show={demo} onHide={demoClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{project} Demo</Modal.Title>
                </Modal.Header>
                <Modal.Body> <YoutubeEmbed embedId={ytID} /> </Modal.Body>
            </Modal>

            <Modal centered show={download} onHide={downloadClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Download</Modal.Title>
                </Modal.Header>
                <Modal.Body>{dload}</Modal.Body>
            </Modal>
        </div>
    )
}

export default CardProj
