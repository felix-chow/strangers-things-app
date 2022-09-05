const Home = ({user}) => {
    return (
        <div>
            <h1>Welcome to Stranger's Things</h1>
            { user && "Logged in as " + user.username }
        </div>
    )
}

export default Home