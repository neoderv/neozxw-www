<script>
    import Project from "$lib/Project.svelte";
    import Comment from "$lib/Comment.svelte";
    import { onMount } from "svelte";
    export let endpoint = "";
    export let type = "project";
    export let commentType = "project";
    export let id = "0";

    let projects = [];
    let bottom = false;
    let page = 0;
    let observer;

    async function onScroll(e) {
        if (!e) return;

        let json = await fetch(endpoint + page).then((x) => x.json());
        if (!json || json.length < 1) return;
        projects = [...projects, ...json];
        page++;
        observer.disconnect();

        setTimeout(() => observer.observe(bottom), 100);
    }

    onMount(() => {
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                onScroll(entry.intersectionRatio > 0);
            });
        });

        observer.observe(bottom);
    });
</script>

{#if type == "comment"}
    <form
        method="POST"
        action="/comment/{commentType}/{id}"
        enctype="multipart/form-data"
    >
        <p>Content</p>
        <textarea type="text" name="content" />
        <p>Comment</p>
        <input type="submit" />
    </form>
{/if}

{#if type == "project" || !type}
    <div class="list">
        {#each projects as proj}
            <Project
                title={proj.title}
                id={proj.id}
                date={proj.date}
                username={proj.username}
            />
        {/each}
        <span bind:this={bottom} />
    </div>
{:else if type == "comment"}
    <div class="comments area">
        <h2>Comments</h2>
        {#each projects as proj}
            <Comment
                username={proj.username}
                date={proj.date}
                content={proj.content}
            />
        {/each}
        <span bind:this={bottom} />
    </div>
{/if}

<style>
    .list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }

    .comments {
        display: flex;
        flex-direction: column;
    }
</style>
