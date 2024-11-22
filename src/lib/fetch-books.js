export const fetchBooks = async () => {
    const data = [
        {
            "id": 1,
            "title": "Principles",
            "author": "Ray Dalio",
            "rate": 4.5,
            "description": "This is a book about principles.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9781501124020.jpg"
        },
        {
            "id": 2,
            "title": "Atomic Habits",
            "author": "James Clear",
            "rate": 4.7,
            "description": "This is a book about atomic habits.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9780593189641.jpg"
        },
    ];

    const sortedData = data.sort((a, b) => {
        return b.rate - a.rate;
    })

    return data;
}

export const fetchBookById = async (id) => {
    const data = await fetchBooks();
    const book = data.find((book) => book.id === Number(id));
    return book;
};