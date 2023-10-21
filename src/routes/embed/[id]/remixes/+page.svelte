<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";
</script>


<div class="area">
    <h1>Remixes of #{data.id}</h1>
    <ProjectList endpoint="/remixes/{data.id}/" />
</div>