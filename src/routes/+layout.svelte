<script>
    /** @type {import('./$types').LayoutData} */
    export let data;

    import Header from "$lib/Header.svelte";
</script>

<Header {data} />

<div id="main-content">
    <slot />
</div>

<style>
    :global(body) {
        height: 100vh;
        width: 100vw;
        padding-top: 0px;

        display: flex;
        flex-direction: column;
        align-items: center;

        overflow-y: auto;
    }

    :global(:root) {
        --dark-1: #2b2f36;
        --dark-2: #d8d8d8;

        --main-1: #957aa7;

        --light-1: #ffffff;
        --light-2: #f8f8f8;

        --hyperlink: rgb(139, 171, 219);

        --shadow-1: 0px 0px 2px 2px var(--dark-2);

        font-family: "Open Sans";
    }

    :global(a) {
        color: var(--hyperlink);
        text-decoration: none;
    }

    :global(input, textarea) {
        border: 0;
        border-radius: 0.2rem;
        box-shadow: var(--shadow-1);

        font-size: 1rem;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
    }

    :global(.area, form) {
        display: grid;
        grid-template-columns: 1fr;
        max-width: 90vw;
        width: 700px;

        box-shadow: var(--shadow-1);

        padding: 10px;
        margin-top: 10px;
    }

    :global(.button) {
        display: flex;
        padding: 1rem;
        background: var(--main-1);
        color: var(--light-1);
        box-shadow: var(--shadow-1);
        font-weight: bold;
        margin: 10px;
    }

    :global(form) {
        grid-template-columns: 0.7fr 1fr;
    }

    :global(#main-content) {
        overflow-y: auto;
        padding: 5px;
    }

    :global(p, h1) {
        width: 600px;
    }

    :global(.big) {
        font-size: 1.2rem;
    }
</style>
