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

        --main-1: #b072da;

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
        border-radius: 1rem;
        box-shadow: var(--shadow-1);

        font-size: 1rem;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
    }

    :global(.area, form) {
        display: flex;
        flex-direction: column;
        max-width: 90vw;
        width: 700px;
        box-shadow: var(--shadow-1);

        padding: 10px;
        margin: 10px;

        grid-column: span 2;
    }

    :global(.area.small, form) {
        grid-column: span 1;
        width: 330px;
    }

    @media only screen and (max-width: 800px) {
        :global(.area.small, form) {
            grid-column: span 2;
            width: 700px;
            max-width: 90vw;
        }
    }

    :global(.button, input:last-child) {
        display: flex;
        justify-content: center;
        padding: 1rem;
        background: var(--main-1);
        color: var(--light-1);
        box-shadow: var(--shadow-1);
        font-weight: bold;
        margin: 10px;
    }

    :global(#main-content) {
        overflow-y: auto;
        padding: 5px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    :global(p, h1) {
        max-width: 600px;
    }

    :global(.big) {
        font-size: 1.2rem;
    }

    :global(.icon) {
        height: 2em;
        width: 2em;
        border-radius: 3rem;
        border: solid white 0.2em;
        margin: 0;
    }

    :global(div, .button, form) {
        border-radius: 1rem;
    }

    :global(.margin) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
    }

    :global(form p) {
        font-weight: bold;
    }
</style>
