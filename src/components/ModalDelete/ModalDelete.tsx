import { useDispatch } from 'react-redux';
import * as Card from './Components';
import { closeModalDeletePost } from '../../Redux/Slices/modalDeleteStateIsOpen';
import api from '../../api/axios';

const ModalDelete = () => {
    const dispatch = useDispatch();

    const params = new URLSearchParams(window.location.search);
    const postId = params.get("postId");

    const handleCancelDeleteCloseMODAL = () => {
        dispatch(closeModalDeletePost());
    }

    const handleDeletePost = async () => {
        await api.delete(`${postId}/`)
        dispatch(closeModalDeletePost())
    }

    return (
        <Card.Wrapper>
            <Card.Container>
                <Card.Title text='Are you sure you want to delete this item?' />
                <Card.ContainerButton>
                    <Card.Button text='Cancel' type='cancel' onClick={() => handleCancelDeleteCloseMODAL()}/>
                    <Card.Button text='Delete' type='delete' onClick={() => handleDeletePost()}/>
                </Card.ContainerButton>
            </Card.Container>
        </Card.Wrapper>
    )
}

export default ModalDelete;