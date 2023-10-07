<script>
    /** @type {import('./$types').PageData} */
    export let data;

    import ProjectList from "$lib/ProjectList.svelte";
</script>

<h2>derv2ssd</h2>
<p>A user on the NeoZXW platform</p>
<h3>Projects</h3>
<div class="area">
    <ProjectList projects={data.query}/>
</div>