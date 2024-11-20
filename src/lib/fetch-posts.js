const POSTS_API_ENDPOINT = 'some-endpoint';

export const fetchPosts = async () => {
    // let data = await fetch(POSTS_API_ENDPOINT);
    // data = await data.json();

    const data = [
        {
            "id": 1,
            "title": "Post 1",
            "createdAt": "2021-01-01",
            "content": "This is a post about post 1.",
        }
    ];

    return data;
}