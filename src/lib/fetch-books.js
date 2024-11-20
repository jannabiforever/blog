const BOOKS_API_ENDPOINT = 'https://api.example.com/books';


export const fetchBooks = async () => {
    // const res = await fetch(BOOKS_API_ENDPOINT);
    // const data = await res.json();

    const data = [
        {
            "id": 1,
            "title": "Principles",
            "author": "Ray Dalio",
            "rate": 4.5,
            "description": "This is a book about principles.aaaaaaaaaaaa aaaaaaa aaaaaaa aaaaa aaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\nThis is a book about principles.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
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
        {
            "id": 2,
            "title": "Atomic Habits",
            "author": "James Clear",
            "rate": 4.7,
            "description": "This is a book about atomic habits.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9780593189641.jpg"
        },
        {
            "id": 2,
            "title": "Atomic Habits",
            "author": "James Clear",
            "rate": 4.7,
            "description": "This is a book about atomic habits.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9780593189641.jpg"
        },
        {
            "id": 2,
            "title": "Atomic Habits",
            "author": "James Clear",
            "rate": 4.7,
            "description": "This is a book about atomic habits.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9780593189641.jpg"
        },
        {
            "id": 2,
            "title": "Atomic Habits",
            "author": "James Clear",
            "rate": 4.7,
            "description": "This is a book about atomic habits.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9780593189641.jpg"
        },
        {
            "id": 2,
            "title": "Atomic Habits",
            "author": "James Clear",
            "rate": 4.7,
            "description": "This is a book about atomic habits.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9780593189641.jpg"
        }
    ];

    return data;
}