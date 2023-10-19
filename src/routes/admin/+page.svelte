<script>
    import { onMount } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

{#if data.authVal.isAdmin == "admin"}
    <form method="POST" enctype="multipart/form-data">
        <p>Project ID to unlist</p>
        <input type="text" name="id" />
        <p>Delete</p>
        <input type="submit" />
    </form>
{/if}
