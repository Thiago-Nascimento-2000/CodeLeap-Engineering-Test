import * as Card from "./Components";

const ModalEdit = () => {
  return (
    <Card.Wrapper>
      <Card.Container>
        <Card.Title text="Edit Item" />

        <Card.ContainerInput>
          <Card.Label text="Title" />
          <Card.inputTitle placeholder="Hello world" />
        </Card.ContainerInput>
        <Card.ContainerInput>
          <Card.Label text="Content" />
          <Card.inputContent placeholder="Content here" />
        </Card.ContainerInput>
        <Card.ContainerButton>
          <Card.Button
            text="Cancel"
            type="cancel"
            onClick={() => console.log("Canceled")}
          />
          <Card.Button
            text="Save"
            type="save"
            onClick={() => console.log("Saved")}
          />
        </Card.ContainerButton>
      </Card.Container>
    </Card.Wrapper>
  );
};

export default ModalEdit;
