<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import Project from "../lib/Project.svelte";
</script>

<div class="area">
    <div class="list">
        {#each data.query as proj}
            <Project
                title={proj.title}
                id={proj.id}
                date={proj.date}
                username={proj.username}
                you={data.username}
            />
        {/each}
    </div>
</div>

<style>
    .list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
