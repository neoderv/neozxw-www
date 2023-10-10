<script>
    export let username, title, id, date;
</script>

<div class="vmeta">
    <a href="/embed/{id}" data-sveltekit-reload >
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
        background-image: linear-gradient(to top, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3)), url('/icon.svg');
        background-size: cover, cover;
        background-position: center, center;
    }

    .vmeta {
        width: 210px;

        margin: auto;

        margin-top: 10px;
    }

    
</style>
