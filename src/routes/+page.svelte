<script>
    import Project from "../lib/Project.svelte";
</script>

<div class="list">
    {#each data.data as proj}
        <Project title={proj.title} id={proj.id} date={proj.date} username={proj.username} />
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
