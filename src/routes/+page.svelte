<div class="profile-container">
    <div class="profile-img">
        <img src="/profile.jpg" alt="profile" />
    </div>
    <div class="profile-text">
        <p>이름: 유정인</p>
        <p>생년월일: 2003.12.26</p>
        <div class="bio">
            <div class="bio-item">
                <img
                    src="https://static.cdninstagram.com/rsrc.php/y4/r/QaBlI0OZiks.ico"
                    alt="인스타그램"
                />
                <a href="https://www.instagram.com/4ortis_mane/">인스타그램</a>
            </div>
            <div class="bio-item">
                <img
                    src="https://github.githubassets.com/favicons/favicon-dark.svg"
                    alt="깃허브"
                />
                <a href="https://github.com/jannabiforever">깃허브</a>
            </div>
            <div class="bio-item">
                <img src="/naver_blog_icon.png" alt="네이버 블로그" />
                <a href="https://blog.naver.com/jungini1226">네이버 블로그</a>
            </div>
        </div>
    </div>
</div>

<style>
    .profile-container {
        display: flex;
        gap: 2rem;
    }

    .profile-img {
        width: 30%;
    }

    .profile-img img {
        width: 100%;
        height: auto;
        border-radius: 3rem;
    }

    .profile-text {
        font-size: 2.5rem;
    }

    .profile-text p {
        margin: 0 0 1rem 0;
    }

    .bio {
        font-size: 2rem;
        display: block;
        padding: 1rem;

        background-color: black;
        border-radius: 1rem;
    }

    .bio-item img {
        width: 1rem;
        height: auto;
    }

    .bio-item a {
        text-decoration: none;
        color: white;
    }
</style>
