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
    <div class="big"><b>{data.data.title}</b></div>
    <div><a href="/users/{data.data.username}">{data.data.username}</a></div>
    <div>{(new Date(data.data.date) + "").split("GMT")[0]}</div>
    <div>
        <a
            class="button"
            href="https://create.neozxw.net/editor.html?project_url={proj}"
        >
            {data.authVal.username == data.data.username ? "Edit" : "Remix"}
        </a>
    </div>
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
