import { Link } from "react-router-dom"
import CreatePostForm from "./CreatePostForm"

const Posts = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            <CreatePostForm posts={posts} setPosts={setPosts} />
            {
                posts.map(p => (
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{p.title}</h3>
                            <h4 className="card-subtitle mb-2 text-muted">{p.author.username}</h4>
                            <h4 className="card-subtitle mb-2 text-muted">{p.price}</h4>
                            <p className="card-text">{p.description}</p>
                            <h5 className="card-subtitle mb-2 text-muted">Created at {p.createdAt}</h5>
                            <h5 className="card-subtitle mb-2 text-muted">Updated at {p.updatedAt}</h5>
                            <Link to=""></Link>
                        </div>
                    </div>
                ))

            }
        </div>
    )
}

export default Posts