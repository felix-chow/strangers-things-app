import { useState } from "react";
import { fetchPosts } from "../api";

const CreatePostForm = ({ token, setPosts }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");

    const createPost = async (e) => {
        e.preventDefault();
        try {
            const { post } = await fetchPosts({
                method: "POST",
                path: "/posts",
                token,
                body: {
                    post: {
                        title,
                        price,
                        description,
                        location,
                    },
                },
            });
            post.isAuthor = true;
            setPosts((prev) => [post, ...prev]);
            setTitle("");
            setPrice("");
            setDescription("");
            setLocation("");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Create New Post</h1>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="price">Price</label>
                <input type="text" name="price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label htmlFor="price">Location</label>
                <input type="text" name="price" className="form-control" value={location} onChange={(e) => setLocation(e.target.value)} />
                <button type="submit" className="btn btn-primary mt-2 mb-4">Add post</button>
            </form>
        </div>
    );
}

export default CreatePostForm