import { useEffect, useState } from "react";
import api from "../../api/axios";
import * as Card from "./Components";
import { Main } from "./Components";
import ModalEdit from "../ModalEdit/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { openModalEditPost } from "../../Redux/Slices/modalEditState";
import formatData from "../../util/formatdata";
import ModalDelete from "../ModalDelete/ModalDelete";
import { openModalDeletePost } from "../../Redux/Slices/modalDeleteStateIsOpen";

type Post = {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: string;
};

const CardPost = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<Post[]>([]);

  const isOpenModalEdit = useSelector(
    (state: RootState) => state.modalEditPost.isOpen,
  );

  const isOpenModalDelete = useSelector((state: RootState) => state.modalDeletePostIsOpen.isOpen);

  const fetchPosts = async () => {
    try {
      const response = await api.get("");
      setPosts(response.data.results);
      await fetchPosts();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const handleDeletePost = async (postId: number) => {
    const url = new URL(window.location.href);
    url.searchParams.set("postId", postId.toString());
    window.history.pushState({}, "", url.toString());
    dispatch(openModalDeletePost());
  };

  const handleEditPost = (post: Post) => {

    const url = new URL(window.location.href);
    url.searchParams.set("postId", post.id.toString());
    url.searchParams.set("title", post.title);
    url.searchParams.set("content", post.content);
    window.history.pushState({}, "", url.toString());

    dispatch(openModalEditPost());
  };

  const isPostOwner = (postUsername: string) => {
    const urlparms = new URLSearchParams(window.location.search);
    const username = urlparms.get("username");
    return postUsername === username;
  }

  const alertDeletePost = () => {
    alert("You can only delete your own posts.");
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      {posts.map((post: Post) => (
        <Card.Container key={post.id}>
          <Card.Header
            h2={post.title}
            onClickDelete={isPostOwner(post.username) ? () => handleDeletePost(post.id) : alertDeletePost}
            onClickEdit={isPostOwner(post.username) ? () => handleEditPost(post) : undefined}
          ></Card.Header>
          <Main
            username={post.username}
            content={post.content}
            created_datetime={formatData(post.created_datetime)}
          />
        </Card.Container>
      ))}
      {isOpenModalEdit && <ModalEdit />}
      {isOpenModalDelete && <ModalDelete/>}
    </>
  );
};

export default CardPost;
