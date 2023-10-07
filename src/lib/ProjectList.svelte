<script>
    import Project from "$lib/Project.svelte";
    export let projects = [];
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
</div>

<style>
    .list {
        display: flex;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>
