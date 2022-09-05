import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home"
import Posts from "./components/Posts";
import AccountForm from "./components/AccountForm";
import { fetchPosts, fetchUser } from "./api";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState(window.localStorage.getItem("token") || "");
  const [user, setUser] = useState(null || {});
  
  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    setUser(null);
    navigate("/");
  }

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts()
      setPosts(posts);
    }
    getPosts();
  }, []);

  useEffect(() => {
    const createPosts = async () => {
      const posts = await createPosts()
      setPosts(posts);
    }
    getPosts();
  }, []);

  useEffect(() => {
    if (token) {
      const getUser = async() => {
        const { user } = await fetchUser(token);
        setUser(user);
      }
      getUser();
    }
  }, [token]);

  useEffect(() => {
    window.localStorage.setItem("token", token);
  }, [token]);

  return (
    <>
      <div className="p-3">
        <nav className="d-flex justify-content-between mb-4">
          <span>
            <Link className="text-decoration-none" to="/">Stranger's Things</Link>

          </span>
          <div>
            <Link className="text-decoration-none" to="/posts">Posts</Link>
            {
              token ?
                <button onClick={logout}>Log out</button>
                :
                <>
                  <Link className="me" to="/account/login">Login</Link>
                  <Link to="/account/signup">Sign Up</Link>
                </>
            }
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home user={user}/>} />
          <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/account/:action" element={<AccountForm setToken={setToken} />} />
        </Routes>
      </div >
    </>
  )
}

export default App