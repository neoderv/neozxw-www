<script>
    import { onMount } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let proj = "";

    onMount(() => {
        let id = encodeURIComponent(data.id);
        proj = encodeURIComponent(
            `${window.location.href}/../../raw/projects/${id}`
        );
    });

    import ProjectList from "$lib/ProjectList.svelte";
</script>

<div class="area">
    <iframe
        src="https://create.neozxw.net/embed.html?project_url={proj}"
        width="499"
        height="416"
    />
    <div class='row'>
        <span class='big'><b>{data.data.title}</b></span> by
        <b><a href="/users/{data.data.username}">{data.data.username}</a></b>
    </div>
    <div class="row">
        <span />
        {#if data.data.root}
            <span>
                Remixed from <b
                    ><a href="/embed/{data.data.root}">another project</a></b
                >
            </span>
        {/if}
        <span>
            Created on <b>{(new Date(data.data.date) + "").split("GMT")[0]}</b>
        </span>
    </div>
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
