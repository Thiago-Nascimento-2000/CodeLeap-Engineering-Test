import { useState } from "react";
import * as Card from "./Components";
import api from "../../api/axios";

type ModalEditProps = {
  post: {
    id: number;
    title: string;
    content: string;
  };
  onClose: () => void;
  onSaved: (updatedPost: { id: number; title: string; content: string }) => void;
};

const ModalEdit = ({ post, onClose, onSaved }: ModalEditProps) => {
  const [titleState, setTitleState] = useState(post.title);
  const [contentState, setContentState] = useState(post.content);

  const handleSavePostEdited = async () => {
    try {
      await api.patch(`${post.id}/`, {
        title: titleState,
        content: contentState,
      });

      onSaved({
        id: post.id,
        title: titleState,
        content: contentState,
      });
      onClose();
    } catch (error) {
      console.error("Error saving edited post:", error);
    }
  };

  return (
    <Card.Wrapper>
      <Card.Container>
        <Card.Title text="Edit Item" />

        <Card.ContainerInput>
          <Card.Label text="Title" />
          <Card.inputTitle
            placeholder="Hello world"
            value={titleState!}
            onChange={(e) => setTitleState(e.target.value)}
          />
        </Card.ContainerInput>
        <Card.ContainerInput>
          <Card.Label text="Content" />
          <Card.inputContent
            placeholder="Content here"
            value={contentState!}
            onChange={(e) => setContentState(e.target.value)}
          />
        </Card.ContainerInput>
        <Card.ContainerButton>
          <Card.Button
            text="Cancel"
            type="cancel"
            onClick={onClose}
          />
          <Card.Button
            text="Save"
            type="save"
            onClick={() => handleSavePostEdited()}
          />
        </Card.ContainerButton>
      </Card.Container>
    </Card.Wrapper>
  );
};

export default ModalEdit;
