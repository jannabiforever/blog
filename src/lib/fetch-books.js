export const fetchBooks = async () => {
    const data = [
        {
            "id": 1,
            "title": "Principles",
            "author": "Ray Dalio",
            "rate": 4.5,
            "description": "Principles by Ray Dalio is a comprehensive guide to life and work, rooted in the author's experiences as the founder of Bridgewater Associates, one of the world's most successful hedge funds. The book is divided into three parts: Dalio's personal journey, his life principles, and work principles. Dalio emphasizes the importance of radical transparency and radical truth, encouraging individuals to embrace reality, confront challenges, and learn from failures.\nHe outlines a systematic approach to decision-making, using tools like 'pain + reflection = progress' and emphasizing the importance of identifying root causes to solve problems effectively. Dalio introduces his idea of a meritocracy of ideas, where decisions are made based on logic and data rather than hierarchy. The work principles focus on building effective teams, fostering meaningful relationships, and creating a culture of accountability. Through clear frameworks and actionable advice, Principles offers a blueprint for achieving personal growth and organizational success.",
            "cover": "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9781501124020.jpg"
        },
        {
            "id": 2,
            "title": "Atomic Habits",
            "author": "James Clear",
            "rate": 4.7,
            "description": "Atomic Habits by James Clear is a practical guide to building good habits and breaking bad ones. Clear introduces the concept of 'atomic habits'—small, incremental changes that compound over time to create significant transformations in life. The book emphasizes that focusing on systems rather than goals leads to lasting success. Clear presents the Four Laws of Behavior Change: make it obvious, attractive, easy, and satisfying, which serve as actionable steps for habit formation. He explains the importance of identity-based habits, where behaviors align with the person you want to become, rather than solely chasing outcomes. Through engaging anecdotes and evidence-based research, Clear highlights the power of environment design, habit stacking, and tracking to reinforce positive behaviors. He also addresses how to overcome plateaus and maintain progress by emphasizing the value of consistency over perfection. Ultimately, Atomic Habits is a roadmap for leveraging small actions to achieve meaningful life changes.",
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