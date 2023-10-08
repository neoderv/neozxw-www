<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";
</script>

<div class="area">
    <h2><img src='/raw/pfp/{data.theuser}' alt='' class='icon'>{data.theuser}</h2>
    <p>A user on the NeoZXW platform</p>
</div>
<div class="area">
    <h3>Projects</h3>

    <ProjectList projects={data.query} />
</div>

{#if data.theuser == data.authVal.username}
    <form method='POST' enctype="multipart/form-data">
        <p>Profile picture</p>
        <input type='file' name='file'>
        <p>Upload</p>
        <input type='submit'>
    </form>
{/if}

<style>
    h2 {
        display: flex;
        align-items:  center;
    }
</style>