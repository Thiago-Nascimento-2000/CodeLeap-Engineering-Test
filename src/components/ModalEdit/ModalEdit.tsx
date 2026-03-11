import { useState } from "react";
import * as Card from "./Components";
import api from "../../api/axios";
import { useDispatch } from "react-redux";
import { closeModalEditPost } from "../../Redux/Slices/modalEditState";

const ModalEdit = () => {
  const dispatch = useDispatch();

  const params = new URLSearchParams(window.location.search);
  const postId = params.get("postId");
  const title = params.get("title");
  const content = params.get("content");

  const [titleState, setTitleState] = useState(title!);
  const [contentState, setContentState] = useState(content!);

  const handleSavePostEdited = async () => {
    try {
      await api.patch(`${postId}/`, {
        title: titleState,
        content: contentState,
      });
      if (await handleSavePostEdited) {
        dispatch(closeModalEditPost());
      }
      await handleSavePostEdited();
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
            onClick={() => dispatch(closeModalEditPost())}
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
