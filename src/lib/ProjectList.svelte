<script>
    import Project from "$lib/Project.svelte";
    import { onMount } from "svelte";
    export let endpoint = "";

    let projects = [];
    let bottom = false;
    let page = 0;
    let observer;

    async function onScroll(e) {
        if (!e) return;

        let json = await fetch(endpoint+page).then(x => x.json());
        if (!json || json.length < 1) return;
        projects = [...projects,...json];
        page++;
        observer.disconnect();

        setTimeout(() => observer.observe(bottom),100);
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

<style>
    .list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
