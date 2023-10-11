<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";

    let {authVal, theUser} = data;
</script>

<div class="area">
    <h2><img src='/raw/pfp/{theUser}' alt='' class='icon'>{theUser}</h2>
    <p>A user on the NeoZXW platform</p>
</div>
<div class="area">
    <h3>Projects</h3>

    <ProjectList endpoint="/projects/users/{theUser}/" />
</div>

{#if theUser == authVal.username}
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