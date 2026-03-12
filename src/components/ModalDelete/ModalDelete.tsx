import * as Card from "./Components";
import api from "../../api/axios";

type ModalDeleteProps = {
  postId: number;
  onClose: () => void;
  onDeleted: (postId: number) => void;
};

const ModalDelete = ({ postId, onClose, onDeleted }: ModalDeleteProps) => {
  const handleDeletePost = async () => {
    try {
      await api.delete(`${postId}/`);
      onDeleted(postId);
      onClose();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <Card.Wrapper>
      <Card.Container>
        <Card.Title text="Are you sure you want to delete this item?" />
        <Card.ContainerButton>
          <Card.Button text="Cancel" type="cancel" onClick={onClose} />
          <Card.Button text="Delete" type="delete" onClick={handleDeletePost} />
        </Card.ContainerButton>
      </Card.Container>
    </Card.Wrapper>
  );
};

export default ModalDelete;
