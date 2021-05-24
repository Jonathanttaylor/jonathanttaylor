import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import emailjs from 'emailjs-com'

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_phnvblv', 'template_bs2lz8k', e.target, 'user_V3TOK99T5qQbISbeusqsN')
          .then((result) => {
              alert('Your Email has been Sent!');
          }, (error) => {
              alert(error.text);
          });
          e.target.reset()
    }

    return (
        <div>
            <Form onSubmit={sendEmail}>
            <Form.Row>
                <Form.Group as={Col} controlId="name">
                <Form.Control type="text" placeholder="Name" name='name' />
                </Form.Group>

                <Form.Group as={Col} controlId="email">
                <Form.Control type="email" placeholder="Email" name='email' />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="subject">
                <Form.Control type="text" placeholder="Subject" name='subject' />
            </Form.Group>

            <Form.Group controlId="message">
                <Form.Control as="textarea" rows={4} placeholder="Message" name='message' />
            </Form.Group>

            <Button variant="info" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Contact
