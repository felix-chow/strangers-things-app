import { Link } from "react-router-dom";
import { useState } from "react";
import { fetchPosts } from "../api";
import CreatePostForm from "./CreatePostForm";

const Posts = ({ posts, setPosts, token }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const postMatches = (post) => {
        const textToCheck = (
            post.title + post.description
        ).toLowerCase();
        return textToCheck.includes(searchTerm.toLowerCase());
    };


    const filteredPosts = posts.filter((post) => {
        return postMatches(post);
    });

    const deletePost = async (postId) => {
        try {
            await fetchPosts({
                method: "DELETE",
                path: `/posts/${postId}`,
                token,
            });
            setPosts((prev) =>
                prev.filter((post) => postId !== post._id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Posts</h1>
            <input type="text" className="form-control my-4" placeholder="Search for a post" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <CreatePostForm posts={posts} setPosts={setPosts} token={token} />
            {
                filteredPosts.map((post) => (
                    <div key={post._id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{post.title}</h3>
                                <h4 className="card-subtitle mb-2 text-muted">{post.author.username}</h4>
                                <h4 className="card-subtitle mb-2 text-muted">{post.price}</h4>
                                <h4 className="card-subtitle mb-2 text-muted">{post.location}</h4>
                                <p className="card-text">{post.description}</p>
                                <h5 className="card-subtitle mb-2 text-muted">Created at {post.createdAt}</h5>
                                <h5 className="card-subtitle mb-2 text-muted">Updated at {post.updatedAt}</h5>
                                <Link className="card-link text-decoration-none" to={`/posts/${post._id}`}>View post</Link>
                                {post.isAuthor && (
                                    <button type="button" className="btn btn-outline-danger" onClick={() => deletePost(post._id)}>Delete</button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Posts