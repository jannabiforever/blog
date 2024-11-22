export const fetchPosts = async () => {
    const data = [
        {
            "id": 1,
            "title": "Post 1",
            "createdAt": "2021-01-01",
            "content": "This is a post about post 1.",
        },
        {
            "id": 2,
            "title": "Post 2",
            "createdAt": "2021-01-02",
            "content": "This is a post about post 2.",
        },
        {
            "id": 3,
            "title": "Post 3",
            "createdAt": "2021-01-03",
            "content": "This is a post about post 3.",
        },
        {
            "id": 4,
            "title": "Post 4",
            "createdAt": "2021-01-04",
            "content": "This is a post about post 4.",
        }
    ];

    let sortedData = data.sort((a,b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    })

    return sortedData;
}

export const fetchPostById = async (id) => {
    const data = await fetchPosts();
    const post = data.find((post) => post.id === Number(id));
    return post;
}