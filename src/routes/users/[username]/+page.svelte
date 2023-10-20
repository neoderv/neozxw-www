<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";

    let { authVal, theUser, userData } = data;

    let displayUser =
        userData.isAdmin == "admin" ? `${theUser} [admin]` : theUser;
</script>

<div class="area">
    <h2><img src="/raw/pfp/{theUser}" alt="" class="icon" />{displayUser}</h2>
    <p>A user on the NeoZXW platform</p>

    <div class="margin">
        <a class="button" href="/users/{theUser}/projects"> Projects </a>
    </div>
</div>

{#if theUser == authVal.username}
    <form method="POST" enctype="multipart/form-data">
        <p>Profile picture</p>
        <input type="file" name="file" />
        <p>Upload</p>
        <input type="submit" />
    </form>
{/if}

<ProjectList
    type="comment"
    commentType="user"
    endpoint="/comments/user/{theUser}/"
    id={theUser}
/>

<style>
    h2 {
        display: flex;
        align-items: center;
    }
</style>
