import Post from "./Post";

const Profile = ({ user, token, setPosts }) => {
    if (!user) return null;

    return (
        <div>
            <h1>{user.username}</h1>
            <h2>My posts</h2>
            {user.posts.map((post) => (
                <Post key={post._id} post={post} token={token} setPosts={setPosts} />
            ))}
        </div>
    );
}

export default Profile