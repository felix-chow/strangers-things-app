import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPosts, fetchUser } from "./api";
import Home from "./components/Home"
import Profile from "./components/Profile"
import Posts from "./components/Posts";
import SinglePost from "./components/SinglePost";
import AccountForm from "./components/AccountForm";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || "");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    setUser(null);
    navigate("/");
  }

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const user = await fetchUser(token);
        setUser(user);
      }
      getUser();
    }
  }, [token]);

  useEffect(() => {
    window.localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getPosts = async () => {
      const { posts } = await fetchPosts({ path: "/posts", token });
      setPosts(posts);
    }
    getPosts();
  }, [token]);

  return (
    <>
      <div className="p-3">
        <nav className="d-flex justify-content-between mb-4">
          <span >
            <Link className="navbar-brand text-decoration-none" to="/">Stranger's Things</Link>

          </span>
          <div>
            <Link className="text-secondary m-4 text-decoration-none" to="/posts">Posts</Link>
            <Link className="text-secondary m-4 text-decoration-none" to="/profile">Profile</Link>
            {
              token ? (<button className="m-4" onClick={logout}>Log out</button>)
                : (<>
                  <Link className="text-secondary me text-decoration-none" to="/account/login">Login</Link>
                  <Link className="text-secondary m-4 text-decoration-none" to="/account/signup">Sign Up</Link>
                </>)
            }
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/posts" element={<Posts posts={posts} token={token} setPosts={setPosts} />} />
          <Route path="/posts/:postId" element={<SinglePost posts={posts} token={token} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/account/:action" element={<AccountForm setToken={setToken} />} />
        </Routes>
      </div >
    </>
  )
}

export default App