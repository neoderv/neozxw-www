<script>
    import { onMount } from "svelte";

    export let data = { username: "!nobody" };
    
    let { username } = data;
    let url = "";

    onMount(() => {
        url = encodeURIComponent(window.location.origin + "/auth");
    });
</script>

<div class="area">
    <div class="row">
        <a href="/">Home</a>
        {#if username == "!nobody"}
            <a href="https://auth.dervland.net/login?next={url}">Log in</a>
        {:else}
            <a href="/users/{username}">{username}</a>
            <a href="https://create.neozxw.net/editor.html">Create</a>
        {/if}
    </div>
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .row a {
        margin: 10px;
        font-weight: bold;
        color: var(--light-1);
    }

    .area {
        box-shadow: var(--shadow-1);

        background: var(--main-1);

        padding: 10px;
        margin-top: 10px;
    }
</style>
