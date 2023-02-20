import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";
import cl from "../styles/Post.module.css";

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return (
            <h1 style={{ textAlign: "center", textTransform: "uppercase" }}>
                Посты не найдены!
            </h1>
        );
    }
    return (
        <div>
            <h1 style={{ textAlign: "center", textTransform: "uppercase", fontSize: '3rem' }}>
                {title}
            </h1>
            <TransitionGroup className={cl.post__wrapper}>
                {posts.map((post, index) => (
                    <CSSTransition
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem
                            remove={remove}
                            number={index + 1}
                            post={post}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default PostList;
