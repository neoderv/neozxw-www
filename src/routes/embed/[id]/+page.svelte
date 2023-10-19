<script>
    import { onMount } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;

    let proj = "";
    let iframe = false;

    onMount(() => {
        let id = encodeURIComponent(data.id);
        proj = encodeURIComponent(
            `${window.location.href}/../../raw/projects/${id}`
        );
    });

    import ProjectList from "$lib/ProjectList.svelte";
</script>

<div class="area main">
    {#if data && data.data}
        <iframe
            bind:this={iframe}
            src="https://create.neozxw.net/embed.html?project_url={proj}"
            width="499"
            height="416"
            title="project"
        />
        <div class="row">
            <span class="big"><b>{data.data.title}</b></span> by
            <b><a href="/users/{data.data.username}">{data.data.username}</a></b
            >
        </div>
        <div class="row margin">
            <span>
                {#if data.data.date != "none"}
                    Created on <b
                        >{(new Date(data.data.date) + "").split("GMT")[0]}</b
                    >
                {:else}
                    <b>Unlisted</b>
                {/if}
            </span>
            {#if data.data.parent}
                <span>
                    Remixed from <b>
                        <a
                            data-sveltekit-reload
                            href="/embed/{data.data.parent}">another project</a
                        >
                    </b>
                </span>
            {/if}
        </div>
        <div class="row margin">
            <span />
            {#if data.data.root}
                <span>
                    In chain of <b>
                        <a data-sveltekit-reload href="/embed/{data.data.root}"
                            >another project</a
                        >
                    </b>
                </span>
            {/if}
        </div>
        <div class="margin">
            <a
                class="button"
                href="https://create.neozxw.net/editor.html?project_url={proj}"
            >
                {data.authVal.username == data.data.username ? "Edit" : "Remix"}
            </a>
            {#if data.authVal.isAdmin}
                <a class="button" href="/admin"> Admin </a>
            {/if}
        </div>
    {/if}
</div>
<div class="area">
    <h1>Remixes</h1>
    <ProjectList endpoint="/remixes/{data.id}/" />
</div>

<ProjectList
    type="comment"
    endpoint="/comments/project/{data.id}/"
    id={data.id}
/>

<style>
    .area.main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .margin {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
    }
    iframe {
        border: none;
    }
</style>
