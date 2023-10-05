<script>
    import { onMount } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let proj = "";

    onMount(() => {
        let id = encodeURIComponent(data.id);
        proj = encodeURIComponent(`${window.location.href}/../../raw/${id}`);
    });
</script>

<div class="area">
    <iframe
        src="https://create.neozxw.net/embed.html?project_url={proj}"
        width="480"
        height="360"
    />
</div>

<style>
    .area {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    iframe {
        border: none;
    }
</style>
