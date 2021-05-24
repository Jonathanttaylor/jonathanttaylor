import Badge from 'react-bootstrap/Badge'

const TechBadge = ( {tech} ) => {
    return (
        <>
            <Badge style={{ fontSize: '11px', marginRight: '5px'}} variant='info'>{tech}</Badge>
        </>
    )
}

export default TechBadge
