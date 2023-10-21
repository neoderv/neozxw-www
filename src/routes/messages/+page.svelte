<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<div class="area">
    <h1>Messages</h1>
    {#each data.data as message}
        <a href={message.href}>
            {message.content}
            <span class="date">
                [{(new Date(+message.date) + "").split(" GMT")[0]}]
            </span>
        </a>
    {/each}
</div>

<style>
    a {
        color: var(--dark-1);
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    .date {
        font-weight: bold;
    }
</style>
