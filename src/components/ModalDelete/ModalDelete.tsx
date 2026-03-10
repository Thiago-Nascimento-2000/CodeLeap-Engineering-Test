import * as Card from './Components';

const ModalDelete = () => {
    return (
        <Card.Wrapper>
            <Card.Container>
                <Card.Title text='Are you sure you want to delete this item?' />
                <Card.ContainerButton>
                    <Card.Button text='Cancel' type='cancel' onClick={() => console.log('Canceled')} />
                    <Card.Button text='Delete' type='delete' onClick={() => console.log('Deleted')} />
                </Card.ContainerButton>
            </Card.Container>
        </Card.Wrapper>
    )
}

export default ModalDelete;