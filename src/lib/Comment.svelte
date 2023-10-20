<script>
    export let username, content, date;
</script>

<div>
    <a href='/users/{username}'><h2><img src="/raw/pfp/{username}" alt="" class="icon">{username}</h2></a>
    <p>{content}</p>
    <div>{(new Date(date) + "").split("GMT")[0]}</div>
</div>

<style>
    h2 {
        display: flex;
        align-items: center;
    }
</style>
