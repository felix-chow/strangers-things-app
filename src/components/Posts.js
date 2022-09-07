import { Link } from "react-router-dom"
// import {
//     CreatePostForm,
//     UpdatePostForm,
//     DeletePostForm,
// } from "../components"

const Posts = ({ posts, setPosts, postId }) => {
    return (
        <div>
            <h1>Posts</h1>
            {/* {
                postId
                    ? <UpdatePostForm posts={posts} setPosts={setPosts} postId={postId} /> : <CreatePostForm posts={posts} setPosts={setPosts} />
            } */}
            {/* {
                posts.map(post => <div key={post.id}>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{post.title}</h3>
                            <h4 className="card-subtitle mb-2 text-muted">{post.author.username}</h4>
                            <h4 className="card-subtitle mb-2 text-muted">{post.price}</h4>
                            <p className="card-text">{post.description}</p>
                            <h5 className="card-subtitle mb-2 text-muted">Created at {post.createdAt}</h5>
                            <h5 className="card-subtitle mb-2 text-muted">Updated at {post.updatedAt}</h5>
                            <Link to=""></Link>
                            <button type="button" className="btn btn-outline-primary" onClick={() => setPostId(post.id)}>Edit</button>
                            <button type="button" className="btn btn-outline-danger" onClick={() => setPostId(post.id)}>Delete</button>
                        </div>
                    </div> 
                </div>)
            } */}
        </div>
    )
}

export default Posts