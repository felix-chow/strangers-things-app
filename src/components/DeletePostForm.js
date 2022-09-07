const DeletePostForm = ({ posts, setPosts, postId, setPostId }) => {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const handleDelete = async (postIdToDelete) => {
        console.log("postIdToDelete: ", postIdToDelete);
    }
    setPosts(newPosts);
}

return <>
    <h1>Update Post</h1>
    <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="title" type="text" className="form-control" />
        <input value={description} onChange={e => setDescription(e.target.value)} name="description" type="text" className="form-control" />
        <button type="submit" className="btn btn-primary mt-4">Submit</button>
    </form>
</>