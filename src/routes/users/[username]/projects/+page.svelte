<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";

    let { theUser } = data;
</script>

<div class="area">
    <h3>Projects of {theUser}</h3>

    <ProjectList endpoint="/projects/users/{theUser}/" />
</div>

<style>
    h2 {
        display: flex;
        align-items: center;
    }
</style>
