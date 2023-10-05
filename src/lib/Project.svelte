<script>
    export let username, title, id, date;
</script>

<div class="vmeta">
    <a href="/embed/{id}">
        <div class="thumb" />
        <div class="big"><b>{title}</b></div>
    </a>
    <div><a href="/users/{username}">{username}</a></div>
    <div>{(new Date(date)+'').split('GMT')[0]}</div>
</div>

<style>
    .thumb {
        width: 210px;
        height: 120px;
        object-fit: cover;
        background: black;
    }

    .vmeta {
        width: 210px;

        margin: auto;

        margin-top: 10px;
    }

    .big {
        font-size: 1.2rem;
    }
</style>
