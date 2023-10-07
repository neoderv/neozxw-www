<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";
</script>

<h1>Express your creativity on NeoZXW</h1>
<p>
    NeoZXW is <a href="https://dervland.net/">my </a> new programming
    platform based off of the <a href="https://scratch.mit.edu/">Scratch</a> and
    <a href="https://turbowarp.org/">TurboWarp source code.</a>
</p>
<p>
    <a href='https://discord.gg/ByTS9Fnber'>I operate a Discord community for this website.</a>
</p>

<div class="area">
    <ProjectList projects={data.query} />
</div>
