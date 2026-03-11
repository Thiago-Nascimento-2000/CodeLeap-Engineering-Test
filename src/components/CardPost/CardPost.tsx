import { useEffect, useState } from "react";
import api from "../../api/axios";
import * as Card from "./Components";
import { Main } from "./Components";
import ModalEdit from "../ModalEdit/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { openModalEditPost } from "../../Redux/Slices/modalEditPost";

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

  const isOpenModal = useSelector(
    (state: RootState) => state.modalEditPost.isOpen,
  );

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
    try {
      await api.delete(`${postId}/`);

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleEditPost = (post: Post) => {
    console.log(`Edit post with ID: ${post.id}`);

    const url = new URL(window.location.href);
    url.searchParams.set("postId", post.id.toString());
    url.searchParams.set("title", post.title);
    url.searchParams.set("content", post.content);
    window.history.pushState({}, "", url.toString());

    dispatch(openModalEditPost());
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
            onClickDelete={() => handleDeletePost(post.id)}
            onClickEdit={() => handleEditPost(post)}
          ></Card.Header>
          <Main
            username={post.username}
            content={post.content}
            created_datetime={post.created_datetime}
          />
        </Card.Container>
      ))}
      {isOpenModal && <ModalEdit />}
    </>
  );
};

export default CardPost;
