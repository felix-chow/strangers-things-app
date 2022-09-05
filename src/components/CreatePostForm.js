import { useState } from "react";

const CreatePostForm = ({ posts, data, setPosts }) => {
    const [title, setTitle] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("title, description: ", title, description);
        setPosts([data, ...posts]);
    }

    return (
        <>
            <h1>Create a Post</h1>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={e => setTitle(e.target.value)} name="title" placeholder="title" type="text" className="form-control" />
                <input value={description} onChange={e => setDescription(e.target.value)} name="description" type="text" className="form-control" />
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </>
    )
}

export default CreatePostForm