import { Link } from "react-router-dom";
import { fetchPosts } from "../api";

const Post = ({ post, token, setPosts, postId }) => {
    const deletePost = async () => {
        try {
            await fetchPosts({
                method: "DELETE",
                path: `/posts/${post._id}`,
                token,
            });
            setPosts((prev) => prev.filter((post) => postId !== post._id));
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div key={post._id} className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        <p className="card-text">
                            <Link className="card-link text-decoration-none" to={`/posts/${post._id}`}>View Post</Link>
                            {post.isAuthor && (
                                <>
                                    <button className="btn btn-outline-danger" onClick={() => deletePost(post._id)}>Delete</button>
                                </>
                            )}
                        </p>
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Post