import './CardContain.css'
import Container from 'react-bootstrap/Container'
import CardDeck from 'react-bootstrap/CardDeck'

const CardContain = ( {body} ) => {
    return (
        <div>
            <Container className={'centerMobile'}>
                <CardDeck className={'centerOther'}>
                    {body}
                </CardDeck>
            </Container>
        </div>
    )
}

export default CardContain
