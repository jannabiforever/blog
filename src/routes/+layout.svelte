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
        width: 60%;
        min-height: 100vh;

        display: block;
        justify-self: center;

        padding: 2.5rem;

        background-image: url("../../croco.png");
        background-color: rgba(255, 255, 255, 0.9);
        background-blend-mode: overlay;
    }
</style>
