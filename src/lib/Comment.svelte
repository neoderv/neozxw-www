<script>
    export let username, content, date, id;
</script>

<div>
    <a href="/users/{username}">
        <h2>
            <img src="/raw/pfp/{username}" alt="" class="icon" />{username}
        </h2>
    </a>
    <p>{content}</p>
    <b>
        <div>{(new Date(date) + "").split("GMT")[0]}</div>
        {#if id || id == 0}
            <div>#{id}</div>
        {:else}
            <div>ID unknown</div>
        {/if}
    </b>
</div>

<style>
    h2 {
        display: flex;
        align-items: center;
    }
</style>
