<script>
    import { onMount } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let proj = "";

    onMount(() => {
        let id = encodeURIComponent(data.id);
        proj = encodeURIComponent(`${window.location.href}/../../raw/${id}`);
    });

    import ProjectList from "$lib/ProjectList.svelte";
</script>

<div class="area">
    <iframe
        src="https://create.neozxw.net/embed.html?project_url={proj}"
        width="499"
        height="416"
    />
    <div class="big"><b>{data.data.title}</b></div>
    <div><a href="/users/{data.data.username}">{data.data.username}</a></div>
    {#if data.data.root}
        <div>
            <a href="/embed/{data.data.root}">Original project</a>
        </div>
    {/if}
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
<div class="area">
    <h1>Remixes</h1>
    <ProjectList projects={data.remixes} />
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
