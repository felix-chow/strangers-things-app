import { Link, useParams } from "react-router-dom";

import { fetchPosts } from "../api";
import { useState } from "react";

const SinglePost = ({ posts, token }) => {
    const [ content, setContent ] = useState("");
    const { postId } = useParams();
    const fromUser = useParams();

    const post = posts.find((post) => post._id === postId);

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const { message } = await fetchPosts({
                path: `/posts/${post._id}/messages`,
                method: "POST",
                body: { message: { content } },
                token,
            });
            setContent("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <h1>{post.price}</h1>
                    <p>{post.location}</p>
                    <p>{post.description}</p>
                    {post.isAuthor && (
                        <>
                            <h2>Messages</h2>
                            {post.messages.map((message) => (
                                <div key={message._id}>
                                    <p>{message.content}</p>
                                    <p>{message.fromUser.username}</p>
                                </div>
                            ))}
                        </>
                    )}
                    {!post.isAuthor && token && (
                        <form onSubmit={handleSubmit}>
                            <textarea type="text" value={content} onChange={(e) => setContent(e.target.value)}
                                className="form-control" />
                            <button type="submit" className="btn btn-secondary">Send</button>
                        </form>
                    )}
                </>
            ) : (<p>No post found</p>
            )}
            <Link className="text-secondary text-decoration-none" to="/posts">Back to posts</Link>
        </div>
    );
}

export default SinglePost