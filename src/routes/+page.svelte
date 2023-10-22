<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";
</script>

<div class="area">
    <h1>Express your Creativity on NeoZXW</h1>

    <p>
        NeoZXW is a new programming platform based off of the <a
            href="https://scratch.mit.edu/">Scratch</a
        >
        and
        <a href="https://turbowarp.org/">TurboWarp source code.</a>
    </p>

    <div class='margin'>
        <a href='/tos' class='button'>Guidelines</a>
        <a href='https://discord.gg/4cb8RaCS8p' class='button'>Chat</a>
        <a href='https://main.dervland.net/' class='button'>Other Projects</a>
    </div>
</div>

<div class="area">
    <ProjectList endpoint="/projects/home/" />
</div>
