import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "../components/hooks/useFetching";
import Loader from "../components/UI/Loader/Loader";
import cl from '../styles/Post.module.css';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isCommentsLoading, commentsError] = useFetching(
        async () => {
            const response = await PostService.getCommentsByPostId(params.id);
            setComments(response.data);
        }
    );
    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);
    return (
        <div className={cl.id__wrapper}>
            <h1
                style={{
                    textAlign: "center",
                    textTransform: "uppercase",
                    fontSize: "3rem",
                }}
            >
                Страница поста с ID = {params.id}
            </h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={cl.post__info}>
                    <h1 className={cl.post__title}>
                        {post.id}. {post.title}
                    </h1>
                    <p>
                        {post.body}
                    </p>
                </div>
            )}

            {isCommentsLoading ? (
                <Loader />
            ) : (
                <div className={cl.comments}>
                    <h2>Комментарии</h2>
                    {comments.map((comm) => (
                        <div key={comm.id} style={{ marginTop: "15px" }}>
                            <h3>{comm.email}</h3>
                            <div>{comm.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PostIdPage;
