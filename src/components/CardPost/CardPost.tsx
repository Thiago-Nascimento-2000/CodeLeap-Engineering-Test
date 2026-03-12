import { useEffect, useState } from "react";
import api from "../../api/axios";
import * as Card from "./Components";
import { Main } from "./Components";
import ModalEdit from "../ModalEdit/ModalEdit";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import {
  closeModalEditPost,
  openModalEditPost,
} from "../../Redux/Slices/modalEditState";
import formatData from "../../util/formatdata";
import ModalDelete from "../ModalDelete/ModalDelete";
import {
  closeModalDeletePost,
  openModalDeletePost,
} from "../../Redux/Slices/modalDeleteStateIsOpen";

type Post = {
  id: number;
  username: string;
  title: string;
  content: string;
  created_datetime: string;
};

type CardPostProps = {
  newPost?: Post | null;
};

const CardPost = ({ newPost }: CardPostProps) => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 2;

  const isOpenModalEdit = useSelector(
    (state: RootState) => state.modalEditPost.isOpen,
  );

  const isOpenModalDelete = useSelector(
    (state: RootState) => state.modalDeletePostIsOpen.isOpen,
  );

  const fetchPosts = async (page: number) => {
    if (isLoading || !hasMore) return;

    try {
      setIsLoading(true);

      const response = await api.get("", {
        params: {
          limit: LIMIT,
          offset: page * LIMIT,
        },
      });

      const newPosts: Post[] = response.data.results ?? [];

      if (newPosts.length < LIMIT) {
        setHasMore(false);
      }

      setPosts((prevPosts) => {
        const merged = [...prevPosts, ...newPosts];

        return merged.filter(
          (post, index, self) =>
            index === self.findIndex((p) => p.id === post.id),
        );
      });
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const sentinel = document.querySelector("#sentinel");

    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !isLoading && hasMore) {
          setCurrentPage((prev) => prev + 1);
        }
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  useEffect(() => {
    if (!newPost) return;

    setPosts((prevPosts) => [
      newPost,
      ...prevPosts.filter((post) => post.id !== newPost.id),
    ]);
  }, [newPost]);

  const handleDeletePost = (post: Post) => {
    setSelectedPost(post);
    dispatch(openModalDeletePost());
  };

  const handleEditPost = (post: Post) => {
    setSelectedPost(post);
    dispatch(openModalEditPost());
  };

  const handleModalEditClose = () => {
    dispatch(closeModalEditPost());
    setSelectedPost(null);
  };

  const handleModalDeleteClose = () => {
    dispatch(closeModalDeletePost());
    setSelectedPost(null);
  };

  const handlePostUpdated = (updatedPost: {
    id: number;
    title: string;
    content: string;
  }) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === updatedPost.id
          ? { ...post, title: updatedPost.title, content: updatedPost.content }
          : post,
      ),
    );
  };

  const handlePostDeleted = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  const isPostOwner = (postUsername: string) => {
    const urlparms = new URLSearchParams(window.location.search);
    const username = urlparms.get("username");
    return postUsername === username;
  };

  const alertDeletePost = () => {
    alert("You can only delete your own posts.");
  };

  return (
    <>
      {posts.map((post: Post) => (
        <Card.Container key={post.id}>
          <Card.Header
            h2={post.title}
            onClickDelete={
              isPostOwner(post.username)
                ? () => handleDeletePost(post)
                : alertDeletePost
            }
            onClickEdit={
              isPostOwner(post.username)
                ? () => handleEditPost(post)
                : undefined
            }
          ></Card.Header>
          <Main
            username={post.username}
            content={post.content}
            created_datetime={formatData(post.created_datetime)}
          />
        </Card.Container>
      ))}
      {isOpenModalEdit && selectedPost && (
        <ModalEdit
          post={selectedPost}
          onClose={handleModalEditClose}
          onSaved={handlePostUpdated}
        />
      )}
      {isOpenModalDelete && selectedPost && (
        <ModalDelete
          postId={selectedPost.id}
          onClose={handleModalDeleteClose}
          onDeleted={handlePostDeleted}
        />
      )}
      {isLoading && <div></div>}
      <p id="sentinel"></p>
    </>
  );
};

export default CardPost;
