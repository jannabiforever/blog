<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Header></Header>
<div class="main-content">
    <slot></slot>
</div>
<Footer></Footer>

<style>
    .main-content {
        width: 50vw;
        min-height: 75vh;

        display: block;
        justify-self: center;

        padding-top: 5vh;
        padding-bottom: 3vh;

        padding-left: 2vw;
        padding-right: 2vw;

        background-image: url("/croco.png");
        background-color: rgba(255, 255, 255, 0.9);
        background-blend-mode: overlay;
    }
</style>
