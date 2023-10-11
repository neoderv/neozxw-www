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
</div>

<div class="area">
    <ProjectList endpoint="/projects/home/" />
</div>
