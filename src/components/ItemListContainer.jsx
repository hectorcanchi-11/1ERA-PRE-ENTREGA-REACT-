import Container from 'react-bootstrap/Container';
export const ItemListContainer = (props) => {
    return <Container>
        <h1 className='mt-4'>{props.greeting}</h1>
        </Container>;
}