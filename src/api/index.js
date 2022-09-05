const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-PT-WEB-PT';

export const fetchPosts = async () => {
    const result = await fetch(baseURL + "/posts");
    const { data } = await result.json();
    return data.posts;
}

export const createPosts = async(token, title, description, price) => {
    const result = await fetch(baseURL + "/posts", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver: true
          }
        }),
    })
    const { data } = await result.json()
    console.log("data: ", data);
    return data;
};

export const register = async (username, password) => {
    const result = await fetch(baseURL + "/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            }
        }),
    })

    const { data } = await result.json()
    return data;
};

export const login = async (username, password) => {
    const result = await fetch(baseURL + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            }
        }),
    })

    const { data } = await result.json()
    return data;
};

export const fetchUser = async (token) => {
    const result = await fetch(baseURL + "/users/me", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })

    const { data } = await result.json()
    return data;
};