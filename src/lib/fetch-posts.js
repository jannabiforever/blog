export const fetchPosts = async () => {
    const data = [
        {
            "id": 1,
            "title": "Between Calmness and Passion",
            "createdAt": "2024-10-28",
            "content": `
            I’m really good at immersing myself in something.  

When it comes to the ability to focus in the moment or the duration of sustained immersion, I sometimes feel like no one can match me.  

Practicing piano for five hours a day isn’t hard for me because I have extraordinary stamina or resilience. It’s just that I start doing it, and before I know it, five hours have passed. Only when I pause to move on to the next task do I feel the fatigue and dizziness catch up with me.  

This has happened so many times that I’ve had my sleep pattern completely wrecked more than once because of it. As a result, I’ve become highly skeptical of myself before entering that state of deep focus.  

I find myself asking: “Is this worth integrating into my carefully structured routine? Does it hold enough meaning for me to make room for it?”  

This has made me more demanding and selective in what I choose to immerse myself in. When you’ve got nothing to lose, there’s no reason to be picky. I know that. But knowing and doing are two different things.  

Take participating in a jiu-jitsu competition, for example. In theory, I just need to go, give it my all, and be done with it.  

But for me, the time and effort required to fit the competition into my life translate into a tangible cost of about 40 hours over a month and a half. (This includes the time spent preparing and the downtime before and after.)  

Maybe it’s because I haven’t found it particularly fun yet, but this cost feels significant to me.  

When I have a perfect day, my schedule looks something like this:  

I wake up feeling refreshed around 7:30 a.m., finish reading a book I left halfway before 8:30, and head out by 9 after a shower.  

I start tackling tasks that I *have* to do (even if they’re not enjoyable) and try to finish most of them before lunch.  

After lunch, I take a 20-minute nap and spend the next two hours doing something I want to do. Then I take about an hour and a half to refresh myself—by visiting a bookstore or going for a walk.  

After that, I spend another two hours doing something I want, have dinner, and then spend another two hours on personal pursuits. By 8:30 or 9 p.m., the day is essentially done.  

If I feel like I’ve absolutely nailed the day, I might work out. Otherwise, I don’t bother—I’m mentally retired by then.  

In summary, I can focus intensely for about 8 hours a day, usually divided into four tasks. During those two-hour focus periods, I avoid context switching altogether.  

The breaks are there because, while I *can* focus for five hours straight, I crash mentally right after, losing about three hours of productivity.  

I absolutely hate having my focus interrupted because it takes effort to get back into that flow.  

Currently, those four focused periods are fully booked:  

One is for reading books, one is for coding, one is for work, and one is for jiu-jitsu.  

The lack of context switching has its advantages. It allows me to deepen my familiarity with something quickly.  

For instance, while organizing my desktop recently, I noticed that I had installed the Rust compiler in late March of this year.  

That means I’ve only been a Rustacean for about seven months. Yet, I’ve already contributed to large open-source projects like SurrealDB and Bevy multiple times, learned how to use most crates at a basic level, and understood the core logic behind many of them.  

Off the top of my head, I can list serde, tracing, tokio, actix, axum, rocket, thiserror, and lazy_static. Of course, I owe a lot to that bald Swedish guy (Jon Gjengset).  

Looking back, I realize I’ve studied a lot, though it wasn’t intentional. I just kept at it, and here I am.  

This is perhaps the greatest reward of avoiding context switching. But for someone who wants to do many things, it can also be a disadvantage.  

Sometimes, I envy Kim Ji-ho’s CPU (just sometimes). He seems to maintain deep focus all the time without incurring any context-switching costs. How is that even possible?  

Speaking of which, that’s probably why I disliked schoolwork. There were too many subjects to learn.  

Although I didn’t need to study each subject deeply to keep up, I wasn’t given the time to fully immerse myself in any of them.  

If I’d been more deliberate, I could have managed it, but my immaturity at the time prevented me from doing so.  

So in my first year, I chose computer science to focus on, and in my second year, it was physics.  

I ignored everything else and spent about a month deeply immersed in these subjects (while still playing games, of course).  

Even though I make it sound like I was consistent in my immersion, I wasn’t always. There’s a part of me that wants to appear that way, though.  

On a side note, everyone’s ideal self tends to reflect their personal deficiencies.  

I’m still not sure which deficiency mine stems from. I’m curious.`,
        },
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