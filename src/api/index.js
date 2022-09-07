const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-PT-WEB-PT';

export const fetchPosts = async () => {
    const result = await fetch(baseURL + "/posts");
    const { data } = await result.json();
    return data.posts;
}

// export const createPosts = async(token, title, description, price) => {
//     const result = await fetch(baseURL + "/posts", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           post: {
//             title,
//             description,
//             price,
//             willDeliver: true
//           }
//         }),
//     })
//     const { data } = await result.json()
//     console.log("data: ", data);
//     return data;
// };

// export const updatePosts = async(token, title, description, price, location, postId) => {
//     const result = await fetch(baseURL + `/posts/${postId}`, {
//         method: "PATCH",
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           post: {
//             title,
//             description,
//             price,
//             location,
//             willDeliver: true
//           }
//         }),
//     })
//     const { data } = await result.json()
//     console.log("data: ", data);
//     if (data & data.title) {
//         const newPosts = posts.map(post => {
//             if (post.id === postId) {
//                 return data;
//             } else {
//                 return post;
//             }
//         });
        
//     }
// };

// export const deletePosts = async(token, postIdToDelete) => {
//     const result = await fetch(baseURL + `/posts/${postIdToDelete}`, {
//         method: "DELETE",
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//     })
//     const data = await result.json()
//     console.log("data: ", data);
//     if (data) {
//         const newPosts = posts.filter(post => post.id !== postIdToDelete)
//     }
// };

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
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })

    const { data } = await result.json()
    return data;
};