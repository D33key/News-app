import React from "react";
import MyButton from './UI/button/MyButton';
import {useNavigate} from 'react-router-dom';
import cl from "../styles/Post.module.css";

const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong className={cl.post__title}>
                    {props.post.id}. {props.post.title}
                </strong>
                <div className={cl.post__text}>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
