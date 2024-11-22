<script>
    import AboutMe from "$lib/components/AboutMe.svelte";
</script>

<div class="profile-container">
    <div class="profile-img">
        <img src="/profile.jpg" alt="profile" />
    </div>
    <div class="about-me">
        <AboutMe />
    </div>
</div>

<style>
    .profile-container {
        display: flex;
        justify-content: space-between;
    }

    .profile-img {
        width: 33%;
    }

    .profile-img img {
        width: 100%;
        height: auto;
        border-radius: 10%;
    }

    .about-me {
        width: 63%;
    }
</style>
